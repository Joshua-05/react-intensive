import type { FC, ReactNode } from "react"
import { createPortal } from "react-dom"
import styles from "./Modal.module.css"
import { useTheme } from "../../lib/theme/useTheme"
import { Header } from "./Header"
import { Body } from "./Body"
import { Footer } from "./Footer"

interface ModalProps {
    children: ReactNode,
    open: boolean
}

interface ModalComponents {
    Header: FC<{ children: ReactNode }>
    Body: FC<{ children: ReactNode }>
    Footer: FC<{ children: ReactNode }>
}

const Modal: FC<ModalProps> & ModalComponents = ({ children, open}) => {
    const { theme } = useTheme()

    if (!open) {
        return null
    }
    
    const modal = (
        <div className={`${styles.modal} ${styles[`modal_${theme}`]}`}>
            {children}
        </div>
    )

    return createPortal(modal, document.body)
}

Modal.Header = Header
Modal.Body = Body
Modal.Footer = Footer

export default Modal