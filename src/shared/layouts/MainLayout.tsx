import styles from "./MainLayout.module.css"
import Header from "../../widgets/LayoutHeader/Header"
import Footer from "../../widgets/LayoutFooter/Footer"
import { Outlet } from "react-router-dom"
import { useTheme } from "../lib/theme/useTheme"

const MainLayout = () => {

    const { theme } = useTheme()
    return(
        <div className={`${styles.app} ${styles[`app_${theme}`]} `}>
            <div className={styles.mainLayout}>
                <Header />
                <main className={styles.mainContent}>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default MainLayout