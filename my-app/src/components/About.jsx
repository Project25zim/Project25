import React from 'react';
import { Link } from 'react-router-dom';
import '@/css/about.css';
// If you have the images, uncomment these lines and make sure the paths are correct:
// import volunteerwithchildren from '@/assets/images/fullsizeoutput_bd26.jpeg';
// import pastInitiative from '@/assets/images/fullsizeoutput_bd7c.jpeg';

const About = () => {
  return (
    <div className="about-container">
      {/* About Us Section */}
      <section className="section">
        <div className="section-image">
          <img 
            // When you have the image, uncomment this line:
            // src={pastInitiative}
            src="https://placehold.co/400x300?text=About+Us"
            alt="Group of diverse people sitting on steps having a discussion" 
          />
        </div>
        <div className="section-content">
          <h2 className="section-title">About us</h2>
          <p className="section-text">
            Established in 2030, Inspired to Learn aims to empower individuals 
            and transform communities through the value of education.
          </p>
          <Link to="/ourinitiatives" className="learn-more">Learn more</Link>
        </div>
      </section>

      {/* Past Initiatives Section */}
      <section className="section">
        <div className="section-image">
          <img 
            // When you have the image, uncomment this line:
            // src={volunteerwithchildren}
            src="https://placehold.co/400x300?text=Past+Initiatives"
            alt="Teacher helping student with coursework in library" 
          />
        </div>
        <div className="section-content">
          <h2 className="section-title">Our past initiatives</h2>
          <p className="section-text">
            Look back on our recent projects from tutoring programs, 
            school supply distributions, to community classes.
          </p>
          <Link to="/ourinitiatives" className="learn-more">Learn more</Link>
        </div>
      </section>
    </div>
  );
};

export default About;