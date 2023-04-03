import { Message } from "@prisma/client"

export interface MessageProps {
    user_id: string
    text: string
    ticketID?: string
}

export interface MessageRepository {
    CreateTicketMessage: ({text, user_id, ticketID}: MessageProps)=>Promise<Message>
}