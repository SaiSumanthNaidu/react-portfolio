import { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [hovered, setHovered] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

    useEffect(() => {

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        const handleScroll = () => {
            setScrolled(window.scrollY > 100)
        }

        window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleResize)
        }

    }, [])

    return (
        <nav
            className={
                isMobile
                    ? 'navbar active'
                    : scrolled && !hovered
                    ? 'navbar transparent'
                    : 'navbar active'
            }
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >

            <h1 className="logo">Sai Sumanth</h1>

            <div
                className="menu-icon"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </div>

            <ul className={menuOpen ? 'nav-links active' : 'nav-links'}>

                <li>
                    <a href="#" onClick={() => setMenuOpen(false)}>
                        Home
                    </a>
                </li>

                <li>
                    <a href="#about" onClick={() => setMenuOpen(false)}>
                        About
                    </a>
                </li>

                <li>
                    <a href="#skills" onClick={() => setMenuOpen(false)}>
                        Skills
                    </a>
                </li>

                <li>
                    <a href="#projects" onClick={() => setMenuOpen(false)}>
                        Projects
                    </a>
                </li>

                <li>
                    <a href="#contact" onClick={() => setMenuOpen(false)}>
                        Contact
                    </a>
                </li>

            </ul>

        </nav>
    )
}

export default Navbar