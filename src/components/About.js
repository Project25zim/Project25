import React from 'react';
import '../css/about.css';

const About = () => {
  return (
    <div className="about-container">
      {/* About Us Section */}
      <section className="section">
        <div className="section-image">
          <img 
            src="/api/placeholder/800/600"
            alt="Group of diverse people sitting on steps having a discussion" 
          />
        </div>
        <div className="section-content">
          <h2 className="section-title">About us</h2>
          <p className="section-text">
            Established in 2030, Inspired to Learn aims to empower individuals 
            and transform communities through the value of education.
          </p>
          <a href="#" className="learn-more">Learn more</a>
        </div>
      </section>

      {/* Past Initiatives Section */}
      <section className="section">
        <div className="section-image">
          <img 
            src="/api/placeholder/800/600"
            alt="Teacher helping student with coursework in library" 
          />
        </div>
        <div className="section-content">
          <h2 className="section-title">Our past initiatives</h2>
          <p className="section-text">
            Look back on our recent projects from tutoring programs, 
            school supply distributions, to community classes.
          </p>
          <a href="#" className="learn-more">Learn more</a>
        </div>
      </section>
    </div>
  );
};

export default About;