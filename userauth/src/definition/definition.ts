import { Request } from "express";

export interface UserIDRequest extends Request {
    userID: string
}