import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const galleryImages = [
  {
    id: 1,
    src: "/images/gallery1.png",
  },
  {
    id: 2,
    src: "/images/gallery2.png",
  },
  {
    id: 3,
    src: "/images/gallery3.png",
  },
  {
    id: 4,
    src: "/images/gallery4.png",
  },
  {
    id: 5,
    src: "/images/gallery5.png",
  },
  {
    id: 6,
    src: "/images/gallery6.png",
  },
  {
    id: 7,
    src: "/images/gallery7.png",
  },
  {
    id: 8,
    src: "/images/gallery8.png",
  },
  {
    id: 9,
    src: "/images/gallery9.png",
  },
];

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const goToPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isOpen) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') goToPrev(e);
        if (e.key === 'ArrowRight') goToNext(e);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-center text-4xl font-serif text-gray-800 mb-16 relative">
          <span className="relative inline-block">
            Gallery
            <span className="absolute bottom-[-10px] left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-400"></span>
          </span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id} 
              onClick={() => openLightbox(index)}
              className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-500 hover:shadow-xl hover:-translate-y-2 aspect-[4/3]"
            >
              <img 
                src={image.src} 
                alt={image.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {isOpen && (
          <div className="fixed inset-0 bg-black/95 z-[1000] flex items-center justify-center p-5 backdrop-blur-sm">
            <button 
              onClick={closeLightbox}
              className="absolute top-8 right-8 text-white text-3xl hover:text-orange-400 transition-colors duration-300"
            >
              <FaTimes />
            </button>
            
            <div className="relative w-full max-w-6xl">
              <button 
                onClick={goToPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-white/10 hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl backdrop-blur-sm transition-all duration-300"
              >
                <FaChevronLeft />
              </button>
              
              <div className="relative w-full h-full max-h-[80vh] flex items-center justify-center">
                <img 
                  src={galleryImages[currentIndex].src} 
                  alt={galleryImages[currentIndex].title} 
                  className="max-h-[70vh] w-auto rounded-lg shadow-2xl object-contain"
                />
              </div>
              
              <button 
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-white/10 hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl backdrop-blur-sm transition-all duration-300"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageGallery;