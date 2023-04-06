import express from 'express'
// import cors from 'cors'
import { routes } from './routes'


// Porta do servidor
const PORT = process.env.PORT || 4002

// Host do servidor
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

const app = express()
app.use(express.json())
app.use(routes)

// Inicia o sevidor
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
})

