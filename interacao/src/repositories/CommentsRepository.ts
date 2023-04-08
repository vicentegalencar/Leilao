export interface CommentProps {
    text: string
    user_id: string
    auction_id: string
} 

export interface CommentsRepository {
    CreateComment: (props: CommentProps)=>Promise<void>;
}