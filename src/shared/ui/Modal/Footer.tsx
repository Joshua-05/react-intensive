import type { FC, ReactNode } from "react";
import styles from "./Modal.module.css"

export const Footer: FC<{ children: ReactNode }> = ({ children }) => (
    <div className={styles.footer}>{children}</div>
)