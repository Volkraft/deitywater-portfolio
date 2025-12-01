import './common/common-style/reset.scss';
import './common/common-style/index.css';
import './common/common-style/main.scss';
import './common/common-style/vars.scss';
import './common/common-style/header.scss';
import './common/common-style/footer.scss';
import './common/common-style/contactForm.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Home from './pages/Home.jsx';
import ProjectsPage from './pages/Projects.jsx';
import AboutPage from './pages/About.jsx';
import ContactPage from './pages/Contact.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

