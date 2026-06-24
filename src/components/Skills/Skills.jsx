import './Skills.css'
import { motion } from 'framer-motion'

function Skills() {

    const skills = [
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 85 },
        { name: "Django", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "Git", level: 75 },
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 }
    ]

    return (
        <section
            id="skills"
            className="skills"
            data-aos="zoom-in"
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
                            scale: 1.05,
                            y: -8
                        }}
                    >
                        <div className="skill-header">
                            <span>{skill.name}</span>
                            <span>{skill.level}%</span>
                        </div>

                        <div className="progress-bar">
                            <motion.div
                                className="progress-fill"
                                initial={{ width: 0 }}
                                whileInView={{
                                    width: `${skill.level}%`
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 1.5,
                                    delay: index * 0.2
                                }}
                            />
                        </div>

                    </motion.div>

                ))}

            </div>

        </section>
    )
}

export default Skills