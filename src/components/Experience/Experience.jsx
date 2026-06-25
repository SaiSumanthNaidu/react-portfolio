import './Experience.css'
import { motion } from 'framer-motion'
import { FaBriefcase } from 'react-icons/fa'

function Experience() {

    const experiences = [
        {
            year: "2026 - Present",
            title: "Full Stack Developer Intern",
            company: "Orivyn Tech Innovations Pvt Ltd, Hyderabad",
            description:
                "Working on Full Stack Development using Python technologies, web applications, APIs and modern development tools."
        },

        {
            year: "2025 - 2026",
            title: "Associate Engineer Intern",
            company: "TechIRavan, Hyderabad",
            description:
                "Worked on Django applications, APIs, cloud tools and data analysis projects."
        },

        {
            year: "2021 - 2022",
            title: "Solar Internship",
            company: "Mahathi Engineering Industries",
            description:
                "Worked on solar panel systems and industrial engineering processes."
        }
    ]

    return (
        <section className="experience" id="experience">

            <h2>Experience</h2>

            <div className="experience-container">

                {experiences.map((item, index) => (

                    <motion.div
                        className="experience-card"
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.2
                        }}
                        viewport={{ once: true }}
                        whileHover={{
                            y: -8
                        }}
                    >

                        <div className="experience-top">

                            <div className="experience-year">
                                {item.year}
                            </div>

                            <FaBriefcase className="experience-icon" />

                        </div>

                        <h3>{item.title}</h3>

                        <h4>{item.company}</h4>

                        <p>{item.description}</p>

                    </motion.div>

                ))}

            </div>

        </section>
    )
}

export default Experience