import express, { NextFunction } from "express";
import { PrismaRepository } from "./repositories/prisma/PrismaRepository";


import formData from 'form-data';
import Mailgun from 'mailgun.js';

const mailgun = new Mailgun(formData)
export const routes = express.Router();


const mg = mailgun.client({
    username: 'api',
    key: 'e628aace99e27f0b145724af4614269b-81bd92f8-915dfee1',
});

async function sendMail (to: string[], subject: string, text: string){
    await mg.messages
	.create('sandbox772415a1be5240d29f2f006d467ef3d7.mailgun.org', {
        from: "Mailgun Sandbox <postmaster@sandbox772415a1be5240d29f2f006d467ef3d7.mailgun.org>",
		to,
		subject,
		text,
        
	}).then ((r)=>{return r})
} 




routes.get('/send', (req, res)=>{

        const { 
            to, subject, text
        } = req.body
 sendMail(
    to, subject, text)
    return res.status(200).json()
}) 
    
    const repository = new PrismaRepository();