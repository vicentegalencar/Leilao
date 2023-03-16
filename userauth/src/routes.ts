import express, { NextFunction } from "express";
import { PrismaRepository } from "./repositories/prisma/PrismaRepository";
import { ChangePassword, CreateUser, DeleteUser, UpdateUser } from "./use-cases/UserCases";

import dotenvsafe from "dotenv-safe";
import jwt, { JwtPayload } from "jsonwebtoken";
import { UserIDRequest } from "./definition/definition";

dotenvsafe.config();

export const routes = express.Router();

const repository = new PrismaRepository();

routes.post("/user/create", (req, res) => {
  req.body.birthday = new Date(req.body.birthday);
  const createUser = new CreateUser(repository);
  createUser.execute(req.body);
  return res.status(201).send();
});

routes.post("/login", (req, res) => {
  const { email, password } = req.body;

  repository.getUserInfo({ email }).then((user) => {
    if (user.password == password) {
      const token = jwt.sign({ id: user.id }, process.env.SECRET as string, {
        expiresIn: 3600,
      });
      return res.json({ auth: true, token: token });
    }
    return res.status(500).json({ message: "Login Inválido" });
  });
});

routes.post("/logout", (req, res) => {
  return res.json({ auth: false, token: null });
});

routes.post("/verifytoken", verify_token, (req, res, next) => {
  return res.json({ auth: true });
});

routes.get('/user/info', verify_token, (req, res, next) => {
  repository.getUserInfo({id: (req as UserIDRequest).userID}).then((user)=>{
    res.json(user)
  })
})

routes.post('/password/change', verify_token, (req, res, next)=>{
  const {newpw, oldpw} = req.body
  const changePassword = new ChangePassword(repository)
  changePassword.execute((req as UserIDRequest).userID, oldpw, newpw).then(()=>{
    res.status(201).json({message:"Senha alterada com sucesso"})
  }).catch((err)=>{
    res.status(400).json({message: "Nao foi possivel alterar a senha"})
  })
})

routes.put('/user/update', verify_token, (req, res, next)=>{
  const {email, name, cpf, birthday, phone} = req.body
  
  const updateUser = new UpdateUser(repository)
  updateUser.execute((req as UserIDRequest).userID, {email, name, cpf, birthday, phone}).then(()=>{
    res.status(201).json(req.body)
  }).catch((err)=>{
    res.status(400).json({message: 'Nao foi possivel alterar seus dados', err})
  })
})

routes.post('/user/delete', verify_token, (req, res, next)=>{
  const deleteUser = new DeleteUser(repository);
  deleteUser.execute((req as UserIDRequest).userID).then(()=>{
    res.status(200).json({message: 'Usuario deletado do sistema com sucesso'})
  })
})

function verify_token(req: any, res: any, next: any) {
  const token = req.headers["x-access-token"];
  if (!token)
    return res
      .status(401)
      .json({ auth: false, message: "Nenhum token informado" });
  jwt.verify(token as string, process.env.SECRET as string, (err, decoded) => {
    if (err)
      return res
        .status(500)
        .json({ auth: false, message: "Falha ao verificar o token" });
    req.userID = (decoded as JwtPayload).id;
    next();
  });
}
