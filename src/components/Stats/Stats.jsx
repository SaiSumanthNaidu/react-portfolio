import './Stats.css'
import { motion } from 'framer-motion'

function Stats() {

    const stats = [
        {
            number: "4+",
            title: "Projects"
        },
        {
            number: "8+",
            title: "Skills"
        },
        {
            number: "1+",
            title: "Experience"
        },
        {
            number: "100%",
            title: "Dedication"
        }
    ]

    return (
        <section className="stats">

            {
                stats.map((stat, index) => (
                    <motion.div
                        className="stat-card"
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.2
                        }}
                        viewport={{ once: false }}
                        whileHover={{
                            y: -10,
                            scale: 1.05
                        }}
                    >
                        <h2>{stat.number}</h2>
                        <p>{stat.title}</p>
                    </motion.div>
                ))
            }

        </section>
    )
}

export default Stats