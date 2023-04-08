import { MessageProps, MessageRepository } from "../repositories/MessageRepository";
import { TicketProps, TicketRepository } from "../repositories/TicketsRepository";

export class MessageController implements MessageRepository {
    constructor(private messageRepository: MessageRepository){}

    async CreateTicketMessage({text, user_id, ticketID}: MessageProps) {
        return await this.messageRepository.CreateTicketMessage({
            text,
            user_id,
            ticketID
        })
    };
}