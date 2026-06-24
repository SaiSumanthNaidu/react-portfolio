import './Timeline.css'
import { motion } from 'framer-motion'

function Timeline() {

    const experiences = [

        {
            year: "2025 - 2026",
            title: "Associate Engineer Intern",
            company: "TechIRavan, Hyderabad"
        },

        {
            year: "2025",
            title: "B.Tech Graduate",
            company: "Aurora's Technological and Research Institute"
        },

        {
            year: "2021 - 2022",
            title: "Solar Panels Intern",
            company: "Mahathi Engineering Industries"
        }

    ]

    return (
        <section id="timeline" className="timeline">

            <h2>Experience & Education</h2>

            <div className="timeline-container">

                {experiences.map((item, index) => (

                    <motion.div
                        className="timeline-item"
                        key={index}
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.7,
                            delay: index * 0.2
                        }}
                    >

                        <div className="timeline-dot"></div>

                        <div className="timeline-card">

                            <h3>{item.year}</h3>

                            <h4>{item.title}</h4>

                            <p>{item.company}</p>

                        </div>

                    </motion.div>

                ))}

            </div>

        </section>
    )
}

export default Timeline