import {
  CommentProps,
  CommentsRepository,
} from "../repositories/CommentsRepository";

export class CommentAuction {
  constructor(private commentsRepository: CommentsRepository) {}

  async execute({ auction_id, text, user_id }: CommentProps) {
    await this.commentsRepository.CreateComment({ auction_id, text, user_id });
  }
}
