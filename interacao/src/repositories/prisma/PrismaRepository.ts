import { prisma } from "../../prisma";
import { CommentProps, CommentsRepository } from "../CommentsRepository";
import { TicketProps, TicketRepository } from "../TicketsRepository";

export class PrismaRepository implements CommentsRepository, TicketRepository {
    async CreateComment({text, user_id, auction_id}: CommentProps) {
        await prisma.comment.create({data: {
            auction_id,
            user_id,
            text
        }})
    }

    async CreateTicket({reason, user_id}: TicketProps) {
        await prisma.ticket.create(
            {
                data: {
                    reason,
                    user_id
                }
            }
        )
    };
}