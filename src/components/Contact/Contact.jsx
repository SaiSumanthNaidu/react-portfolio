import './Contact.css'
import { useState } from 'react'
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt
} from 'react-icons/fa'

function Contact() {

    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        setMessage(true)

        setTimeout(() => {
            setMessage(false)
        }, 3000)

        e.target.reset()
    }

    return (
        <section
            id="contact"
            className="contact"
        >

            <h2>Get In Touch</h2>

            <div className="contact-container">

                <div className="contact-info">

                    <div className="contact-card">
                        <FaEnvelope className="contact-icon" />
                        <h3>Email</h3>
                        <p>bandarusaisumanth@gmail.com</p>
                    </div>

                    <div className="contact-card">
                        <FaPhone className="contact-icon" />
                        <h3>Phone</h3>
                        <p>+91 9154912059</p>
                    </div>

                    <div className="contact-card">
                        <FaMapMarkerAlt className="contact-icon" />
                        <h3>Location</h3>
                        <p>Hyderabad, Telangana</p>
                    </div>

                </div>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        placeholder="Your Name"
                        required
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        required
                    />

                    <textarea
                        placeholder="Your Message"
                        rows="5"
                        required
                    />

                    <button type="submit">
                        Send Message
                    </button>

                </form>

            </div>

            {message && (
                <div className="success-message">
                    ✓ Message Sent Successfully!
                </div>
            )}

        </section>
    )
}

export default Contact