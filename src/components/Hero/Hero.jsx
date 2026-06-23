import './Hero.css'
import profile from '../../assets/profile.png'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

function Hero({ name, role, experience }) {
    return (
        <motion.section
            className="hero"
            data-aos="fade-up"
        
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >

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
                        'Full Stack Developer',
                        2000,
                        'React Developer',
                        2000,
                        'Python Developer',
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
                        <button>
                            View Projects
                        </button>
                    </a>

                    <a href="/resume.pdf" download>
                        <button>
                            Download Resume
                        </button>
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