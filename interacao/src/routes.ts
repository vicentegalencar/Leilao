import express from "express";
import dotenvsave from "dotenv-safe"

dotenvsave.config()


export const routes = express.Router();

routes.get('/', (req, res) => {
    res.sendFile(__dirname + '/client.html');
  });