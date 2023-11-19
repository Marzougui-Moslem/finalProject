import React from 'react'
import '../components/Contact.css'

function Contact() {
  return (
    <div className="contact-container">
    <h2>Contact Us</h2>
      <p>Please fill out the form below to get in touch with us.</p>

      <form action="/submit_form" method="post">
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" name="subject" required />

        <label htmlFor="message">Your Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
      </form>
    
    
    </div>
  )
}

export default Contact
