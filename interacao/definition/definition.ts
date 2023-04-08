import { Socket } from "socket.io";

export interface SocketClient extends Socket {
    auction_id?: string
    user_id?: string
}