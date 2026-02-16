export interface Post {
    id: string
    title: string
    text: string
}

export const filterByLength = (posts: Post[], minLength: number): Post[] => {
    if (!minLength) return posts
    
    return posts.filter(post => post.title.length >= minLength)
}