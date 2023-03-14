import express, { NextFunction } from "express";
import { PrismaRepository } from "./repositories/prisma/PrismaRepository";
import { CreateUser } from "./prisma/use-cases/CreateUser";

import dotenvsafe from "dotenv-safe";
import jwt, { JwtPayload } from "jsonwebtoken";

dotenvsafe.config();

export const routes = express.Router();

const prismaRepository = new PrismaRepository();

routes.post("/user/create", (req, res) => {
  req.body.birthday = new Date(req.body.birthday);
  const createUser = new CreateUser(prismaRepository);
  createUser.execute(req.body);
  return res.status(201).send();
});

routes.post("/login", (req, res) => {
  const { email, password } = req.body;

  prismaRepository.getUserInfo({ email }).then((user) => {
    if (user.password == password) {
      const token = jwt.sign({ id: user.id }, process.env.SECRET as string, {
        expiresIn: 300,
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
