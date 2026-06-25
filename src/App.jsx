import { useState, useEffect } from 'react'

import ScrollProgress from './components/ScrollProgress/ScrollProgress'
import BackToTop from './components/BackToTop/BackToTop'
import Loader from './components/Loader/Loader'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Timeline from './components/Timeline/Timeline'
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'
import Stats from './components/Stats/Stats'
import Projects from './components/Projects/Projects'
import Certificates from './components/Certificates/Certificates'
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
        <div className={`app ${darkMode ? "dark" : "light"}`}>

            <ScrollProgress />

            <BackToTop />

            <Navbar
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />

            <Hero
                name="Bandaru Sai Sumanth"
                role="Python Full Stack Developer"
                experience="Passionate Full Stack Developer specializing in Python, Django, React, and modern web technologies, building scalable and user-friendly applications."
            />

            <About />

            <Timeline />

            <Experience />

            <Skills />

            <Stats />

            <Projects />

            <Certificates />

            <Contact />

            <Footer />

        </div>
    )
}

export default App