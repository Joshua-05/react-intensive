import styles from "./PostCard.module.css"
import { CommentList } from "../../../widgets/CommentList/ui/CommentList"


export interface PostCardProps {
    id: string,
    title: string,
    text: string
}

const PostCard = (props: PostCardProps) => {
    const {title, text} = props

    const comments = [
        { id: 1, author: "Ваня", text: "Комментирую один" },
        { id: 2, author: "Петр", text: "Комментирую два" },
        { id: 3, author: "Иван", text: "Комментирую три" },
    ]
    
    

    return(
        <div className={styles.postCard}>
            <span>{title}</span>
            <p>{text}</p>
            <CommentList comments={comments} />
        </div>
    )
}

export default PostCard