import { TicketProps, TicketRepository } from "../repositories/TicketsRepository";

export class TicketController implements TicketRepository {
    constructor(private ticketRepository: TicketRepository){}

    async CreateTicket({reason, user_id}: TicketProps) {
        return await this.ticketRepository.CreateTicket({
            reason, user_id
        })
    };
}