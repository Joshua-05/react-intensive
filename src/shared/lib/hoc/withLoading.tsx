import { type ComponentType, type ReactNode } from 'react'

interface WithLoadingProps {
    isLoading?: boolean
    loadingComponent?: ReactNode
    error?: string | null
    errorComponent?: ReactNode
}

export function withLoading<P extends object>(
    WrappedComponent: ComponentType<P>
) {
    return function WithLoadingComponent({
        isLoading = false,
        loadingComponent = <div>Загрузка...</div>,
        error = null,
        errorComponent = <div>Ошибка загрузки</div>,
        ...props
    }: P & WithLoadingProps) {
        
        if (error) {
            return <>{errorComponent}</>
        }
        
        if (isLoading) {
            return <>{loadingComponent}</>
        }

        return <WrappedComponent {...props as P} />
    }
}