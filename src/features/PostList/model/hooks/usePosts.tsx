import { useState, useEffect, useCallback } from 'react'

export interface Post {
    id: number
    title: string
    body: string
    userId: number
}

interface UsePostsReturn {
    posts: Post[]
    isLoading: boolean
    error: string | null
    refetch: () => Promise<void>
}

export const usePosts = (userId?: number): UsePostsReturn => {
    const [posts, setPosts] = useState<Post[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const fetchPosts = useCallback(async () => {
        setIsLoading(true)
        setError(null)
        
        try {
            const url = userId 
                ? `https://jsonplaceholder.typicode.com/users/${userId}/posts`
                : 'https://jsonplaceholder.typicode.com/posts'
            
            const response = await fetch(url)
            
            if (!response.ok) {
                throw new Error('Ошибка загрузки постов')
            }
            
            const data = await response.json()
            setPosts(data)
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Неизвестная ошибка')
        } finally {
            setIsLoading(false)
        }
    }, [userId])

    useEffect(() => {
        fetchPosts()
    }, [fetchPosts])

    return {
        posts,
        isLoading,
        error,
        refetch: fetchPosts
    }
}