import { Route, Routes } from 'react-router-dom'
import styles from './App.module.scss'
import Header from './components/layout/header/Header'
import Home from './pages/home-page/HomePage'
import Footer from './components/layout/footer/Footer'
import PortfolioPage from './pages/portfolio-page/PortfolioPage'
import NewsPage from './pages/news-page/NewsPage'
import NotFound from './pages/not-found/NotFound'
import { ThemeProvider } from './providers/ThemeProvider'
import Layout from './components/layout/Layout'

function App() {

  return (
    <ThemeProvider>
      <Layout>
        <div className={styles.App}>
          <Header />
          <div className={styles.App__routes}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/portfolioPage' element={<PortfolioPage />} />
              <Route path='/NewsPage' element={<NewsPage />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Layout>
    </ThemeProvider>
  )
}

export default App
