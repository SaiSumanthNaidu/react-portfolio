import './Stats.css'
import { motion } from 'framer-motion'
import {
    FaCode,
    FaBriefcase,
    FaGraduationCap,
    FaLaptopCode
} from 'react-icons/fa'

function Stats() {

    const stats = [
        {
            icon: <FaCode />,
            number: '9+',
            title: 'Projects'
        },
        {
            icon: <FaBriefcase />,
            number: '1 Year',
            title: 'Internship'
        },
        {
            icon: <FaLaptopCode />,
            number: '10+',
            title: 'Technologies'
        },
        {
            icon: <FaGraduationCap />,
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

                        <div className="stat-icon">
                            {item.icon}
                        </div>

                        <h1>{item.number}</h1>

                        <p>{item.title}</p>

                    </motion.div>

                ))}

            </div>

        </section>
    )
}

export default Stats