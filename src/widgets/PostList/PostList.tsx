import PostCard from "../../entities/post/ui/PostCard"

const PostList = () => {
    const data = [
        {
            "id": 1,
            "title": "Title1",
            "text": "textTextTextTextTextText"
        },
        {
            "id": 2,
            "title": "Title2",
            "text": "textTextTextTextTextText"
        },
        {
            "id": 3,
            "title": "Title3",
            "text": "textTextTextTextTextText"
        },
        {
            "id": 4,
            "title": "Title4",
            "text": "textTextTextTextTextText"
        },
    ]

    return(
        <>
            {
                data.map(post => <PostCard key={post.id} title={post.title} text={post.text} />)
            }
        </>
    )
}

export default PostList