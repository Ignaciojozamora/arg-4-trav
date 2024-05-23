import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.module.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import IntroSection from './components/IntroSection/IntroSection';
import AboutSection from './components/AboutSection/AboutSection';
import ContactSection from './components/ContactSection/ContactSection';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<IntroSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
