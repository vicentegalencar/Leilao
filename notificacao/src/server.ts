import express from 'express'
// import cors from 'cors'
import { routes } from './routes'
import { NotificationSchedules } from './schedule'
import axios from 'axios'


// Porta do servidor
const PORT = process.env.PORT || 4002

// Host do servidor
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

const app = express()
app.use(express.json())
app.use(routes)

const schedule = new NotificationSchedules()

schedule.createJobs()
// Inicia o sevidor
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
})

