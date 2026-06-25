import './Certificates.css'
import { motion } from 'framer-motion'
import {
    FaCertificate,
    FaBriefcase,
    FaTools,
    FaChartBar,
    FaFileExcel
} from 'react-icons/fa'

function Certificates() {

    const certificates = [

        {
            icon: <FaTools />,
            title: "AutoCAD Certification",
            organization: "NSIC",
            year: "2023"
        },

        {
            icon: <FaBriefcase />,
            title: "Associate Engineer Internship",
            organization: "TechIRavan",
            year: "2025 - 2026"
        },

        {
            icon: <FaBriefcase />,
            title: "Full Stack Developer Internship",
            organization: "Orivyn Tech Innovations Pvt Ltd",
            year: "2026"
        },

        {
            icon: <FaCertificate />,
            title: "Solar Internship",
            organization: "Mahathi Engineering Industries",
            year: "2021 - 2022"
        },

        {
            icon: <FaFileExcel />,
            title: "Advanced Excel, PowerPoint & Word",
            organization: "ExcelR",
            year: "2022"
        },

        {
            icon: <FaChartBar />,
            title: "Power BI Micro Course",
            organization: "SkillCourse",
            year: "2026"
        }

    ]

    return (
        <section id="certificates" className="certificates">

            <h2>Certificates & Achievements</h2>

            <div className="certificate-container">

                {certificates.map((certificate, index) => (

                    <motion.div
                        key={index}
                        className="certificate-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.15
                        }}
                        viewport={{ once: true }}
                        whileHover={{
                            y: -10,
                            scale: 1.03
                        }}
                    >

                        <div className="certificate-icon">
                            {certificate.icon}
                        </div>

                        <h3>{certificate.title}</h3>

                        <p>{certificate.organization}</p>

                        <span>{certificate.year}</span>

                    </motion.div>

                ))}

            </div>

        </section>
    )
}

export default Certificates