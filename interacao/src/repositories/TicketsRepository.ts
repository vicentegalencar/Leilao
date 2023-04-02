export interface TicketProps {
    reason: string
    user_id: string
}

export interface TicketRepository {
    CreateTicket: (props: TicketProps)=>Promise<void>
}