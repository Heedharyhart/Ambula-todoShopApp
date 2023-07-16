import React, { useState } from 'react';
import Header from "../components/Header";
import '../styles/ContactPage.css';

const ContactUs = ()  =>{
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //  sending the form data to a backend server.
    console.log('Form data:', contactData);
    // Clear the form after submission
    setContactData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-form-container">
    <Header />
      <h2 className="contact-heading">Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={contactData.name}
          onChange={handleChange}
          className="contact-input"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={contactData.email}
          onChange={handleChange}
          className="contact-input"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          value={contactData.message}
          onChange={handleChange}
          className="contact-textarea"
          placeholder="Your Message"
          rows="4"
          required
        ></textarea>
        <button type="submit" className="contact-submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactUs;