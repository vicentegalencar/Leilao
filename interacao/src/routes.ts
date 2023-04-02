import express from "express";
import dotenvsave from "dotenv-safe"
import { PrismaRepository } from "./repositories/prisma/PrismaRepository";
import { UserAuth } from "./utils/userauth";

dotenvsave.config()


export const routes = express.Router();

const repository = new PrismaRepository();
const auth = new UserAuth()

routes.get('/ticket/create', auth.VerifyToken, (req, res, next) => {
    res.json({ok:"ok"});
  });