import type { FC, ReactNode } from "react"
import styles from "./MainLayout.module.css"
import Header from "../../widgets/LayoutHeader/Header"
import Footer from "../../widgets/LayoutFooter/Footer"

interface MainLayoutProps {
    children: ReactNode
}

const MainLayout: FC<MainLayoutProps> = ( {children} ) => {
    return(
        <div className={styles.mainLayout}>
            <Header />
            <main className={styles.mainContent}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout