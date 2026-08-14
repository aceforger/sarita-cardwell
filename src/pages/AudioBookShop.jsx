import React, { useState, useRef, useEffect } from 'react';

const audiobooks = [
  {
    id: 1,
    title: 'LILLY OF THE GHETTO',
    author: 'SARITA GAYE CARDWELL',
    narrator: 'Mandy Grant',
    image: '/images/image1.png',
    rating: 4.8,
    description: '“Lilly of the Ghetto” expresses admiration for a woman who brings wonder, excitement, and a sense of magic wherever she goes. She is portrayed as someone extraordinary, capable of creating memorable and rewarding experiences for others. The poem reflects a desire for her presence to continue, emphasizing that life feels more vibrant and meaningful when she is around. Overall, it celebrates belief, hope, and the joy of witnessing something special that feels almost too good to be true.',
    comingSoon: true,
    platformLinks: []
  },
  {
    id: 2,
    title: 'THE LEGEND OF ANNE AND NUBIAN',
    author: 'SARITA GAYE CARDWELL',
    narrator: 'Morgan Freeman',
    price: 16.99,
    image: '/images/image4.png',
    rating: 4.6,
    duration: '6h 15m',
    description: '“Anne the Nubian” celebrates a powerful African queen and warrior who conquers evil and brings hope, freedom, and justice to her people. She is portrayed as strong, noble, and devoted to truth, leading the oppressed out of suffering and into liberation. The poem highlights her courage, beauty, and spiritual strength, presenting her as a legendary figure whose leadership inspires joy, faith, and triumph over darkness.',
    comingSoon: true,
    platformLinks: []
  }
];

export default function AudioBookShop() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentBookId, setCurrentBookId] = useState(null);
  const [showPlatforms, setShowPlatforms] = useState({});
  const audioRef = useRef(null);

  const handlePlayPause = (bookId) => {
    const book = audiobooks.find(b => b.id === bookId);
    if (book.previewAudio) {
      if (currentBookId === bookId && isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        if (currentBookId !== bookId) {
          if (audioRef.current) {
            audioRef.current.pause();
          }
          setCurrentBookId(bookId);
          audioRef.current.src = book.previewAudio;
          audioRef.current.load();
        }
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    if (audioRef.current) {
      const seekTime = parseFloat(e.target.value);
      audioRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const togglePlatforms = (bookId) => {
    setShowPlatforms(prev => ({
      ...prev,
      [bookId]: !prev[bookId]
    }));
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('loadedmetadata', () => {
        setDuration(audio.duration);
      });
      audio.addEventListener('ended', () => {
        setIsPlaying(false);
        setCurrentTime(0);
      });
    }

    return () => {
      if (audio) {
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('loadedmetadata', () => {});
        audio.removeEventListener('ended', () => {});
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100">
      {/* Hidden audio element */}
      <audio ref={audioRef} className="hidden" />
      
      {/* Hero Section - Orange theme */}
      <section className="relative bg-gradient-to-r from-orange-600 to-amber-700 text-white py-4">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-2xl font-bold mb-1 tracking-tight">Coming Soon</h1>
          <p className="text-sm opacity-90">Exciting new audiobooks are on their way. Stay tuned!</p>
        </div>
      </section>

      {/* Audiobooks Section */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Upcoming Audiobooks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {audiobooks.map((book) => (
            <div key={book.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden opacity-90 hover:opacity-100">
              <div className="flex flex-col md:flex-row">
                {/* Cover */}
                <div className="relative md:w-1/3 flex justify-center items-center p-3 bg-amber-50">
                  <img src={book.image} alt={book.title} className="h-40 object-contain rounded-lg shadow opacity-75" />
                  
                  {/* Coming Soon Badge - Orange */}
                  <div className="absolute top-2 left-2 bg-orange-600 text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
                    Coming Soon
                  </div>
                </div>
                
                {/* Details */}
                <div className="p-4 md:w-2/3 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{book.title}</h3>
                    <p className="text-xs text-gray-500 mb-1">by {book.author}</p>
                    <p className="text-gray-700 text-xs mb-2"><span className="font-medium">Narrated by:</span> {book.narrator}</p>

                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-3.5 h-3.5 ${i < Math.floor(book.rating) ? 'text-amber-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="ml-1 text-xs text-gray-500">
                          {book.rating.toFixed(1)}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs mb-3 line-clamp-2 text-gray-500">
                      {book.description}
                    </p>
                  </div>

                  {/* Coming Soon Section */}
                  <div className="space-y-2">
                    <div className="border-t border-gray-200 pt-2">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-xs font-bold text-orange-600">Coming Soon</span>
                          <p className="text-xs text-gray-500 mt-1">Available on major platforms</p>
                        </div>
                        
                        <button className="px-3 py-1 rounded-lg font-medium text-xs bg-orange-600 text-white hover:bg-orange-700 transition shadow-md hover:shadow-lg flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                          </svg>
                          Notify
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How To Listen - Orange accents */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-5">How To Listen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: 'On Your Phone',
                desc: 'Download from Google Play, Apple Books, or Audible app',
                icon: '📱'
              },
              {
                title: 'On Your Computer',
                desc: 'Stream directly from your browser or desktop app',
                icon: '💻'
              },
              {
                title: 'Smart Speakers',
                desc: 'Connect with Alexa or Google Home devices',
                icon: '🔊'
              }
            ].map((f, i) => (
              <div key={i} className="p-4 bg-orange-50 rounded-xl shadow hover:shadow-lg transition">
                <div className="text-2xl mb-2">{f.icon}</div>
                <h3 className="text-sm font-semibold text-gray-800 mb-1">{f.title}</h3>
                <p className="text-gray-600 text-xs">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Newsletter Section - Orange gradient */}
      <section className="py-8 bg-gradient-to-r from-orange-600 to-amber-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-xl font-bold mb-2">Be the First to Know</h2>
          <p className="text-xs opacity-90 mb-4">Subscribe to get notified when our audiobooks are released</p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-1.5 rounded-lg text-gray-900 text-xs focus:outline-none focus:ring-2 focus:ring-amber-300"
            />
            <button className="px-4 py-1.5 bg-white text-orange-700 rounded-lg font-medium text-xs hover:bg-amber-50 transition shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials - Orange theme */}
      <section className="py-8 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-5">What Our Listeners Say</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                quote: "The narration brought the story to life in ways I couldn't imagine. The narrator's voice is magical!",
                author: 'Sarah J.',
                book: 'TRAPPED BY IMPULSION',
                rating: 5
              },
              {
                quote: "I listen during my commute and it's transformed my daily drive into something I look forward to.",
                author: 'Michael T.',
                book: 'UNPLEASANT PASTURES',
                rating: 4
              }
            ].map((t, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow hover:shadow-md transition text-left opacity-75">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className={`w-3.5 h-3.5 ${index < t.rating ? 'text-amber-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-xs italic mb-2">"{t.quote}"</p>
                <p className="text-xs text-gray-600">— <span className="font-medium">{t.author}</span>, Listener of {t.book}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Orange */}
      <footer className="bg-orange-800 text-white py-3">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs mb-1">© {new Date().getFullYear()} Immersive Audiobooks. All rights reserved.</p>
          <p className="text-xs opacity-75">Coming soon to all major audiobook platforms</p>
        </div>
      </footer>
    </div>
  );
}