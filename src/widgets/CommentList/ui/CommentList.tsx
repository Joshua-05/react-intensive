import { useState, useCallback, type FC } from 'react'
import Button from '../../../shared/ui/Button/Button'

interface Comment {
    id: number
    text: string
    author: string
}

interface CommentListProps {
    comments: Comment[]
}

export const CommentList: FC<CommentListProps> = ({ comments }) => {
    const [expandedId, setExpandedId] = useState<number | null>(null)
    const [showComments, setShowComments] = useState(false)

    const showComment = useCallback((id: number) => {
        setExpandedId(prevId => prevId === id ? null : id)
    }, [])

    
    function changeShowComments() {
        setShowComments(prev => !prev)
    }
    
    const buttonValue = `Комментарии (${comments.length})`

    return (
        <div>
            <Button value={buttonValue} func={changeShowComments}/>
            { showComments && comments.map(comment => (
                <div key={comment.id}>
                    
                    <div onClick={() => showComment(comment.id)}>
                        {comment.author} {expandedId === comment.id ? 'убрать' : 'показать' }
                    </div>
                    
                    {expandedId === comment.id && (
                        <div>{comment.text}</div>
                    )}
                    

                </div>
            ))}
        </div>
    )
}