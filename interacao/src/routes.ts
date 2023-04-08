import express from "express";
import dotenvsave from "dotenv-safe"
import { PrismaRepository } from "./repositories/prisma/PrismaRepository";
import { UserAuth } from "./utils/userauth";
import { TicketController } from "./use-cases/TicketController";
import { MessageController } from "./use-cases/MessageController";

dotenvsave.config()


export const routes = express.Router();

const repository = new PrismaRepository();
const auth = new UserAuth()

routes.post('/ticket/create', auth.VerifyToken, (req:any, res, next) => {
    const {reason} = req.body 
    const user_id = req.userInfo.id 
    const ticketController = new TicketController(repository); 
    ticketController.CreateTicket({reason, user_id}).then((ticket)=>{ 
      return res.json(ticket) 
    }) 
  }); 
  
  routes.post('/ticket/message', auth.VerifyToken, (req:any, res, next)=>{
    const {text, ticketID} = req.body
    const user_id = req.userInfo.id
    const messageController = new MessageController(repository)
    messageController.CreateTicketMessage({text, user_id, ticketID}).then((message)=>{
      return res.json(message)
    })
  })