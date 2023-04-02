import { prisma } from "../../prisma";
import { CommentProps, CommentsRepository } from "../CommentsRepository";

export class PrismaRepository implements CommentsRepository {
    async CreateComment({text, user_id, auction_id}: CommentProps) {
        await prisma.comment.create({data: {
            auction_id,
            user_id,
            text
        }})
    }
}