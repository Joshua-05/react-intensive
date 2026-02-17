import { usePosts } from '../features/PostList/model/hooks/usePosts'
import Button from '../shared/ui/Button/Button'
import PostList from '../widgets/PostList/PostList'

const PostsPage = () => {
    const { posts, isLoading, error, refetch } = usePosts()
    return (
        <>
            <Button value='Обновить' func={refetch}/>
            {isLoading && ( <div>Загрузка...</div> )}
            {error && ( <div>Ошибка: {error}</div> )}
            <h1>Все посты</h1>
            <PostList posts={posts}/>
        </>
    )
}

export default PostsPage