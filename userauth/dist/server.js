"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import cors from 'cors'
// Porta do servidor
const PORT = process.env.PORT || 4000;
// Host do servidor
const HOSTNAME = process.env.HOSTNAME || 'http://localhost';
// App Express
const app = (0, express_1.default)();
// Endpoint raiz
app.get('/', (req, res) => {
    res.send('Bem-vindo!');
});
// Cors
// app.use(cors({
//     origin: ['http://localhost:3000']
// }))
// Resposta padrão para quaisquer outras requisições:
app.use((req, res) => {
    res.status(404);
});
// Inicia o sevidor
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`);
});
