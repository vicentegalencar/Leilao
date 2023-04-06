import { create } from "domain";
import { MailService, Mailprops } from "./MailService";
import formData from 'form-data';
import Mailgun from 'mailgun.js';
import { Type } from "typescript";


class MailgunService implements MailService   { 
    from:string;
    private mg:any;
    constructor (){
        const mailgun = new Mailgun(formData)
        this.from="Mailgun Sandbox <postmaster@sandbox772415a1be5240d29f2f006d467ef3d7.mailgun.org>"
        this.mg = mailgun.client({
            username: 'api',
            key: 'e628aace99e27f0b145724af4614269b-81bd92f8-915dfee1',
        });
        
    }  
    async  Sendmail ({to, subject, text }: Mailprops ){
        await this.mg.messages
        .create('sandbox772415a1be5240d29f2f006d467ef3d7.mailgun.org', {
            from: "Mailgun Sandbox <postmaster@sandbox772415a1be5240d29f2f006d467ef3d7.mailgun.org>",
            to,
            subject,
            text,
            
        }).then ((r: any)=>{return r})
    }  
    
}