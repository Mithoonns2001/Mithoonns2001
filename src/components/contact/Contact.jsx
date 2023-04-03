import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h5>Contact Me</h5>
      <h2>Get in Touch</h2>
      <div className="container contact__container">
        <form className="contact__form">
          <div className="contact__form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" />
          </div>
          <div className="contact__form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" />
          </div>
          <div className="contact__form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
