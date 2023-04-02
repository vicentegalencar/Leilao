import express from 'express'
// import cors from 'cors'
import { routes } from './routes'


import http from 'http'
import { Server } from 'socket.io'
import { PrismaRepository } from './repositories/prisma/PrismaRepository'
import { CommentAuction } from './use-cases/CommentAuction'
import { SocketClient } from '../definition/definition'



// Porta do servidor
const PORT = process.env.PORT || 4000

// Host do servidor
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'


// App Express
const app = express()
app.use(express.json())
app.use(routes)
const repository = new PrismaRepository()

// Inicia o sevidor
const server = http.createServer(app)
const io = new Server(server)


io.on('connection', (client: SocketClient)=>{
    console.log("Cliente conectado")
    client.on('ehlo', (msg)=>{
        client.auction_id = msg.auction_id
        client.user_id = msg.user_id
    })

    client.on('comment', (msg)=>{
        const commentAuction = new CommentAuction(repository)
        commentAuction.execute({
            auction_id: client.auction_id as string,
            user_id: client.user_id as string,
            text: msg.text
        })
        
        io.sockets.sockets.forEach(async (c: SocketClient)=>{
            if(c.auction_id == client.auction_id && c.user_id !== client.user_id) {
                c.emit('comment', {user_id: client.user_id, message: msg})
            }
        })
    })
})

server.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
})