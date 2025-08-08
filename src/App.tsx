import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Workflow from './components/Workflow';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';
import VelvoProject from './pages/VelvoProject';
import ApexFinancialsProject from './pages/ApexFinancialsProject';
import FlamoraProject from './pages/FlamoraProject';

const HomePage = () => (
  <div className="font-sans">
    <Header />
    <main>
      <Hero />
      <Services />
      <Workflow />
      <Projects />
      <Testimonials />
      <CTA />
      <Contact />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/velvo" element={<VelvoProject />} />
        <Route path="/projects/apex-financials" element={<ApexFinancialsProject />} />
        <Route path="/projects/flamora" element={<FlamoraProject />} />
      </Routes>
    </Router>
  );
}

export default App;