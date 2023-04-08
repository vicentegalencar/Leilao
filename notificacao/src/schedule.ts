import nodeSchedule from "node-schedule"
import { MailgunService } from "./controllers/MailgunService";
import axios from "axios";

const mailgunservice = new MailgunService()

export class NotificationSchedules {

    constructor(){}

    createJobs() {
        
        const job = nodeSchedule.scheduleJob('0 0 8 1/1 * ? *', async () => {
            await axios.get('http://127.0.0.1:8000/Leilao/ativos/', {headers:{"x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsZjg5azF3YzAwMDByemN3bmgyMnNyYWUiLCJpYXQiOjE2ODA5MTM0ODAsImV4cCI6MTY4MTUxODI4MH0.JRFxpMHoMM8lbW4AvaZaSSver6Ucxx42SCiupyghMrQ"}})
            .then(async (res)=>{
                await axios.get('http://127.0.0.1:4000/user/mail/list', {headers:{"x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsZjg5azF3YzAwMDByemN3bmgyMnNyYWUiLCJpYXQiOjE2ODA5MTM0ODAsImV4cCI6MTY4MTUxODI4MH0.JRFxpMHoMM8lbW4AvaZaSSver6Ucxx42SCiupyghMrQ"}}).then((mailres)=>{
                console.log(res.data);
                // const leilaotxt = res.data.map((l:any)=>{
                //     return {nome:l.nome, lance_inicial:l.lance_inicial, lance_atual:l.lance_atual}
                // })
                var leilaotxt = ''
                res.data.forEach((l:any)=>{
                    leilaotxt+=`${l.nome}\nLance inicial: ${l.lance_inicial}\nLance atual: ${l.lance_atual}\n\n`
                })

                mailgunservice.Sendmail({to: mailres.data.list, subject: "Leilões ativos hoje", text:`Olá! Esses são os leilões que estão rolando. Corre que ainda dá tempo.\n\n${leilaotxt}`})
                })
            })
        });
    }
}