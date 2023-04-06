import { promises } from "dns"


export interface Mailprops{
    to: string[],
    subject: string,
    text: string

}

export interface MailService{
    from: string, 
    Sendmail:(propiedades: Mailprops) => Promise <void>

}




