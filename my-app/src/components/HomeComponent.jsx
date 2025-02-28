import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DonationOptions from '@/components/DonationOptions';
import '@/css/homeComponent.css';

function HomeComponent() {
  const [showModal, setShowModal] = useState(false);

  const handleDonateClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <header className="header bg-dark text-white text-center position-relative">
        <div className="container py-5">
          <h1 className="display-4 fw-bold mb-4">Making a Difference Together</h1>
          <p className="lead mb-4">Empowering communities and transforming lives across Zimbabwe.</p>
          <Link to="/volunteer" className="btn btn-primary btn-lg px-5 me-3">Get Involved</Link>
          <button onClick={handleDonateClick} className="btn btn-coral btn-lg px-5">Donate</button>
        </div>
      </header>
      <section className="py-5 border-bottom" id="features">
        <div className="container px-5 my-5">
          <div className="row gx-5">
            <div className="col-lg-4 mb-5">
              <img src="path/to/vacancies.jpg" alt="Vacancies" className="img-fluid rounded-3 mb-3" />
              <p>Empowering communities through transformative action.</p>
            </div>
            <div className="col-lg-4 mb-5">
              <img src="path/to/how-we-started.jpg" alt="How We Started" className="img-fluid rounded-3 mb-3" />
              <p>Join our journey of innovation and impact.</p>
            </div>
            <div className="col-lg-4 mb-5">
              <img src="path/to/current-projects.jpg" alt="Current Projects" className="img-fluid rounded-3 mb-3" />
              <p>Explore ongoing initiatives making a difference.</p>
            </div>
          </div>
        </div>
      </section>
      {showModal && <DonationOptions onClose={handleCloseModal} />}
    </>
  );
}

export default HomeComponent;