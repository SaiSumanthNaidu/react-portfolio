import './Hero.css'
import profile from '../../assets/profile.png'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope
} from 'react-icons/fa'

function Hero({ experience }) {

    return (
        <section id="home" className="hero">

            <motion.div
                className="hero-content"
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >

                <div className="hero-badge">
                    Available for Opportunities
                </div>

                <h3>Hello, I'm</h3>

                <h1>
                    Bandaru Sai
                    <br />
                    Sumanth
                </h1>

                <TypeAnimation
                    sequence={[
                        'Python Full Stack Developer',
                        2000,
                        'React Developer',
                        2000,
                        'Django Developer',
                        2000,
                        'REST API Developer',
                        2000,
                    ]}
                    wrapper="h2"
                    speed={50}
                    repeat={Infinity}
                    className="typing"
                />

                <p>{experience}</p>

                <div className="hero-buttons">

                    <a href="#projects">
                        <button className="primary-btn">
                            View Projects
                        </button>
                    </a>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="secondary-btn">
                            View Resume
                        </button>
                    </a>

                    <a href="/resume.pdf" download>
                        <button className="secondary-btn">
                            Download CV
                        </button>
                    </a>

                </div>

                <div className="social-links">

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

            </motion.div>

            <motion.div
                className="hero-image"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
            >
                <div className="image-glow"></div>

                <img
                    src={profile}
                    alt="Bandaru Sai Sumanth"
                />
            </motion.div>

        </section>
    )
}

export default Hero