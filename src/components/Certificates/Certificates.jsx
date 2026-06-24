import './Certificates.css'
import { motion } from 'framer-motion'
import { FaCertificate } from 'react-icons/fa'

function Certificates() {

    const certificates = [

        {
            title: "AutoCAD Certification",
            organization: "NSIC"
        },

        {
            title: "Associate Engineer Internship",
            organization: "TechIRavan"
        },

        {
            title: "Solar Internship",
            organization: "Mahathi Engineering Industries"
        }

    ]

    return (
        <section id="certificates" className="certificates">

            <h2>Certificates</h2>

            <div className="certificate-container">

                {certificates.map((certificate, index) => (

                    <motion.div
                        key={index}
                        className="certificate-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.2
                        }}
                        viewport={{ once: false }}
                        whileHover={{
                            y: -10,
                            scale: 1.03
                        }}
                    >
                        <FaCertificate className="certificate-icon" />

                        <h3>{certificate.title}</h3>

                        <p>{certificate.organization}</p>

                    </motion.div>

                ))}

            </div>

        </section>
    )
}

export default Certificates