import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import avatarImg from '../assets/img/avataaars.svg';

export default function Home() {
  useEffect(() => {
    document.title = 'Start Framework - Home';
  }, []);

  return (
    <>
      <Navbar />
      <div className="home-hero">
        <div className="container">
          <img 
            src={avatarImg} 
            alt="avatar" 
            className="avatar"
          />
          <h1>START FRAMEWORK</h1>
          <div className="star-divider">
            <div className="line"></div>
            <i className="star">★</i>
            <div className="line"></div>
          </div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
