import './Projects.css'
import { motion } from "framer-motion"

function Projects() {

    const projects = [
        {
            title: "WeatherSphere Pro",
            description: "Modern weather forecasting application with live weather data and forecasts.",
            tech: "HTML, CSS, JavaScript",
            github: "https://github.com/SaiSumanthNaidu/WeatherSphere-Pro"
        },

        {
            title: "Resume Builder Pro",
            description: "Build and download professional resumes with multiple templates.",
            tech: "Flask, SQLite",
            github: "https://github.com/SaiSumanthNaidu/resume-builder-pro"
        },

        {
            title: "DocuMindAI",
            description: "AI-powered OCR document extraction system using Django and Tesseract.",
            tech: "Django, OCR",
            github: "https://github.com/SaiSumanthNaidu/DocuMindAI"
        },

        {
            title: "Task Manager API",
            description: "REST API for task management using Django REST Framework.",
            tech: "Django REST Framework",
            github: "https://github.com/SaiSumanthNaidu/task-manager-api"
        }
    ]
    

    return (
        <section
            id="projects"
            className="projects"
            data-aos="flip-up"
        >

            <h2>My Projects</h2>

            <div className="project-container">

                {
                    projects.map((project, index) => (

                        <motion.div
                            key={index}
                            className="project-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -10,
                                scale: 1.03
                            }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.15
                            }}
                        >

                            <h3>{project.title}</h3>

                            <p>{project.description}</p>

                            <span>{project.tech}</span>

                            <br />
                            <br />

                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-btn"
                            >
                                View Code
                            </a>

                        </motion.div>
                    ))
                }

            </div>

        </section>
    )
}

export default Projects