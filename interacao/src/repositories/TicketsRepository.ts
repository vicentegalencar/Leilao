import { Ticket } from "@prisma/client"

export interface TicketProps {
    reason: string
    user_id: string
    ticket_id?: string
}

export interface TicketRepository {
    CreateTicket: (props: TicketProps)=>Promise<Ticket>
    
}