import express from "express";
import { PrismaRepository } from "./repositories/prisma/PrismaRepository";
import { CreateUser } from "./prisma/use-cases/CreateUser";

export const routes = express.Router()

const prismaRepository = new PrismaRepository();

routes.post('/user/create', (req, res)=>{
    req.body.birthday = new Date(req.body.birthday);
    const createUser = new CreateUser(prismaRepository);
    createUser.execute(req.body);
    return res.status(201).send();
})

routes.get('/', (req, res)=>{
    return res.send({'message':'ok'})
})

routes.get('/user', (req, res)=>{
    return res.send({name: 'Claudinho do Gera'})
})