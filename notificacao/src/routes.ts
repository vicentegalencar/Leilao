import express, { NextFunction } from "express";
import { PrismaRepository } from "./repositories/prisma/PrismaRepository";
import { MailgunService } from "./controllers/MailgunService";

import formData from 'form-data';
import Mailgun from 'mailgun.js';

const mailgun = new Mailgun(formData)
export const routes = express.Router();


const mg = mailgun.client({
    username: 'api',
    key: '',
});

mg.messages
	.create('sandbox9f9134db25a545f6968a1579a57b9999.mailgun.org', {
		from: "Mailgun Sandbox <postmaster@sandbox9f9134db25a545f6968a1579a57b9999.mailgun.org>",
		to: ["ronaldo.rodriguesf@ufrpe.br"],
		subject: "Hello",
		text: "Testing some Mailgun awesomness!",
	})

	.then(msg => console.log(msg)) // logs response data
	.catch(err => console.log(err)); // logs any error`;

async function sendMail (to: string[], subject: string, text: string){
    await mg.messages
	.create('sandbox9f9134db25a545f6968a1579a57b9999.mailgun.org', {
        from: "Mailgun Sandbox <postmaster@sandbox9f9134db25a545f6968a1579a57b9999.mailgun.org>",
		to,
		subject,
		text,
        
	}).then ((r)=>{return r})
} 


routes.post('/send', (req, res)=>{
      console.log (req.body.to[0]) 
       const { 
            to, subject, text
        } = req.body 
 sendMail(
    to, subject, text) 
    return res.status(200).json() 
}) 
    
    const repository = new PrismaRepository(); 