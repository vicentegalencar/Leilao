import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const PORT = process.env.PORT || 4000;

const HOSTNAME = process.env.HOSTNAME || 'http://localhost';

const app = express();
app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173", // Substitua pela URL do seu frontend, se necessário
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization","x-access-token"],
}));

app.use(routes);

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`);
});