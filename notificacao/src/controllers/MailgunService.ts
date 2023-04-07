import { create } from "domain";
import { MailService, Mailprops } from "./MailService";
import formData from 'form-data';
import Mailgun from 'mailgun.js';
import { Type } from "typescript";


export class MailgunService implements MailService   { 
    from:string;
    private mg:any;
    constructor (){
        const mailgun = new Mailgun(formData)
        this.from="Mailgun Sandbox <postmaster@sandbox9f9134db25a545f6968a1579a57b9999.mailgun.org>"
        this.mg = mailgun.client({
            username: 'api',
            key: '',
        });
        console.log("aaaaaaaaaaaaaaaaaaaaaaa")
        
    }  
    Sendmail ({to, subject, text }: Mailprops ){
        console.log(to[0]);
        
        this.mg.messages
        .create('sandboxc89f125230294989bdce25bf196e972c.mailgun.org', {
            from: this.from,
            to,
            subject,
            text,
            
        }).then ((r: any)=>{return r})
    }  
    
}