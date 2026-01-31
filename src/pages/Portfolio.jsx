import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    document.title = 'Start Framework - Portfolio';
  }, []);

  const portfolioItems = [
    { id: 1, title: 'Portfolio Item 1', color: '#ba4a63' },
    { id: 2, title: 'Portfolio Item 2', color: '#1abc9c' },
    { id: 3, title: 'Portfolio Item 3', color: '#3e5c76' },
    { id: 4, title: 'Portfolio Item 4', color: '#ba4a63' },
    { id: 5, title: 'Portfolio Item 5', color: '#1abc9c' },
    { id: 6, title: 'Portfolio Item 6', color: '#3e5c76' },
  ];

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  return (
    <>
      <Navbar />
      <div className="portfolio-section">
        <div className="container">
          <h2>PORTFOLIO COMPONENT</h2>
          <div className="star-divider dark">
            <div className="line"></div>
            <i className="star">★</i>
            <div className="line"></div>
          </div>
          <div className="portfolio-grid">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="portfolio-item"
                style={{ backgroundColor: item.color }}
                onClick={() => openModal(item)}
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedItem && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <div
              className="modal-item"
              style={{ backgroundColor: selectedItem.color }}
            >
              {selectedItem.title}
            </div>
            <h3>{selectedItem.title}</h3>
            <div className="star-divider dark modal-divider">
              <div className="line"></div>
              <i className="star">★</i>
              <div className="line"></div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
