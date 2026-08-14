import React, { useEffect, useRef } from 'react';
import { FaBookOpen } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

// Import components
import NavigationBar from './NavigationBar';
import BookTrailer from './BookTrailer';
import ImageGallery from './ImageGallery';
import Events from './Events';
import PressRelease from './PressRelease';
import Podcast from './Podcast';

function AboutMe() {
  const navigate = useNavigate();
  const location = useLocation();
  const aboutRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <div className="bg-white">
      <NavigationBar />
      
      {/* Hero Section */}
      <section id="hero" className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center pt-16">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        {/* Background image */}
        <div className="absolute inset-0">
          <img 
            src="/images/sarita-cfhome.png" 
            alt="Sarita Gaye Cardwell" 
            className="w-full h-full object-full object-center"
          />
        </div>

        {/* Centered content */}
        <div className="relative z-20 text-center text-white px-5 max-w-4xl">
          {/* Optional button */}
        </div>
      </section>

      
      {/* About Section */}
      <div id="about" ref={aboutRef} className="max-w-7xl mx-auto px-5 py-20">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6 relative inline-block">
            <span className="relative">
              About The Author
              <span className="absolute bottom-[-10px] left-0 w-full h-1 bg-gradient-to-r from-maroon-700 to-maroon-600"></span>
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Author, Educator, and Literary Visionary bridging timeless wisdom with contemporary storytelling
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-28">
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="/images/sarita-profile.png" 
                alt="Sarita Gaye Cardwell" 
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -z-10 -bottom-8 -right-8 w-3/4 h-3/4 border-4 border-maroon-600 rounded-xl"></div>
          </div>
          
          <div className="pt-10">
            <h2 className="text-3xl font-serif text-gray-800 mb-8">
              The Story Behind the Words
            </h2>
            
            <div className="space-y-6">
{/* <p className="text-lg leading-relaxed text-gray-600">
Charles Feggans: The Voice of Uncompromising Realism

</p> */}
                             
              <p className="text-lg leading-relaxed text-gray-600">
                  Sarita Gaye Cardwell is a distinguished literary artist whose work is defined by a unique 
                  creative style that transcends traditional boundaries. A native of New York who now calls Washington, D.C. home, she has 
                  cultivated a reputation for writing that is at once clear, precise, and vividly colorful. Her ability to weave together varied 
                  poetic devices and prose into "masterful works of art" has established her as a singular voice in contemporary literature.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-600">
               A lifelong student of the human condition and the "magic" of language, Cardwell approaches her craft with the eye of a true artist. 
               Her work is celebrated for its emotional depth and its ability to keep readers "hooked to the very end," inviting them on an immersive journey that spans the breadth of her imagination. 
               She views the written word as a boundless medium, where the adventure begins on the first page and evolves into a lasting experience of reflection and discovery.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-600">
                The Legend of Anne: Nubian Thoughts & Lilly of the Ghetto represent a significant milestone in her literary career, showcasing her gift for blending wisdom, prose, and poetry into a cohesive narrative. 
                Through these works, Cardwell explores themes of heritage, insight, and the enduring power of the spirit, further 
                solidifying her place as a fresh and compelling presence on Amazon and in the wider world of literature.
              </p>
              
              {/* <p className="text-lg leading-relaxed text-gray-600">
                The Works: From Truth to Fiction
With his debut novel, Trapped By Impulsion, Feggans established himself as a master of high-stakes, uncompromising drama. Whether navigating the shadows of the past or the challenges of the present, his work—available globally via Amazon and major retailers—resonates with readers who seek substance over artifice. Charles Feggans continues to evolve as an artist, proving that the most powerful stories are those forged in the fires of experience and told with an unwavering commitment to the truth.
</p> */}
              
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-screen lg:grid-cols-4 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
            <FaBookOpen className="text-3xl text-maroon-600 mb-4" />
            <h3 className="text-xl font-medium text-gray-800 mb-2">Published Works</h3>
            <p className="text-gray-600">4 books</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
            <FaBookOpen className="text-3xl text-maroon-600 mb-4" />
            <h3 className="text-xl font-medium text-gray-800 mb-2">Education</h3>
            <p className="text-gray-600">Webber-Douglas Academy of Dramatic Art in London, BA in English and Theatre Arts from Catawba College</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
            <FaBookOpen className="text-3xl text-maroon-600 mb-4" />
            <h3 className="text-xl font-medium text-gray-800 mb-2">Writing Style</h3>
            <p className="text-gray-600">Literary fiction with historical depth</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
            <FaBookOpen className="text-3xl text-maroon-600 mb-4" />
            <h3 className="text-xl font-medium text-gray-800 mb-2">Awards</h3>
            <p className="text-gray-600">3-time Booker Prize nominee</p>
          </div>
        </div>
      </div>

      {/* Press Release Section */}
      {/* <PressRelease /> */}

      {/* Book Trailer Section */}
      <BookTrailer />
      <Podcast/>

      {/* Events Section */}
      {/* <Events /> */}

      {/* Gallery Section */}
      {/* <ImageGallery /> */}

      {/* Floating CTA Button */}
      <button 
        onClick={() => navigate('/home')}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-red-800 to-red-800 text-white rounded-full px-6 py-3 shadow-xl flex items-center gap-3 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 z-50"
      >
        <FaBookOpen size={18} />
        <span>Explore Her Work</span>
      </button>
    </div>
  );
}

export default AboutMe;