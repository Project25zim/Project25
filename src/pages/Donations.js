import React from 'react';
import '../css/donations.css';

function Donations() {
  return (
    <>
      <header className="header bg-primary text-white text-center position-relative">
        <div className="container py-5">
          <h1>Your Support Changes Lives</h1>
          <p>Every dollar you give goes directly toward empowering communities in need.</p>
        </div>
      </header>
      <section id="donation-options" className="py-5 bg-light">
        <div className="container text-center">
          <h2>Choose a Donation Level</h2>
          <div className="row">
            <div className="col-lg-4">$10: Provide school supplies.</div>
            <div className="col-lg-4">$50: Support a clinic for one day.</div>
            <div className="col-lg-4">$100: Fund a scholarship.</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Donations;