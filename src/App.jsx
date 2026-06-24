import { useState, useEffect } from 'react'
import ScrollProgress from './components/ScrollProgress/ScrollProgress'
import BackToTop from './components/BackToTop/BackToTop'
import Loader from './components/Loader/Loader'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Stats from './components/Stats/Stats'
import Timeline from './components/Timeline/Timeline'
import Certificates from './components/Certificates/Certificates'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

import './App.css'

function App() {

    const [loading, setLoading] = useState(true)

    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('darkMode')
        return savedTheme === 'true'
    })

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode)
    }, [darkMode])

    if (loading) {
        return <Loader />
    }

    return (
    <div className={darkMode ? 'app dark' : 'app'}>

      <ScrollProgress />

      <BackToTop />

      <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
      />

      <Hero
        name="Sai Sumanth"
        role="Full Stack Developer"
        experience="Building modern web applications using Python, Django, JavaScript, and React."
      />

      <Stats />

      <Timeline />

      <Certificates />

      <About />

      <Skills />

      <Projects />

      <Contact />

      <Footer />

    </div>
  )
}

export default App