import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Stats from './components/Stats/Stats'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
        <Navbar />

        <Hero
            name="Sai Sumanth"
            role="Full Stack Developer"
            experience="Building modern web applications using Python, Django, JavaScript, and React."
        />

        <Stats />

        <About />

        <Skills />

        <Projects />

        <Contact />

        <Footer />

    </>
  )
}

export default App