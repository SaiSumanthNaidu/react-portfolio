import './Skills.css'
import { motion } from 'framer-motion'

import {
    FaPython,
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
    FaDatabase
} from 'react-icons/fa'

import {
    SiDjango,
    SiJavascript
} from 'react-icons/si'

function Skills() {

    const skills = [
        {
            name: "Python",
            level: 90,
            icon: <FaPython />,
            category: "Backend Development"
        },
        {
            name: "Django",
            level: 85,
            icon: <SiDjango />,
            category: "Web Framework"
        },
        {
            name: "React",
            level: 80,
            icon: <FaReact />,
            category: "Frontend Development"
        },
        {
            name: "JavaScript",
            level: 80,
            icon: <SiJavascript />,
            category: "Programming Language"
        },
        {
            name: "MySQL",
            level: 75,
            icon: <FaDatabase />,
            category: "Database"
        },
        {
            name: "Git",
            level: 85,
            icon: <FaGitAlt />,
            category: "Version Control"
        },
        {
            name: "HTML",
            level: 95,
            icon: <FaHtml5 />,
            category: "Markup Language"
        },
        {
            name: "CSS",
            level: 90,
            icon: <FaCss3Alt />,
            category: "Styling"
        }
    ]

    return (
        <section id="skills" className="skills">

            <h2>Technical Skills</h2>

            <div className="skills-container">

                {skills.map((skill, index) => (

                    <motion.div
                        className="skill-card"
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.1
                        }}
                        viewport={{ once: true }}
                        whileHover={{
                            y: -10,
                            scale: 1.03
                        }}
                    >

                        <div className="skill-top">

                            <div className="skill-left">

                                <div className="skill-icon">
                                    {skill.icon}
                                </div>

                                <div>
                                    <h3>{skill.name}</h3>
                                    <span>{skill.category}</span>
                                </div>

                            </div>

                            <h4>{skill.level}%</h4>

                        </div>

                        <div className="progress-bar">

                            <motion.div
                                className="progress-fill"
                                initial={{ width: 0 }}
                                whileInView={{
                                    width: `${skill.level}%`
                                }}
                                transition={{
                                    duration: 1.5,
                                    delay: index * 0.1
                                }}
                                viewport={{ once: true }}
                            />

                        </div>

                    </motion.div>

                ))}

            </div>

        </section>
    )
}

export default Skills