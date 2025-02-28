import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import AboutUs from '@/pages/AboutUs';
import DonationOptions from '@/components/DonationOptions';
import Volunteer from '@/components/Volunteer';
import '@/css/styles.css';
import OurInitiatives from '@/pages/OurInitiatives';
import InitiativeDetail from '@/components/InitiativeDetail';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/donation-options" element={<DonationOptions />} />
          <Route path="/ourinitiatives" element={<OurInitiatives />} />
          <Route path="/initiative/:id" element={<InitiativeDetail />} />
          <Route path="/volunteer" element={<Volunteer />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;