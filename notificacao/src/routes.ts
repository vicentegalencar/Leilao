import express, { NextFunction } from "express";
import { PrismaRepository } from "./repositories/prisma/PrismaRepository";



export const routes = express.Router();

const repository = new PrismaRepository();