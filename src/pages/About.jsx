import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  useEffect(() => {
    document.title = 'Start Framework - About';
  }, []);

  return (
    <>
      <Navbar />
      <div className="about-section">
        <div className="container">
          <h2>ABOUT COMPONENT</h2>
          <div className="star-divider">
            <div className="line"></div>
            <i className="star">★</i>
            <div className="line"></div>
          </div>
          <div className="about-content">
            <p>
              Freelancer is a free bootstrap theme created by Route. The download 
              includes the complete source files including HTML, CSS, and JavaScript 
              as well as optional SASS stylesheets for easy customization.
            </p>
            <p>
              Freelancer is a free bootstrap theme created by Route. The download 
              includes the complete source files including HTML, CSS, and JavaScript 
              as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
