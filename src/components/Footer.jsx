import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="footer-col">
              <h3>AROUND THE WEB</h3>
              <div className="social-icons">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f">f</i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter">t</i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in">in</i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-dribbble">d</i>
                </a>
              </div>
            </div>
            <div className="footer-col">
              <h3>ABOUT FREELANCER</h3>
              <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>Copyright © Your Website 2021</p>
        </div>
      </div>
    </footer>
  );
}
