import express from "express";
import dotenvsave from "dotenv-safe"
import { PrismaRepository } from "./repositories/prisma/PrismaRepository";
import { UserAuth } from "./utils/userauth";
import { TicketController } from "./use-cases/TicketController";

dotenvsave.config()


export const routes = express.Router();

const repository = new PrismaRepository();
const auth = new UserAuth()

routes.post('/ticket/create', auth.VerifyToken, (req:any, res, next) => {
    const {reason} = req.body
    const user_id = req.userInfo.id
    console.log(user_id, reason)
    const ticketController = new TicketController(repository);
    ticketController.CreateTicket({reason, user_id})
  });