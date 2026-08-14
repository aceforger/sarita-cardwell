import React, { useState } from 'react';

const books = [
  {
    id: 1,
    title: 'LILLY OF THE GHETTO',
    author: 'SARITA GAYE CAREDWELLL',
    image: '/images/image1.png',
    rating: 4.5,
    description: '“Lilly of the Ghetto” expresses admiration for a woman who brings wonder, excitement, and a sense of magic wherever she goes. She is portrayed as someone extraordinary, capable of creating memorable and rewarding experiences for others. The poem reflects a desire for her presence to continue, emphasizing that life feels more vibrant and meaningful when she is around. Overall, it celebrates belief, hope, and the joy of witnessing something special that feels almost too good to be true.',
    formats: [
      { retailer: 'Amazon', link: 'https://www.amazon.com/Kakaki-Medicine-Woman-Dickson-Lane/dp/B0FSHMPW8Z/ref=sr_1_1?crid=2V8G10Z1XOVI2&dib=eyJ2IjoiMSJ9.Bi4VmTKbHR5mhU7-5gEhRLhTCbvyYeoYArY6sD6BeAU.qoxAhtyYBuwIIvMtyJGZdEA9Nug9AIWP6vDQ8Q3FXPw&dib_tag=se&keywords=KAKAKI%2C+THE+MEDICINE+WOMAN&qid=1763483569&s=books&sprefix=kakaki%2C+the+medicine+woman%2Cstripbooks-intl-ship%2C724&sr=1-1' },
      { retailer: 'Barnes & Noble', link: 'https://www.barnesandnoble.com/w/kakaki-the-medicine-woman-dickson-lane/1148370933?ean=9798349466991' }
    ],
    comingSoon: true
  },
  {
    id: 2,
    title: 'LEGEND OF ANNE AND THE NUBIAN',
    author: 'SARITA GAYE CARDWELL',
    image: '/images/image4.png',
    rating: 4.2,
    description: '“Anne the Nubian” celebrates a powerful African queen and warrior who conquers evil and brings hope, freedom, and justice to her people. She is portrayed as strong, noble, and devoted to truth, leading the oppressed out of suffering and into liberation. The poem highlights her courage, beauty, and spiritual strength, presenting her as a legendary figure whose leadership inspires joy, faith, and triumph over darkness.',
    formats: [
      { retailer: 'Amazon', link: 'https://www.amazon.com/Little-Indians-Successful-Screenplays-Moviemaking/dp/B0FJYN6Q27' },
      { retailer: 'Barnes & Noble', link: 'https://www.barnesandnoble.com/w/the-10-little-indians-dickson-lane/1139918093' },
    ],
    comingSoon: true
  }
];   

export default function BookShop() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Resized */}
        <div className="text-center mb-10">
          <h1 className="text-2xl font-extrabold text-gray-900 mb-1">Sarita Gaye Cardwell's Collection</h1>
          <p className="text-sm text-gray-600">Discover captivating stories from a master storyteller</p>
        </div>

       

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {books.map((book) => (
            <div key={book.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="md:flex">
                
                {/* Book Cover */}
                <div className="relative flex-shrink-0 bg-amber-50 flex items-center justify-center p-4 md:p-6">
                  <img className="h-48 w-36 object-contain rounded-lg shadow-md opacity-80" src={book.image} alt={book.title} />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center rounded-lg">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full font-bold text-xs shadow-lg">
                      COMING SOON
                    </span>
                  </div>
                </div>
                
                {/* Book Details */}
                <div className="p-4 md:p-5 flex flex-col justify-between">
                  <div>
                    {/* Rating */}
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(book.rating) ? 'text-amber-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-xs text-gray-600">{book.rating.toFixed(1)}</span>
                    </div>

                    <h2 className="text-lg font-bold text-gray-900 mb-1">{book.title}</h2>
                    <p className="text-xs text-gray-500 mb-3">by {book.author}</p>
                    <p className="text-gray-700 mb-4 text-xs line-clamp-2">{book.description}</p>
                  </div>

                  <button
                    onClick={() => openModal(book)}
                    className="w-full px-3 py-1.5 text-xs font-medium rounded-lg bg-amber-100 text-orange-600 hover:bg-amber-200 transition"
                  >
                    Notify Me
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">More Books Coming Soon!</h2>
          <div className="max-w-md mx-auto">
            <p className="text-xs text-gray-600 mb-3">Sign up to be notified when we release new titles</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-3 py-1.5 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button className="px-4 py-1.5 bg-orange-600 text-white text-sm font-medium rounded-lg hover:bg-orange-700 transition">
                Notify Me
              </button>
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && selectedBook && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeModal}></div>
            
            {/* Modal Card */}
            <div className="relative z-10 w-full max-w-lg mx-auto">
              <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden">
                
                {/* Header */}
                <div className="flex justify-between items-center px-5 py-3 border-b border-gray-200 bg-gradient-to-r from-orange-500 to-amber-600">
                  <h3 className="text-base font-semibold text-white truncate max-w-xs">{selectedBook.title}</h3>
                  <button onClick={closeModal} className="text-white hover:text-gray-200 transition text-lg">
                    ✕
                  </button>
                </div>

                {/* Body */}
                <div 
                  className="p-5 bg-cover bg-center relative"
                  style={{ 
                    backgroundImage: 'url("https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1600&q=80")' 
                  }}
                >
                  <div className="absolute inset-0 bg-black/30 rounded-b-2xl"></div>

                  <div className="relative space-y-3">
                    <div className="text-center mb-3">
                      <span className="inline-block bg-orange-600 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg">
                        Coming Soon
                      </span>
                      <p className="text-white text-xs mt-2 opacity-90">
                        This book will be available soon. We'll notify you when it's ready!
                      </p>
                    </div>
                    
                    {/* Email Signup inside Modal */}
                    <div className="bg-white/90 backdrop-blur-md rounded-xl p-4">
                      <p className="text-xs text-gray-700 mb-2 font-medium">Get notified when available:</p>
                      <div className="flex gap-2">
                        <input
                          type="email"
                          placeholder="Your email"
                          className="flex-1 px-3 py-1.5 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <button className="px-3 py-1.5 text-xs bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
                          Notify
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-5 py-3 border-t border-gray-200 bg-gray-50 flex justify-end">
                  <button
                    onClick={closeModal}
                    className="px-4 py-1.5 text-xs bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}