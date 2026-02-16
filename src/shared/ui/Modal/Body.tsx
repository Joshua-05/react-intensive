import type { FC, ReactNode } from "react";
import styles from "./Modal.module.css"

export const Body: FC<{ children: ReactNode }> = ({ children }) => (
    <div className={styles.body}>{children}</div>
)