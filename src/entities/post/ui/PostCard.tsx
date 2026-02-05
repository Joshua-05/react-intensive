import styles from "./PostCard.module.css"

interface PostCardProps {
    title: string,
    text: string
}

const PostCard = (props: PostCardProps) => {
    const {title, text} = props

    return(
        <div className={styles.postCard}>
            <span>{title}</span>
            <p>{text}</p>
        </div>
    )
}

export default PostCard