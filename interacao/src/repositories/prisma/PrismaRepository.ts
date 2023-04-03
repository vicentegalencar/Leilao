import { Message, Ticket } from "@prisma/client";
import { prisma } from "../../prisma";
import { CommentProps, CommentsRepository } from "../CommentsRepository";
import { TicketProps, TicketRepository } from "../TicketsRepository";
import { MessageProps, MessageRepository } from "../MessageRepository";

export class PrismaRepository implements CommentsRepository, TicketRepository, MessageRepository {
    async CreateComment({text, user_id, auction_id}: CommentProps) {
        await prisma.comment.create({data: {
            auction_id,
            user_id,
            text
        }})
    }

    async CreateTicket({reason, user_id}: TicketProps) {
        return await prisma.ticket.create(
            {
                data: {
                    reason,
                    user_id
                }
            }
        )
    };

    async CreateTicketMessage({ text, user_id, ticketID }: MessageProps) {
        return await prisma.message.create({data:{
            user_id,
            text,
            ticketID
        }})
    };

}