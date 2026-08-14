import React, { useState, useRef } from 'react';
import { FaMicrophone, FaPlay, FaPause, FaApple, FaSpotify, FaGoogle, FaAmazon, FaHeadphones, FaRss } from 'react-icons/fa';

const Podcast = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <section id="podcast" className="py-20 bg-gradient-to-b from-white to-gray-50 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 font-serif mb-4">
            Podcast
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Inspiring conversations with Sarita Gaye Cardwell
          </p>
        </div>

        {/* Single Podcast Video */}
        <div 
          className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="relative">
            {/* Video Container */}
            <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800">
              <video 
                ref={videoRef}
                className="w-full h-full object-cover opacity-0"
                poster="/images/podcast-thumbnail.jpg"
                onEnded={handleVideoEnd}
                onClick={togglePlay}
              >
                <source src="/videos/podcast-episode.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Coming Soon Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-sm">
                {/* Microphone Icon */}
                <div className="w-24 h-24 bg-orange-600/20 rounded-full flex items-center justify-center mb-6 border-2 border-orange-400/50 animate-pulse">
                  <FaMicrophone className="text-5xl text-orange-400" />
                </div>
                
                {/* Coming Soon Text */}
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-wider">
                  Coming Soon
                </h3>
                
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-12 h-0.5 bg-orange-400"></div>
                  <span className="text-orange-300 text-sm font-medium uppercase tracking-wider">Podcast</span>
                  <div className="w-12 h-0.5 bg-orange-400"></div>
                </div>
                
                <p className="text-gray-300 text-lg max-w-md text-center px-4">
                  Exciting conversations and inspiring stories coming your way
                </p>
                
                {/* Decorative dots */}
                <div className="flex space-x-2 mt-6">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>

                {/* Notification Button */}
                <button 
                  onClick={() => alert('Subscribe to podcast updates!')}
                  className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
                >
                  Notify Me When Live
                </button>
              </div>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
                <div className="h-full bg-orange-500 w-0 transition-all duration-300"></div>
              </div>
            </div>
            
            {/* Episode Info */}
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                <div className="flex items-center space-x-2">
                  <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full">
                    Coming Soon
                  </span>
                  <span className="bg-yellow-100 text-yellow-600 text-xs font-semibold px-3 py-1 rounded-full animate-pulse">
                    ● In Production
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaHeadphones className="text-gray-400" />
                  <span className="text-sm text-gray-500">Coming Soon</span>
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Podcast Launching Soon!
              </h3>
              <p className="text-gray-600 mb-4">
                Join Sarita Gaye Cardwell as she shares inspiring conversations, behind-the-scenes stories, 
                and writing tips. Stay tuned for the first episode of this exciting new podcast series.
              </p>
              
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>⏱ Coming 2026</span>
                  <span>•</span>
                  <span>📅 Premiering Soon</span>
                  <span>•</span>
                  <span className="text-orange-600 font-medium">#ComingSoon</span>
                </div>
                
                {/* Platform Links */}
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-500">Follow on:</span>
                  <button 
                    onClick={() => window.open('https://apple.com', '_blank')}
                    className="text-gray-400 hover:text-orange-600 transition-all duration-300 transform hover:scale-110"
                    title="Apple Podcasts"
                  >
                    <FaApple className="text-xl" />
                  </button>
                  <button 
                    onClick={() => window.open('https://spotify.com', '_blank')}
                    className="text-gray-400 hover:text-green-600 transition-all duration-300 transform hover:scale-110"
                    title="Spotify"
                  >
                    <FaSpotify className="text-xl" />
                  </button>
                  <button 
                    onClick={() => window.open('https://podcasts.google.com', '_blank')}
                    className="text-gray-400 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
                    title="Google Podcasts"
                  >
                    <FaGoogle className="text-xl" />
                  </button>
                  <button 
                    onClick={() => window.open('https://music.amazon.com', '_blank')}
                    className="text-gray-400 hover:text-orange-500 transition-all duration-300 transform hover:scale-110"
                    title="Amazon Music"
                  >
                    <FaAmazon className="text-xl" />
                  </button>
                  <button 
                    onClick={() => alert('RSS Feed coming soon!')}
                    className="text-gray-400 hover:text-orange-600 transition-all duration-300 transform hover:scale-110"
                    title="RSS Feed"
                  >
                    <FaRss className="text-xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Podcast;