import './Footer.css'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

function Footer() {
    return (
        <footer className="footer">

            <h2>Sai Sumanth</h2>

            <p>Python Full Stack Developer</p>

            <div className="footer-icons">

                <a
                    href="https://github.com/SaiSumanthNaidu"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                </a>

                <a
                    href="https://www.linkedin.com/in/bandaru-sai-sumanth-949761352"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />
                </a>

                <a href="mailto:bandarusaisumanth@gmail.com">
                    <FaEnvelope />
                </a>

            </div>

            <p className="copyright">
                © {new Date().getFullYear()} Sai Sumanth. All Rights Reserved.
            </p>

        </footer>
    )
}

export default Footer