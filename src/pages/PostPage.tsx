import { useNavigate, useParams } from "react-router-dom"
import { usePosts } from "../features/PostList/model/hooks/usePosts"
import Button from "../shared/ui/Button/Button"

const PostPage = () => {
    const { id } = useParams()
    const { posts, isLoading, error } = usePosts()
    const navigate = useNavigate()

    const post = posts.find(p => p.id === Number(id))

    function clickBck () {
        navigate(-1)
    }

    return(
        <>
            <Button value="Назад" func={clickBck}/>
            {isLoading && ( <div>Загрузка...</div> )}
            {error && ( <div>Ошибка: {error}</div> )}
            {!post ? (<div>Пост не найден</div>) : (
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            )}
        </>
    )
}

export default PostPage