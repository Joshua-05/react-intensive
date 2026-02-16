import type { FC, ReactNode } from "react";
import styles from "./Modal.module.css"

export const Header: FC<{ children: ReactNode }> = ({ children }) => (
    <div className={styles.header}>{children}</div>
)