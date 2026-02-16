import React, { useState, useCallback } from 'react'

interface PostLengthFilterProps {
    onFilterChange: (minLength: number) => void
}

export const PostLengthFilter: React.FC<PostLengthFilterProps> = ({ onFilterChange }) => {
    const [minLength, setMinLength] = useState<number>(0)

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value)
        setMinLength(value)
        onFilterChange(value)
    }, [onFilterChange])

    return (
        <div>
            <label>
                Мин. длина заголовка: 
                <input
                    type="number"
                    min={0}
                    max={50}
                    value={minLength}
                    onChange={handleChange}
                />
            </label>
        </div>
    )
}