import React, { useState } from 'react';
import '../css/global.css';
import '../css/volunteer.css';

const Volunteer = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Volunteer signup:', formData);
    setFormData({
      fullName: '',
      email: '',
      message: ''
    });
  };

  return (
    <>
      <header className="header bg-dark text-white text-center position-relative">
        <div className="container py-5">
          <h1>Join Our Mission</h1>
          <p>Become a volunteer and help us bring positive change.</p>
        </div>
      </header>
      <section id="volunteer-form" className="section">
        <div className="container">
          <h2 className="section-title">Sign Up to Volunteer</h2>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="fullName" 
              value={formData.fullName} 
              onChange={handleChange} 
              placeholder="Full Name" 
              required 
              className="form-control mb-3" 
            />
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Email" 
              required 
              className="form-control mb-3" 
            />
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder="Tell us more..." 
              required 
              className="form-control mb-3"
            ></textarea>
            <button type="submit" className="button">Submit</button>
          </form>
        </div>
      </section>
      <section id="volunteer-info" className="section">
        <div className="container">
          <h2 className="section-title">Why Volunteer with Us?</h2>
          <p className="section-text">Volunteering with us provides you with the opportunity to make a real difference in the community. You will gain valuable experience, meet new people, and contribute to meaningful projects.</p>
          <ul>
            <li>Make a positive impact</li>
            <li>Gain new skills and experiences</li>
            <li>Meet like-minded individuals</li>
            <li>Support a cause you care about</li>
          </ul>
        </div>
      </section>
      <section id="testimonials" className="section">
        <div className="container">
          <h2 className="section-title">Volunteer Testimonials</h2>
          <div className="testimonial">
            <p>"Volunteering here has been a life-changing experience. I've met so many wonderful people and have learned so much."</p>
            <p>- Jane Doe</p>
          </div>
          <div className="testimonial">
            <p>"I love being able to give back to the community. The projects are so rewarding and the team is fantastic."</p>
            <p>- John Smith</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Volunteer;