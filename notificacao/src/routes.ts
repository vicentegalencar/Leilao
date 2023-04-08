import express, { NextFunction } from "express";
import { MailgunService } from "./controllers/MailgunService";


export const routes = express.Router();

const mailgunservice = new MailgunService()

routes.post('/send', (req, res)=>{
	const {to, subject, text} = req.body 
 	mailgunservice.Sendmail({to, subject, text}) 
    return res.status(200).json() 
}) 
