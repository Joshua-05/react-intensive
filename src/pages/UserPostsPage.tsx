import { useNavigate, useParams } from "react-router-dom"
import { usePosts } from "../features/PostList/model/hooks/usePosts"
import PostList from "../widgets/PostList/PostList"
import Button from "../shared/ui/Button/Button"

const UserPostsPage = () => {
    const { id } = useParams()
    const { posts, isLoading, error } = usePosts(Number(id))
    const navigate = useNavigate()

    function clickBack () {
        navigate(-1)
    }

    return (
        <>
            <Button value="Назад" func={clickBack}/>
            {isLoading && ( <div>Загрузка...</div> )}
            {error && ( <div>Ошибка: {error}</div> )}
            <h1>Все посты автора </h1>
            <PostList posts={posts}/>
        </>
    )
}

export default UserPostsPage