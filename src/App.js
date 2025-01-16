import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Donations from './pages/Donations';
import Volunteer from './pages/Volunteer';
import './css/styles.css';
import OurInitiatives from './pages/OurInitiatives';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/donate" element={<Donations />} />
          <Route path="/ourinitiatives" element={<OurInitiatives />} />
          <Route path="/volunteer" element={<Volunteer />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;