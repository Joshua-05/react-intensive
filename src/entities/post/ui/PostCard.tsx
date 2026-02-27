import styles from "./PostCard.module.css"
import { CommentList } from "../../../widgets/CommentList/ui/CommentList"
import type { Post } from "../../../features/PostList/model/hooks/usePosts"
import { useNavigate } from "react-router-dom"
import Button from "../../../shared/ui/Button/Button"


const PostCard = (props: Post) => {
    const {title, body, id} = props
    const navigate = useNavigate()
    const comments = [
        { id: 1, author: "Ваня", text: "Комментирую один" },
        { id: 2, author: "Петр", text: "Комментирую два" },
        { id: 3, author: "Иван", text: "Комментирую три" },
    ]
    
    function handleClickCard () {
        navigate(`/posts/${id}`)
    }

    function handleClickAuthor () {
        navigate(`/users/${id}/posts`)
    }

    return(
        <div className={styles.postCard}>
            <span><b>{title}</b></span>
            <p>{body}</p>
            <Button value="Перейти к посту" func={handleClickCard}/>
            <Button value="Все посты автора" func={handleClickAuthor}/>
            <CommentList comments={comments} />
        </div>
    )
}

export default PostCard