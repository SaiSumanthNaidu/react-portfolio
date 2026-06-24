import './Stats.css'
import { motion } from 'framer-motion'

function Stats() {
    const stats = [
        {
            number: '5+',
            title: 'Projects'
        },
        {
            number: '1',
            title: 'Internship'
        },
        {
            number: '10+',
            title: 'Skills'
        },
        {
            number: '2025',
            title: 'Graduate'
        }
    ]

    return (
        <section className="stats" id="stats">
            <h2>My Achievements</h2>

            <div className="stats-container">
                {stats.map((item, index) => (
                    <motion.div
                        className="stat-card"
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h1>{item.number}</h1>
                        <p>{item.title}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Stats