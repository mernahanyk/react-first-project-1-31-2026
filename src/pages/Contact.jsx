import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  useEffect(() => {
    document.title = 'Start Framework - Contact';
  }, []);

  return (
    <>
      <Navbar />
      <div className="contact-section">
        <div className="container">
          <h2>CONTACT SECTION</h2>
          <div className="star-divider dark">
            <div className="line"></div>
            <i className="star">★</i>
            <div className="line"></div>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="userName" />
            <input type="number" placeholder="userAge" />
            <input type="email" placeholder="userEmail" />
            <input type="password" placeholder="userPassword" />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
