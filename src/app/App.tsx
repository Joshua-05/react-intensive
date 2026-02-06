import MainLayout from '../shared/layouts/MainLayout'
import { useTheme } from '../shared/lib/theme/useTheme'
import PostList from '../widgets/PostList/PostList'
import styles from "./App.module.css"

function App() {

  const { theme } = useTheme()

  console.log(theme)
  return (
    <div id='app' className={styles[`app_${theme}`]}>
      <MainLayout>
        <PostList />
      </MainLayout>
    </div>
  )
}

export default App
