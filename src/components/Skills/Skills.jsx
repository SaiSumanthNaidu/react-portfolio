import './Skills.css'
import { motion } from 'framer-motion'

function Skills() {

    const skills = [
        "Python",
        "JavaScript",
        "React",
        "Django",
        "MySQL",
        "Git",
        "HTML",
        "CSS"
    ]

    return (
        <section
            id="skills"
            className="skills"
            data-aos="fade-right"
        >

            <h2>My Skills</h2>

            <div className="skills-container">

                {skills.map((skill, index) => (

                    <motion.div
                        key={index}
                        className="skill-card"
                        initial={{
                            opacity: 0,
                            y: 30
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.4,
                            delay: index * 0.1
                        }}
                        whileHover={{
                            scale: 1.1,
                            y: -8
                        }}
                    >
                        {skill}
                    </motion.div>

                ))}

            </div>

        </section>
    )
}

export default Skills