import React, { useState } from 'react';
import Header from '../components/layout/Header.jsx';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
import Footer from '../components/layout/Footer';
import ProjectDetails from '../components/sections/ProjectDetails';
import CVButton from '../components/layout/CVButton.jsx';

const AppRouter = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  // Función para navegar a detalle de proyecto
  const handleViewProject = (projectId) => {
    setSelectedProject(projectId);
    setCurrentView('project-detail');
    window.scrollTo(0, 0);
  };

  // Función para volver al home
  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedProject(null);
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      {currentView === 'home' ? (
        <>
          <Header />
          <Hero />
          <About/>
          <Skills />
          <Projects onViewProject={handleViewProject} />
          <Contact />
          <Footer />
          <CVButton />
        </>
      ) : (
        <ProjectDetails
          projectId={selectedProject} 
          onBack={handleBackToHome} 
        />
      )}
    </div>
  );
};

export default AppRouter;