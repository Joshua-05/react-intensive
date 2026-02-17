import { Fragment } from "react/jsx-runtime"
import PostCard from "../../entities/post/ui/PostCard"
import { withLoading } from "../../shared/lib/hoc/withLoading"
import { useCallback, useMemo, useState } from "react"
import { filterByLength } from "../../features/PostLengthFilter/lib/filterByLength"
import { PostLengthFilter } from "../../features/PostLengthFilter/ui/PostLengthFilter"
import type { Post } from "../../features/PostList/model/hooks/usePosts"


interface PostListProps {
    posts: Post[]
}

const PostList = ({posts} : PostListProps) => {
    const [minLength, setMinLength] = useState(0)

    const filteredPosts = useMemo(() => {
        return filterByLength(posts, minLength)
    }, [posts, minLength])

    const handleFilterChange = useCallback((length: number) => {
        setMinLength(length)
    }, [])

     const postsList = useMemo(() => {
        return filteredPosts.map(post => (
            <Fragment key={post.id}>
                <PostCard 
                    id={post.id} 
                    title={post.title} 
                    body={post.body} 
                    userId={post.userId}
                />
            </Fragment>
        ))
    }, [filteredPosts])

    return(
        <>
            <PostLengthFilter onFilterChange={handleFilterChange} />
            {postsList}
        </>
    )
}

export default withLoading(PostList)