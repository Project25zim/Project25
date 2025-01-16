import React from 'react';
import TeamSection from '../components/TeamSection';

function AboutUs() {
  return (
    <>
      <header className="bg-dark text-white py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">About Us</h1>
          <p className="lead">Learn about our mission, vision, and the team making it all possible.</p>
        </div>
      </header>
      <section className="py-5 bg-light">
        <div className="container">
          <h2>Our Mission</h2>
          <p>Empowering communities in Zimbabwe through education, healthcare, and sustainable development.</p>
          <h2>Our Vision</h2>
          <p>Envisioning a world where every individual can thrive.</p>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <h2>Meet Our Team</h2>
          <p>Dedicated professionals making a difference every day.</p>
        </div>
      </section>

      <TeamSection/>
    </>
  );
}
 export default AboutUs;