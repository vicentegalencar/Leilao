import express from 'express'
import cors from 'cors'
import { routes } from './routes'


import http from 'http'
import { Server } from 'socket.io'
import { PrismaRepository } from './repositories/prisma/PrismaRepository'
import { CommentAuction } from './use-cases/CommentAuction'
import { SocketClient } from '../definition/definition'



// Porta do servidor
const PORT = process.env.PORT || 4001

// Host do servidor
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'


// App Express
const app = express()
app.use(express.json())
const repository = new PrismaRepository()


app.use(cors({
    origin: "http://127.0.0.1:5173", // Substitua pela URL do seu frontend, se necessário
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "x-access-token"],
}));


app.use(routes)




// Inicia o sevidor
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
      origin: '*', // Permitir conexões de qualquer origem. Ajuste de acordo com suas necessidades.
      methods: ['GET', 'POST'],
    },
  });


io.on('connection', (client: any)=>{
    console.log("Cliente conectado")

    

    client.on('ehlo', (msg: any)=>{
        client.auction_id = msg.auction_id
        client.user_data = msg.user_data
    })

    client.on('comment', (msg: any)=>{
        const commentAuction = new CommentAuction(repository)
        // commentAuction.execute({
        //     auction_id: client.auction_id as string,
        //     user_id: client.user_id as string,
        //     text: msg.text
        // })
        console.log(msg);
        
        io.sockets.sockets.forEach(async (c: any)=>{
            console.log("ola");
            
            if(c.auction_id == client.auction_id && c.user_data.id !== client.user_data.id) {
                c.emit('comment', {user_id: client.user_data.user_id, message: msg, display_name: client.user_data.display_name})
            }
        })
    })
})

server.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
})