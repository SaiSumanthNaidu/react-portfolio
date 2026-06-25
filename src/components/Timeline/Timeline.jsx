import './Timeline.css'
import { motion } from 'framer-motion'

function Timeline() {

    const education = [
        {
            year: "2022 - 2025",
            title: "B.Tech",
            institute: "Aurora's Technological and Research Institute"
        },
        {
            year: "2019 - 2022",
            title: "Diploma Mechanical Engineering",
            institute: "Government Polytechnic Yadagirigutta"
        },
        {
            year: "2018 - 2019",
            title: "SSC",
            institute: "VijayaRatna High School"
        }
    ]

    return (
        <section className="timeline" id="education">

            <h2>Education Journey</h2>

            <div className="timeline-container">

                {education.map((item, index) => (

                    <motion.div
                        className="timeline-card"
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.2
                        }}
                        viewport={{ once: true }}
                    >

                        <div className="timeline-year">
                            {item.year}
                        </div>

                        <h3>{item.title}</h3>

                        <p>{item.institute}</p>

                    </motion.div>

                ))}

            </div>

        </section>
    )
}

export default Timeline