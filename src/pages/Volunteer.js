import React from 'react';
import '../css/volunteer.css';

function Volunteer() {
  return (
    <>
      <header className="header bg-dark text-white text-center position-relative">
        <div className="container py-5">
          <h1>Join Our Mission</h1>
          <p>Become a volunteer and help us bring positive change.</p>
        </div>
      </header>
      <section id="volunteer-form" className="py-5">
        <div className="container">
          <h2>Sign Up to Volunteer</h2>
          <form>
            <input type="text" placeholder="Full Name" required className="form-control mb-3" />
            <input type="email" placeholder="Email" required className="form-control mb-3" />
            <textarea placeholder="Tell us more..." required className="form-control mb-3"></textarea>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Volunteer;