import './Contact.css'
import { useState } from 'react'

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
            data-aos="zoom-in-up"
        >

            <h2>Contact Me</h2>

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
                ></textarea>

                <button type="submit">
                    Send Message
                </button>

            </form>

            {message && (
                <div className="success-message">
                    ✓ Message Sent Successfully!
                </div>
            )}

        </section>
    )
}

export default Contact