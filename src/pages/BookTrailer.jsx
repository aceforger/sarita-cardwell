import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const BookTrailer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  
  const playTrailer = (videoSrc) => {
    setCurrentVideo(videoSrc);
    setIsPlaying(true);
  };
  
  const closeTrailer = () => {
    setIsPlaying(false);
    setCurrentVideo(null);
  };
  
  return (
    <section id="trailer" className="py-20 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-center text-4xl font-serif text-gray-800 mb-16 relative">
          <span className="relative inline-block">
            Book Trailers
            <span className="absolute bottom-[-10px] left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-400"></span>
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Lilly of the Ghetto*/}
        <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
      <div className="relative">
        <div 
  className="relative rounded-xl overflow-hidden shadow-md cursor-not-allowed group"
  onClick={() => alert('Video trailer coming soon!')}
>
  {/* Neutral background for the book */}
  <div className="absolute inset-0 bg-gray-400"></div>
  
  <img 
    src="/images/image1.png" 
    alt="Lilly of the Ghetto Book Cover" 
    className="w-full h-[50vh] object-contain p-4 transition-transform duration-700 group-hover:scale-105 relative z-10"
  />
  
  {/* Coming Soon Badge - Positioned next to the book (commented out) */}
  {/* <div className="absolute top-4 right-4 z-20">
    <div className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform transition-transform duration-500 group-hover:scale-110">
      🎬 Coming Soon
    </div>
  </div> */}
  
  {/* Play button overlay (subtle indication) */}
  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
    <div className="bg-white/80 p-4 rounded-full transform transition-transform duration-500 group-hover:scale-110">
      <svg className="w-12 h-12 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
      </svg>
    </div>
  </div>
  
  {/* Bottom text with neutral color */}
  <div className="absolute bottom-4 left-4 text-black z-20">
    <p className="text-lg font-medium">Watch the Trailer</p>
    <p className="text-sm opacity-80">Coming Soon</p>
  </div>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <h3 className="text-2xl font-serif text-gray-800 mb-2">Lilly of the Ghetto</h3>
        <p className="text-gray-600 mb-4">Now available</p>
        {/* <button 
          onClick={() => alert('Video trailer coming soon!')}
          className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 opacity-75 cursor-not-allowed"
          disabled
        >
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
          Coming Soon
        </button> */}
      </div>
        </div>
          
          {/* The Legend of Anne and Nubian */}
         <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
  <div className="relative">
<div 
  className="relative rounded-xl overflow-hidden shadow-md cursor-not-allowed group"
  onClick={() => alert('Video trailer coming soon!')}
>
  {/* Orange background for the book */}
  <div className="absolute inset-0 bg-orange-200"></div>
  
  <img 
    src="/images/image4.png" 
    alt="The Legend of Anne and Nubian Book Cover" 
    className="w-full h-[50vh] object-contain p-4 transition-transform duration-700 group-hover:scale-105 relative z-10"
  />
  
  {/* Coming Soon Badge - Positioned next to the book (commented out) */}
  {/* <div className="absolute top-4 right-4 z-20">
    <div className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform transition-transform duration-500 group-hover:scale-110">
      🎬 Coming Soon
    </div>
  </div> */}
  
  {/* Play button overlay (subtle indication on hover) */}
  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
    <div className="bg-white/80 p-4 rounded-full transform transition-transform duration-500 group-hover:scale-110">
      <svg className="w-12 h-12 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
      </svg>
    </div>
  </div>
  
  {/* Bottom text with white color for better contrast */}
  <div className="absolute bottom-4 left-4 text-black z-20">
    <p className="text-lg font-medium">Watch the Trailer</p>
    <p className="text-sm opacity-80">Coming Soon</p>
  </div>
</div>
  </div>
  
  <div className="mt-6 text-center">
    <h3 className="text-2xl font-serif text-gray-800 mb-2">The Legend of Anne and Nubian</h3>
    <p className="text-gray-600 mb-4">Now available</p>
    {/* <button 
      onClick={() => alert('Video trailer coming soon!')}
      className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 opacity-75 cursor-not-allowed"
      disabled
    >
      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
      </svg>
      Coming Soon
    </button> */}
  </div>
        </div>


       
        </div>  
        
        {/* <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-3xl font-serif text-gray-800 mb-6 text-center">Experience the Stories</h3>
          <p className="text-lg leading-relaxed text-gray-600 mb-6">
            Explore the literary world of Dickson Lane through these captivating book trailers. Each video offers
            a unique glimpse into the rich narratives and characters that define his work.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-medium text-gray-800 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Kakaki, The Medicine Woman
              </h4>
              <p className="text-gray-600">
                Watch the official trailer and get a glimpse into the mystical world created by Dickson Lane. 
                This visual journey complements the rich narrative of the novel, bringing to life the characters 
                and settings that make this story unforgettable.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-medium text-gray-800 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                The 10 Little Indians
              </h4>
              <p className="text-gray-600">
                Discover the trailer for this captivating work. The 10 Little Indians delivers another 
                compelling story from Dickson Lane, with themes that resonate with contemporary
                readers while maintaining the author's distinctive narrative style.
              </p>
            </div>
          </div>
        </div> */}
        
        {/* Video Modal */}
        {isPlaying && (
          <div className="fixed inset-0 bg-black/95 z-[1000] flex items-center justify-center p-5 backdrop-blur-sm">
            <button 
              onClick={closeTrailer}
              className="absolute top-8 right-8 text-white text-3xl hover:text-orange-400 transition-colors duration-300 z-10"
            >
              <FaTimes />
            </button>
            
            <div className="relative w-full max-w-4xl aspect-video">
              <video 
                className="w-full h-full rounded-lg"
                controls
                autoPlay
                playsInline
              >
                <source src={currentVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BookTrailer;