import { MailService, Mailprops } from "./MailService";
import formData from 'form-data';
import Mailgun from 'mailgun.js';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()


export class MailgunService implements MailService   { 
    from:string;
    private mg:any;
    constructor (){
        const mailgun = new Mailgun(formData)
        this.from="Leilão Distribuido <postmaster@sandbox9f9134db25a545f6968a1579a57b9999.mailgun.org>"
        this.mg = mailgun.client({
            username: 'api',
            key: process.env.MAILGUN_KEY as string,
        });
        
    }  
    Sendmail ({to, subject, text }: Mailprops ){
        this.mg.messages
        .create('sandbox9f9134db25a545f6968a1579a57b9999.mailgun.org', {
            from: this.from,
            to,
            subject,
            text,
            
        }).then ((r: any)=>{return r})
    }  
    
}