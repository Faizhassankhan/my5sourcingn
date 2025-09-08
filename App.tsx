
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import OfficeGalleryPage from './pages/OfficeGalleryPage';
import QualityInspectionPage from './pages/QualityInspectionPage';

const App: React.FC = () => {
  // Default route to #/home
  const [route, setRoute] = useState(window.location.hash || '#/home');

  useEffect(() => {
    const handleHashChange = () => {
      // Set route or default to #/home if hash is empty
      setRoute(window.location.hash || '#/home');
      // Scroll to top on page change
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Handle initial load
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch (route) {
      case '#/services':
        return <ServicesPage />;
      case '#/gallery':
        return <GalleryPage />;
      case '#/office-gallery':
        return <OfficeGalleryPage />;
      case '#/quality-inspection':
        return <QualityInspectionPage />;
      case '#/contact':
        return <ContactPage />;
      case '#/home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-gray-900 text-gray-200">
      <Header currentRoute={route} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
};

export default App;
