import { useState, useEffect } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import './Navbar.css'

function Navbar({ darkMode, setDarkMode }) {

    const [menuOpen, setMenuOpen] = useState(false)
    const [active, setActive] = useState('home')

    useEffect(() => {

        const sections = document.querySelectorAll("section")

        const handleScroll = () => {

            sections.forEach((section) => {
                const top = window.scrollY + 100
                const offset = section.offsetTop - 150
                const height = section.offsetHeight
                const id = section.getAttribute("id")

                if (top >= offset && top < offset + height) {
                    setActive(id)
                }
            })
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    }, [])

    return (
        <nav className="navbar active">

            <h1 className="logo">Sai Sumanth</h1>

            <ul className={menuOpen ? 'nav-links active' : 'nav-links'}>

                <li>
                    <a
                        href="#home"
                        className={active === 'home' ? 'active-link' : ''}
                    >
                        Home
                    </a>
                </li>

                <li>
                    <a
                        href="#about"
                        className={active === 'about' ? 'active-link' : ''}
                    >
                        About
                    </a>
                </li>

                <li>
                    <a
                        href="#skills"
                        className={active === 'skills' ? 'active-link' : ''}
                    >
                        Skills
                    </a>
                </li>

                <li>
                    <a
                        href="#projects"
                        className={active === 'projects' ? 'active-link' : ''}
                    >
                        Projects
                    </a>
                </li>

                <li>
                    <a
                        href="#contact"
                        className={active === 'contact' ? 'active-link' : ''}
                    >
                        Contact
                    </a>
                </li>

                <li>
                    <button
                        className="theme-btn"
                        onClick={() => setDarkMode(!darkMode)}
                    >
                        {darkMode ? <FaSun /> : <FaMoon />}
                    </button>
                </li>

            </ul>

        </nav>
    )
}

export default Navbar