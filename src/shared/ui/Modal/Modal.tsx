import type { FC, ReactNode } from "react"
import { createPortal } from "react-dom"
import styles from "./Modal.module.css"
import { useTheme } from "../../lib/theme/useTheme"

interface ModalProps {
    children: ReactNode,
    open: boolean
}

const Modal: FC<ModalProps> = ( {children, open} ) => {

    const { theme } = useTheme()

    if (!open) return null
    const modal = (
        <div className={styles[`modal_${theme}`]}>
            {children}
        </div>
    )

    return createPortal(
        modal,
        document.getElementById('app')!
    )
}

export default Modal