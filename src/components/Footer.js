import React, { useState } from 'react';
import '../css/footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info Section */}
        <div className="footer-section company-info">
          <div className="logo-container">
            <img 
              src="/api/placeholder/40/40"
              alt="Company Logo" 
              className="logo"
            />
            <h3 className="company-name">Your Company</h3>
          </div>
          <p className="company-description">
            We are dedicated to making a positive impact in our community through 
            innovative solutions and sustainable practices. Join us in our mission 
            to create lasting change.
          </p>
        </div>

        {/* Contact & Action Section */}
        <div className="footer-section contact-support">
          <h3 className="section-title">Contact & Support</h3>
          <div className="contact-info">
            <p>Email: contact@example.com</p>
            <p>Phone: (555) 123-4567</p>
            <p>Address: 123 Main St, City, State</p>
          </div>
        </div>

        {/* Newsletter Signup Section */}
        <div className="footer-section newsletter-signup">
          <h3 className="section-title">Newsletter Signup</h3>
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter your email" 
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;