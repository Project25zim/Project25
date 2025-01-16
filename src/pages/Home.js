import React from 'react';
import '../css/index.css';
import OverviewComponent from '../components/Overview';
import OurInitiatives from '../components/OurInitiatives';
import About from '../components/About';

function Home() {
  return (
    <>
      <header className="header bg-dark text-white text-center position-relative">
        <div className="container py-5">
          <h1 className="display-4 fw-bold mb-4">Making a Difference Together</h1>
          <p className="lead mb-4">Empowering communities and transforming lives across Zimbabwe.</p>
          <a href="#features" className="btn btn-primary btn-lg px-5 me-3">Get Involved</a>
          <a href="#donate" className="btn btn-outline-light btn-lg px-5">Donate</a>
        </div>
      </header>
      <section className="py-5 border-bottom" id="features">
        <div className="container px-5 my-5">
          <div className="row gx-5">
            <div className="col-lg-4 mb-5">
              <div className="feature bg-primary text-white rounded-3 mb-3">Vacancies</div>
              <p>Empowering communities through transformative action.</p>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="feature bg-primary text-white rounded-3 mb-3">How We Started</div>
              <p>Join our journey of innovation and impact.</p>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="feature bg-primary text-white rounded-3 mb-3">Current Projects</div>
              <p>Explore ongoing initiatives making a difference.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Add Overview Component */}
      <OverviewComponent />
      <OurInitiatives/>
      <About/>
    </>
  );
}

export default Home;