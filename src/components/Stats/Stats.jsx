import './Stats.css'
import { motion } from 'framer-motion'
import CountUp from "react-countup"

<h1>
    <CountUp end={9} duration={3} />+
</h1>

function Stats() {

    const stats = [
        {
            number: '9+',
            title: 'Projects'
        },
        {
            number: '2',
            title: 'Internships'
        },
        {
            number: '15+',
            title: 'Skills'
        },
        {
            number: '2025',
            title: 'Graduate'
        }
    ]

    return (
        <section className="stats" id="stats">

            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                My Achievements
            </motion.h2>

            <div className="stats-container">

                {stats.map((item, index) => (

                    <motion.div
                        className="stat-card"
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.2
                        }}
                        viewport={{ once: true }}
                        whileHover={{
                            y: -10,
                            scale: 1.05
                        }}
                    >

                        <motion.h1
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.2
                            }}
                            viewport={{ once: true }}
                        >
                            {item.number}
                        </motion.h1>

                        <p>{item.title}</p>

                    </motion.div>

                ))}

            </div>

        </section>
    )
}

export default Stats