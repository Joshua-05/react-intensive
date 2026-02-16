import { Fragment } from "react/jsx-runtime"
import PostCard, { type PostCardProps } from "../../entities/post/ui/PostCard"
import { withLoading } from "../../shared/lib/hoc/withLoading"
import { useCallback, useMemo, useState, type FC } from "react"
import { filterByLength } from "../../features/PostLengthFilter/lib/filterByLength"
import { PostLengthFilter } from "../../features/PostLengthFilter/ui/PostLengthFilter"

const posts = [
        {
            "id": "1",
            "title": "Title1",
            "text": "textTextTextTextTextText"
        },
        {
            "id": "2",
            "title": "Title22",
            "text": "textTextTextTextTextText"
        },
        {
            "id": "3",
            "title": "Title333Title4444",
            "text": "textTextTextTextTextText"
        },
        {
            "id": "4",
            "title": "Title4444Title4444Title4444",
            "text": "textTextTextTextTextText"
        },
        {
            "id": "5",
            "title": "Title4444Title4444Title4444Title4444",
            "text": "textTextTextTextTextText"
        },
    ]

interface PostListProps {
    data?: PostCardProps[]
}

const PostList : FC<PostListProps> = () => {
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
                    text={post.text} 
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