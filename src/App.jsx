import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs'; // Import the new Blogs component
import './App.css';

// Component to handle external redirects for static HTML files
const ExternalRedirect = ({ path }) => {
  React.useEffect(() => {
    window.location.href = path;
  }, [path]);
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to blog...</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} /> {/* Add the new route */}
            {/* Handle static blog HTML files */}
            <Route path="/blogs/react_vs_flutter" element={<ExternalRedirect path="/src/blogs/react_vs_flutter.html" />} />
            <Route path="/blogs/ai-in-web-development" element={<ExternalRedirect path="/src/blogs/ai-in-web-development.html" />} />
            <Route path="/blogs/supabase-getting-started" element={<ExternalRedirect path="/src/blogs/supabase-getting-started.html" />} />
            <Route path="/blogs/flutter-clean-architecture" element={<ExternalRedirect path="/src/blogs/flutter-clean-architecture.html" />} />
            {/* Handle static project HTML files */}
            <Route path="/projects/GTZP" element={<ExternalRedirect path="/projects/GTZP.html" />} />
            <Route path="/projects/Gumbo" element={<ExternalRedirect path="/projects/Gumbo.html" />} />
            <Route path="/projects/Poolr" element={<ExternalRedirect path="/projects/Poolr.html" />} />
            <Route path="/projects/jobai" element={<ExternalRedirect path="/projects/jobai.html" />} />
            <Route path="/projects/Willow" element={<ExternalRedirect path="/projects/Willow.html" />} />
            <Route path="/projects/Calorii" element={<ExternalRedirect path="/projects/Calorii.html" />} />
            <Route path="/projects/Taskora" element={<ExternalRedirect path="/projects/Taskora.html" />} />
            <Route path="/projects/eventra" element={<ExternalRedirect path="/projects/eventra.html" />} />
            <Route path="/projects/wellness" element={<ExternalRedirect path="/projects/wellness.html" />} />
            <Route path="/projects/retailpulse" element={<ExternalRedirect path="/projects/retailpulse.html" />} />
            <Route path="/projects/styleconnect" element={<ExternalRedirect path="/projects/styleconnect.html" />} />
            <Route path="/projects/simplify-project-management" element={<ExternalRedirect path="/projects/simplify-project-management.html" />} />
          </Routes>
        </motion.main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;