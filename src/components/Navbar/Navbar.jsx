import { useState, useEffect } from 'react'
import {
    FaMoon,
    FaSun,
    FaBars,
    FaTimes
} from 'react-icons/fa'

import './Navbar.css'

function Navbar({ darkMode, setDarkMode }) {

    const [menuOpen, setMenuOpen] = useState(false)
    const [active, setActive] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {

        const sections = document.querySelectorAll('section')

        const handleScroll = () => {

            setScrolled(window.scrollY > 50)

            sections.forEach((section) => {

                const top = window.scrollY + 150
                const offset = section.offsetTop
                const height = section.offsetHeight
                const id = section.getAttribute('id')

                if (
                    top >= offset &&
                    top < offset + height
                ) {
                    setActive(id)
                }
            })
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener(
                'scroll',
                handleScroll
            )
        }

    }, [])

    const closeMenu = () => {
        setMenuOpen(false)
    }

    return (

        <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>

            <h1 className="logo">
                Sai Sumanth
            </h1>

            <div
                className="menu-icon"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>

            <ul
                className={
                    menuOpen
                        ? 'nav-links active'
                        : 'nav-links'
                }
            >

                <li>
                    <a
                        href="#home"
                        onClick={closeMenu}
                        className={
                            active === 'home'
                                ? 'active-link'
                                : ''
                        }
                    >
                        Home
                    </a>
                </li>

                <li>
                    <a
                        href="#about"
                        onClick={closeMenu}
                        className={
                            active === 'about'
                                ? 'active-link'
                                : ''
                        }
                    >
                        About
                    </a>
                </li>

                <li>
                    <a
                        href="#skills"
                        onClick={closeMenu}
                        className={
                            active === 'skills'
                                ? 'active-link'
                                : ''
                        }
                    >
                        Skills
                    </a>
                </li>

                <li>
                    <a
                        href="#projects"
                        onClick={closeMenu}
                        className={
                            active === 'projects'
                                ? 'active-link'
                                : ''
                        }
                    >
                        Projects
                    </a>
                </li>

                <li>
                    <a
                        href="#contact"
                        onClick={closeMenu}
                        className={
                            active === 'contact'
                                ? 'active-link'
                                : ''
                        }
                    >
                        Contact
                    </a>
                </li>

                <li>
                    <button
                        className="theme-btn"
                        onClick={() =>
                            setDarkMode(!darkMode)
                        }
                    >
                        {darkMode
                            ? <FaSun />
                            : <FaMoon />}
                    </button>
                </li>

            </ul>

        </nav>
    )
}

export default Navbar