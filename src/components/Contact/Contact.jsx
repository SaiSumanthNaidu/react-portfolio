import './Contact.css'

function Contact() {
    return (
        <section
            id="contact"
            className="contact"
            data-aos="zoom-in-up"
        >

            <h2>Contact Me</h2>

            <p>Email: bandarusaisumanth@gmail.com</p>

            <p>Phone: +91 XXXXX XXXXX</p>

            <p>Location: Hyderabad, Telangana</p>

            <div className="contact-links">
                <a
                    href="https://github.com/SaiSumanthNaidu"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>

                <a
                    href="YOUR_LINKEDIN_LINK"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
            </div>

        </section>
    )
}

export default Contact