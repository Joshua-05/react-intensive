import { useState } from 'react'
import MainLayout from '../shared/layouts/MainLayout'
import { useTheme } from '../shared/lib/theme/useTheme'
import PostList from '../widgets/PostList/PostList'
import styles from "./App.module.css"

function App() {

  const { theme } = useTheme()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState(null)

  return (
    <div id='app' className={`${styles.app} ${styles[`app_${theme}`]} `}>
      <MainLayout>
        <PostList isLoading={loading} error={error}/>
      </MainLayout>
    </div>
  )
}

export default App
