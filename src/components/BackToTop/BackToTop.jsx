import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import './BackToTop.css'

function BackToTop() {

    const [visible, setVisible] = useState(false)

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 150) {
                setVisible(true)
            } else {
                setVisible(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () =>
            window.removeEventListener('scroll', handleScroll)

    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <button
            className={`back-to-top ${visible ? 'show' : ''}`}
            onClick={scrollToTop}
        >
            <FaArrowUp />
        </button>
    )
}

export default BackToTop