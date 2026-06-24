import './Hero.css'
import profile from '../../assets/profile.png'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import BackgroundShapes from '../BackgroundShapes/BackgroundShapes'

function Hero({ name, role, experience }) {
    return (
        <motion.section
            id="home"
            className="hero"
            data-aos="fade-up"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <BackgroundShapes />

            <motion.div
                className="hero-content"
                initial={{ x: -80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h3>Hello, I'm</h3>

                <h1>{name}</h1>

                <TypeAnimation
                    sequence={[
                        'Python Full Stack Developer',
                        2000,
                        'React Developer',
                        2000,
                        'Django Developer',
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
                        <button>View Projects</button>
                    </a>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button>View Resume</button>
                    </a>

                    <a href="/resume.pdf" download>
                        <button>Download Resume</button>
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

                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=bandarusaisumanth@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaEnvelope />
                    </a>

                </div>
            </motion.div>

            <motion.div
                className="hero-image"
                initial={{ x: 80, opacity: 0, scale: 0.8 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                whileHover={{
                    scale: 1.05
                }}
            >
                <img src={profile} alt="Profile" />
            </motion.div>

        </motion.section>
    )
}

export default Hero