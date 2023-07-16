import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h5 className='header-buttons'>Contact Me</h5>
      <h2 className='header-buttons'>Get in Touch</h2>
      <div className="container contact__container">
        <form className="contact__form ">
          <div className="contact__form-group ">
            <label htmlFor="name" className='header-buttons'>Name</label>
            <input type="text" className='header-buttons' id="name" placeholder="Your Name" />
          </div>
          <div className="contact__form-group ">
            <label htmlFor="email" className='header-buttons'>Email</label>
            <input type="email" className='header-buttons' id="email" placeholder="Your Email" />
          </div>
          <div className="contact__form-group">
            <label htmlFor="message" className='header-buttons'>Message</label>
            <textarea id="message" className='header-buttons' placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary header-buttons">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
