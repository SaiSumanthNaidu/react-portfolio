import './About.css'
import { motion } from 'framer-motion'
import { FaCode, FaGraduationCap, FaRocket } from 'react-icons/fa'

function About() {
    return (
        <section id="about" className="about">

            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
            >
                About Me
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
            >
                I'm Sai Sumanth, a Full Stack Developer passionate about
                building modern web applications using Python, Django,
                React, and JavaScript. I enjoy solving problems and
                continuously learning new technologies.
            </motion.p>

            <div className="about-cards">

                <motion.div
                    className="about-card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{
                        y: -10,
                        scale: 1.05
                    }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <FaCode className="about-icon" />
                    <h3>Developer</h3>
                    <p>
                        Building modern web applications using Python,
                        Django and React.
                    </p>
                </motion.div>

                <motion.div
                    className="about-card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{
                        y: -10,
                        scale: 1.05
                    }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <FaGraduationCap className="about-icon" />
                    <h3>B.Tech Graduate</h3>
                    <p>
                        Graduate from Aurora's Technological and Research
                        Institute, Hyderabad.
                    </p>
                </motion.div>

                <motion.div
                    className="about-card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{
                        y: -10,
                        scale: 1.05
                    }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <FaRocket className="about-icon" />
                    <h3>Problem Solver</h3>
                    <p>
                        Enjoy solving real-world challenges and learning
                        new technologies.
                    </p>
                </motion.div>

            </div>

        </section>
    )
}

export default About