import type { Post } from "../../PostList/model/hooks/usePosts"

export const filterByLength = (posts: Post[], minLength: number): Post[] => {
    if (!minLength) return posts
    
    return posts.filter(post => post.title.length >= minLength)
}