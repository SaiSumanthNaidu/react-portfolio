import './Projects.css'
import { motion } from 'framer-motion'
import { useState } from 'react'

function Projects() {

    const [filter, setFilter] = useState("All")
    const [selectedProject, setSelectedProject] = useState(null)

    const projects = [

        {
            title: "React Portfolio",
            category: "Web Apps",
            description: "Modern responsive portfolio built using React JS, Framer Motion and dark mode support.",
            tech: "React, JavaScript",
            github: "https://github.com/SaiSumanthNaidu/react-portfolio"
        },

        {
            title: "WeatherSphere Pro",
            category: "Web Apps",
            description: "Modern weather forecasting application with live weather data and forecasts.",
            tech: "HTML, CSS, JavaScript",
            github: "https://github.com/SaiSumanthNaidu/WeatherSphere-Pro"
        },

        {
            title: "Resume Builder Pro",
            category: "Web Apps",
            description: "Build and download professional resumes with multiple templates.",
            tech: "Flask, SQLite",
            github: "https://github.com/SaiSumanthNaidu/resume-builder-pro"
        },

        {
            title: "DocuMindAI",
            category: "AI Projects",
            description: "AI-powered OCR document extraction and resume analysis platform.",
            tech: "Django, OCR, Gemini AI",
            github: "https://github.com/SaiSumanthNaidu/DocuMindAI"
        },

        {
            title: "Task Manager API",
            category: "APIs",
            description: "REST API for task management using Django REST Framework.",
            tech: "DRF",
            github: "https://github.com/SaiSumanthNaidu/task-manager-api"
        },

        {
            title: "Authentication API JWT",
            category: "APIs",
            description: "JWT Authentication API built using Django REST Framework.",
            tech: "DRF, JWT",
            github: "https://github.com/SaiSumanthNaidu/authentication-api-jwt"
        },

        {
            title: "CyberThreatProfiler",
            category: "Security",
            description: "Cyber threat identification and profiling system using NLP techniques.",
            tech: "Python, NLP",
            github: "https://github.com/SaiSumanthNaidu/CyberThreatProfiler"
        },

        {
            title: "Scientific Calculator",
            category: "Python",
            description: "Advanced scientific calculator with history tracking and mathematical operations.",
            tech: "Python",
            github: "https://github.com/SaiSumanthNaidu/python-scientific-calculator-with-history"
        }

    ]

    const filteredProjects =
        filter === "All"
            ? projects
            : projects.filter(
                project => project.category === filter
            )

    return (
        <section
            id="projects"
            className="projects"
            data-aos="flip-up"
        >

            <h2>My Projects</h2>

            <div className="project-filters">

                <button
                    className={filter === "All" ? "active-filter" : ""}
                    onClick={() => setFilter("All")}
                >
                    All
                </button>

                <button
                    className={filter === "Web Apps" ? "active-filter" : ""}
                    onClick={() => setFilter("Web Apps")}
                >
                    Web Apps
                </button>

                <button
                    className={filter === "AI Projects" ? "active-filter" : ""}
                    onClick={() => setFilter("AI Projects")}
                >
                    AI
                </button>

                <button
                    className={filter === "APIs" ? "active-filter" : ""}
                    onClick={() => setFilter("APIs")}
                >
                    APIs
                </button>

                <button
                    className={filter === "Security" ? "active-filter" : ""}
                    onClick={() => setFilter("Security")}
                >
                    Security
                </button>

                <button
                    className={filter === "Python" ? "active-filter" : ""}
                    onClick={() => setFilter("Python")}
                >
                    Python
                </button>

            </div>

            <div className="project-container">

                {filteredProjects.map((project, index) => (

                    <motion.div
                        key={index}
                        className="project-card"
                        onClick={() => setSelectedProject(project)}
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
                            onClick={(e) => e.stopPropagation()}
                        >
                            GitHub
                        </a>

                    </motion.div>

                ))}

            </div>

            {selectedProject && (

                <div
                    className="project-modal-overlay"
                    onClick={() => setSelectedProject(null)}
                >

                    <div
                        className="project-modal"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <h2>{selectedProject.title}</h2>

                        <p>{selectedProject.description}</p>

                        <h4>Technologies Used</h4>

                        <p>{selectedProject.tech}</p>

                        <a
                            href={selectedProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-btn"
                        >
                            View GitHub
                        </a>

                        <button
                            className="close-btn"
                            onClick={() => setSelectedProject(null)}
                        >
                            Close
                        </button>

                    </div>

                </div>

            )}

        </section>
    )
}

export default Projects