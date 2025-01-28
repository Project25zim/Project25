import React from 'react';
import '../css/ourinitiatives.css';
import InitiativeSection from '../components/InitiativeSection';


const OurInitiatives = () => {
  const Gauge = () => (
    <div className="gauge">
      <div className="gauge-background"></div>
      <div className="gauge-progress"></div>
      <div className="gauge-needle"></div>
    </div>
  );

  return (
    <section className="impact-section">
      <div className="impact-container">
        <div className="impact-overlay"></div>
        
        <h2 className="impact-title">Impact information</h2>
        
        <div className="gauge-container">
          <Gauge />
          <div>
            <span className="target-amount">$345,000</span>
            <p className="target-label">Donation Target</p>
          </div>
        </div>

        <p className="impact-tagline">Your contribution will make a difference.</p>

        <div className="impact-grid">
          <div>
            <p className="impact-amount">$125,000</p>
            <p className="impact-label">Scholarship fund</p>
          </div>
          <div>
            <p className="impact-amount">$85,000</p>
            <p className="impact-label">After-school tutoring</p>
          </div>
          <div>
            <p className="impact-amount">$125,000</p>
            <p className="impact-label">School construction</p>
          </div>
          <div>
            <p className="impact-amount">$10,000</p>
            <p className="impact-label">School supplies</p>
          </div>
        </div>
      </div>
      <div>
      <InitiativeSection />
    </div>
    </section>
  );
};

export default OurInitiatives;