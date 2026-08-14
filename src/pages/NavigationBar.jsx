import React, { useState } from 'react';
import { FaHome, FaUser, FaImages, FaPlay, FaBars, FaCalendarAlt, FaNewspaper, FaMicrophone } from 'react-icons/fa';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
      // Add highlight effect to the section
      element.style.transition = 'background-color 0.5s ease';
      element.style.backgroundColor = 'rgba(251, 146, 60, 0.1)';
      setTimeout(() => {
        element.style.backgroundColor = 'transparent';
      }, 2000);
    }
  };

  // Function to handle podcast button with special effect
  const handlePodcastClick = () => {
    setIsMenuOpen(false);
    const element = document.getElementById('podcast');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
      // Add pulse animation to the podcast section
      element.style.transition = 'all 0.5s ease';
      element.style.transform = 'scale(1.01)';
      element.style.boxShadow = '0 20px 60px rgba(251, 146, 60, 0.3)';
      setTimeout(() => {
        element.style.transform = 'scale(1)';
        element.style.boxShadow = 'none';
      }, 1000);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-md z-50 hidden md:block">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex justify-between items-center py-4">
            {/* Updated: Add image alongside text */}
            <div className="flex items-center space-x-3">
              <img 
                src="/images/sarita-icon.png" 
                alt="Sarita Gaye Cardwell" 
                className="h-10 w-10 rounded-full object-cover border-2 border-gray-200"
              />
              <h2 className="text-2xl font-bold text-gray-800 font-serif">
                Sarita Gaye <span className="text-red-800">Cardwell</span>
              </h2>
            </div>
            
            <div className="flex space-x-8">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-gray-700 hover:text-orange-600 transition-colors duration-300 flex items-center"
              >
                <FaHome className="inline mr-2" /> Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-orange-600 transition-colors duration-300 flex items-center"
              >
                <FaUser className="inline mr-2" /> About
              </button>
              <button 
                onClick={() => scrollToSection('trailer')}
                className="text-gray-700 hover:text-orange-600 transition-colors duration-300 flex items-center"
              >
                <FaPlay className="inline mr-2" /> Trailer
              </button>
              <button 
                onClick={() => scrollToSection('podcast')}
                className="text-gray-700 hover:text-orange-600 transition-colors duration-300 flex items-center"
              >
                <FaMicrophone className="inline mr-2" /> Podcast
                {/* Add a small badge */}
                
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <FaBars className="text-gray-800" />
        </button>
        
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 animate-fadeIn">
            <button 
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-100 transition-colors duration-200"
            >
              <FaHome className="inline mr-2" /> Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-100 transition-colors duration-200"
            >
              <FaUser className="inline mr-2" /> About
            </button>
            <button 
              onClick={() => scrollToSection('trailer')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-100 transition-colors duration-200"
            >
              <FaPlay className="inline mr-2" /> Trailer
            </button>
            <button 
              onClick={() => scrollToSection('podcast')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-100 transition-colors duration-200"
            >
              <FaMicrophone className="inline mr-2" /> Podcast
              
            </button>
          </div>
        )}
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default NavigationBar;