import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendEmail = () => {
    const recipientEmail = 'mithoonns@gmail.com';
    const subject = `Regarding: ${name} - Sent from portfolio`; // Add "Sent from portfolio" to the subject
    const emailContent = `${message}`;
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      emailContent
    )}`;
    window.location.href = mailtoLink;
  };
  

  const handleSendWhatsAppMessage = () => {
    const recipientPhoneNumber = '8555034734';
    const additionalText = '\n\nSent from portfolio'; // Additional text to include in the message
    const whatsappMessage = `Regarding: ${name}\n\n${message}${additionalText}`;
    const whatsappLink = `https://wa.me/${recipientPhoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.location.href = whatsappLink;
  };
  

  return (
    <section id="contact">
      <h5 className="abouth5">Contact Me</h5>
      <h2 className="header-buttons">Get in Touch</h2>
      <div className="container contact__container">
        <div className="contact__form">
          <div className="contact__form-group">
            <label htmlFor="name" className="header-buttons">
              Name
            </label>
            <input
              type="text"
              className="header-buttons"
              id="name"
              placeholder="Your Name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="contact__form-group">
            <label htmlFor="message" className="header-buttons">
              Message
            </label>
            <textarea
              id="message"
              className="header-buttons"
              placeholder="Your Message"
              value={message}
              onChange={handleMessageChange}
            ></textarea>
          </div>
          <div className="contact__button-container ">
          <button type="button" className="btn btn-primary header-buttons" onClick={handleSendEmail}>
            Send Email
          </button>
          <button
            type="button"
            className="btn btn-primary header-buttons"
            onClick={handleSendWhatsAppMessage}
          >
            WhatsApp
          </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
