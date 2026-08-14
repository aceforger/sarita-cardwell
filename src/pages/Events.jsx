import React, { useState } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaRegCalendarCheck, FaTimes, FaGlobeEurope, FaChevronLeft, FaChevronRight, FaExpand, FaBookOpen } from 'react-icons/fa';

// Frankfurt event images
const frankfurtImages = [
  {
    id: 1,
    src: "/images/frankfurt/frankfurt1.jpg",
    category: "venue"
  },
  {
    id: 2,
    src: "/images/frankfurt/frankfurt2.jpg",
    category: "venue"
  },
  {
    id: 3,
    src: "/images/frankfurt/frankfurt3.jpg",
    category: "exhibition"
  },
  {
    id: 4,
    src: "/images/frankfurt/frankfurt4.jpg",
    category: "exhibition"
  },
  {
    id: 5,
    src: "/images/frankfurt/frankfurt5.jpg",
    category: "books"
  },
  {
    id: 6,
    src: "/images/frankfurt/frankfurt6.jpg",
    category: "books"
  },
  {
    id: 7,
    src: "/images/frankfurt/frankfurt7.jpg",
    category: "venue"
  },
  {
    id: 8,
    src: "/images/frankfurt/frankfurt8.jpg",
    category: "venue"
  },
  {
    id: 9,
    src: "/images/frankfurt/frankfurt9.jpg",
    category: "exhibition"
  },
  {
    id: 10,
    src: "/images/frankfurt/frankfurt10.jpg",
    category: "exhibition"
  },
  {
    id: 11,
    src: "/images/frankfurt/frankfurt11.jpg",
    category: "books"
  },
  {
    id: 12,
    src: "/images/frankfurt/frankfurt12.jpg",
    category: "books"
  },
  {
    id: 13,
    src: "/images/frankfurt/frankfurt13.jpg",
    category: "venue"
  },
  {
    id: 14,
    src: "/images/frankfurt/frankfurt14.jpg",
    category: "exhibition"
  },
  {
    id: 15,
    src: "/images/frankfurt/frankfurt15.jpg",
    category: "books"
  }
];

const eventsData = [
  {
    id: 1,
    title: "Frankfurter Buchmesse 2025 - Book Signing & Reading",
    date: "October 7-11, 2025",
    //time: "2:00 PM - 5:00 PM Daily",
    location: "Frankfurter Buchmesse, Frankfurt",
    venue: "Ludwig-Erhard-Anlage 1, 60327 Frankfurt am Main, Germany",
    description: "Join Dickson Lane at the world's largest and most prestigious book fair - Frankfurter Buchmesse 2025. Meet the author for book signings, readings from his latest works 'Kakaki, The Medicine Woman' and 'The 10 Little Indians', and engage in discussions about contemporary literature and storytelling.",
    status: "upcoming",
    highlights: [
      "Exclusive book signing sessions",
      "Readings from latest novels",
      "Q&A with the author",
      "Meet fellow literature enthusiasts",
      "Special edition book copies available",
      "International publisher meetings",
      "Literary discussions and panels"
    ]
  }
];

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'auto';
  };

  const openGallery = (index = 0) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === frankfurtImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? frankfurtImages.length - 1 : prevIndex - 1
    );
  };

  const filteredImages = activeCategory === 'all' 
    ? frankfurtImages 
    : frankfurtImages.filter(img => img.category === activeCategory);

  const categories = [
    { id: 'all', name: 'All Photos', count: frankfurtImages.length },
    { id: 'venue', name: 'Venue', count: frankfurtImages.filter(img => img.category === 'venue').length },
    { id: 'exhibition', name: 'Exhibition', count: frankfurtImages.filter(img => img.category === 'exhibition').length },
    { id: 'books', name: 'Books', count: frankfurtImages.filter(img => img.category === 'books').length }
  ];

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-center text-4xl font-serif text-gray-800 mb-16 relative">
          <span className="relative inline-block">
            Events & Appearances
            <span className="absolute bottom-[-10px] left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-400"></span>
          </span>
        </h2>
        
        {/* Upcoming Events */}
        <div className="mb-20">
          <h3 className="text-2xl font-serif text-gray-800 mb-8 flex items-center">
            <FaRegCalendarCheck className="text-orange-500 mr-3" />
            Recent Events
          </h3>
          
          <div className="grid grid-cols-1 gap-8">
            {eventsData.map((event) => (
              <div 
                key={event.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer border border-gray-100"
                onClick={() => openModal(event)}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="lg:col-span-1 relative h-64 lg:h-auto overflow-hidden">
                    <img 
                      src={frankfurtImages[0].src} 
                      alt="Frankfurt Book Fair"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-blue-700">
                      Featured Event
                    </div>
                  </div>
                  <div className="lg:col-span-2 p-8 mt-8">
                    <div className="flex items-center text-sm text-orange-600 font-medium mb-3">
                      <FaCalendarAlt className="mr-2" />
                      {event.date}
                    </div>
                    <h3 className="text-2xl font-serif text-gray-800 mb-4 group-hover:text-orange-700 transition-colors duration-300">{event.title}</h3>
                    <div className="space-y-3 mb-4">
                      {/* <div className="flex items-center text-gray-600">
                        <FaClock className="mr-3 text-blue-500" />
                        <span className="font-medium">{event.time}</span>
                      </div> */}
                      <div className="flex items-center text-gray-600">
                        <FaMapMarkerAlt className="mr-3 text-orange-500" />
                        <span className="font-medium">{event.venue}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6 line-clamp-2">{event.description}</p>
                    <div className="flex items-center justify-between">
                      <button className="text-orange-600 font-medium hover:text-orange-700 duration-300 flex items-center group-hover:translate-x-2 transition-transform">
                        View Details <span className="ml-2">→</span>
                      </button>
                      {/* <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-medium px-3 py-1 rounded-full shadow-lg">
                        Confirmed
                      </span> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Frankfurt Gallery */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <h3 className="text-2xl font-serif text-gray-800 mb-4 lg:mb-0 flex items-center">
              <FaGlobeEurope className="text-orange-500 mr-3" />
              Frankfurt Book Fair Gallery
            </h3>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-orange-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Masonry Grid Gallery */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filteredImages.map((image) => (
              <div 
                key={image.id}
                className="break-inside-avoid relative group cursor-pointer rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
                onClick={() => openGallery(filteredImages.findIndex(img => img.id === image.id))}
              >
                <img 
                  src={image.src} 
                  alt={`Frankfurt Book Fair ${image.id}`}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="text-white font-medium text-sm mb-1">
                      {image.category.charAt(0).toUpperCase() + image.category.slice(1)}
                    </div>
                    <div className="flex items-center text-white/80 text-xs">
                      <FaExpand className="mr-1" />
                      Click to expand
                    </div>
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaExpand size={14} />
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-8">
            <button 
              onClick={() => openGallery(0)}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-full font-medium hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <FaExpand className="mr-2" />
              View All {frankfurtImages.length} Photos
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-br from-purple-50 via-white to-pink-50 rounded-2xl p-8 border border-purple-100 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-serif text-gray-800 mb-4 flex items-center">
                <FaBookOpen className="text-orange-500 mr-3" />
                About Frankfurter Buchmesse
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Frankfurt Book Fair is the world's largest trade fair for books, based on both the number of publishing companies 
                and the number of visitors. For more than 500 years, it has been the most important meeting place for the international 
                publishing and media industry.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <strong>Location:</strong> Frankfurt am Main, Germany
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <strong>Visitors:</strong> 300,000+
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <strong>Exhibitors:</strong> 7,500+ from 100+ countries
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <strong>Focus:</strong> International publishing
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={frankfurtImages[1]?.src} 
                  alt="Frankfurt Book Fair"
                  className="rounded-lg shadow-md h-32 object-cover"
                />
                <img 
                  src={frankfurtImages[2]?.src} 
                  alt="Frankfurt Book Fair"
                  className="rounded-lg shadow-md h-32 object-cover"
                />
                <img 
                  src={frankfurtImages[3]?.src} 
                  alt="Frankfurt Book Fair"
                  className="rounded-lg shadow-md h-32 object-cover mt-4"
                />
                <img 
                  src={frankfurtImages[4]?.src} 
                  alt="Frankfurt Book Fair"
                  className="rounded-lg shadow-md h-32 object-cover mt-4"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Event Modal */}
        {isModalOpen && selectedEvent && (
          <div className="fixed inset-0 bg-black/95 z-[1000] flex items-center justify-center p-5 backdrop-blur-sm">
            <div className="bg-white rounded-2xl max-w-6xl max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button 
                  onClick={closeModal}
                  className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 text-2xl z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:scale-110 transition-transform"
                >
                  <FaTimes />
                </button>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                  {/* Image Gallery Section */}
                  <div className="space-y-4">
                    <div className="relative rounded-xl overflow-hidden shadow-lg">
                      <img 
                        src={frankfurtImages[0].src} 
                        alt="Frankfurt Book Fair"
                        className="w-full h-80 object-cover"
                      />
                      <button 
                        onClick={() => openGallery(0)}
                        className="absolute top-4 right-4 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                      >
                        <FaExpand />
                      </button>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {frankfurtImages.slice(1, 7).map((image, index) => (
                        <div key={image.id} className="relative group">
                          <img 
                            src={image.src} 
                            alt={`Frankfurt ${index + 2}`}
                            className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => openGallery(index + 1)}
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-lg flex items-center justify-center">
                            <FaExpand className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={16} />
                          </div>
                        </div>
                      ))}
                    </div>
                    <button 
                      onClick={() => openGallery(0)}
                      className="w-full bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 text-blue-700 font-medium hover:from-purple-100 hover:to-pink-100 transition-all duration-300 text-center py-3 rounded-lg flex items-center justify-center"
                    >
                      <FaExpand className="mr-2" />
                      View All {frankfurtImages.length} Photos
                    </button>
                  </div>
                  
                  {/* Event Details Section */}
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center text-orange-600 font-medium mb-4">
                        <FaCalendarAlt className="mr-2" />
                        {selectedEvent.date}
                      </div>
                      <h3 className="text-3xl font-serif text-gray-800 mb-6 leading-tight">{selectedEvent.title}</h3>
                      
                      <div className="space-y-4 mb-6">
                        {/* <div className="flex items-center text-gray-700 bg-gray-50 rounded-lg p-4">
                          <FaClock className="mr-4 text-blue-500 text-xl" />
                          <div>
                            <div className="font-medium text-gray-900">Time</div>
                            <div className="text-gray-600">{selectedEvent.time}</div>
                          </div>
                        </div> */}
                        <div className="flex items-center text-gray-700 bg-gray-50 rounded-lg p-4">
                          <FaMapMarkerAlt className="mr-4 text-orange-500 text-xl" />
                          <div>
                            <div className="font-medium text-gray-900">Location</div>
                            <div className="text-gray-600">{selectedEvent.venue}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-700 leading-relaxed mb-6">{selectedEvent.description}</p>
                      
                      <div className="bg-gradient-to-r from-orange-50 to-pink-50 border border-orange-200 rounded-xl p-6">
                        <h4 className="text-xl font-medium text-orange-800 mb-4 flex items-center">
                          <FaRegCalendarCheck className="mr-2" />
                          Event Highlights
                        </h4>
                        <ul className="grid grid-cols-1 gap-3">
                          {selectedEvent.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-center text-orange-700">
                              <span className="w-2 h-2 bg-orange-500 rounded-full mr-4 flex-shrink-0"></span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 font-medium flex items-center justify-center">
                        <FaCalendarAlt className="mr-2" />
                        Add to Calendar
                      </button>
                      <button className="flex-1 border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl hover:bg-purple-50 transition-all duration-300 font-medium flex items-center justify-center">
                        <FaMapMarkerAlt className="mr-2" />
                        Get Directions
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Full Screen Gallery */}
        {isGalleryOpen && (
          <div className="fixed inset-0 bg-black/95 z-[1000] flex items-center justify-center p-5 backdrop-blur-sm">
            <button 
              onClick={closeGallery}
              className="absolute top-8 right-8 text-white text-3xl hover:text-orange-400 transition-colors duration-300 z-10 bg-black/30 hover:bg-black/50 p-3 rounded-full"
            >
              <FaTimes />
            </button>
            
            <button 
              onClick={prevImage}
              className="absolute left-8 top-1/2 -translate-y-1/2 text-white text-2xl hover:text-orange-400 transition-colors duration-300 z-10 bg-black/30 hover:bg-black/50 p-4 rounded-full"
            >
              <FaChevronLeft />
            </button>
            
            <button 
              onClick={nextImage}
              className="absolute right-8 top-1/2 -translate-y-1/2 text-white text-2xl hover:text-orange-400 transition-colors duration-300 z-10 bg-black/30 hover:bg-black/50 p-4 rounded-full"
            >
              <FaChevronRight />
            </button>
            
            <div className="relative w-full max-w-6xl max-h-[80vh] flex flex-col items-center">
              <img 
                src={filteredImages[currentImageIndex].src} 
                alt={`Frankfurt Book Fair ${currentImageIndex + 1}`}
                className="max-w-full max-h-[65vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="text-white text-center mt-6">
                <div className="font-medium text-lg mb-1">
                  Image {currentImageIndex + 1} of {filteredImages.length}
                </div>
                <div className="text-sm text-gray-300 capitalize">
                  {filteredImages[currentImageIndex].category}
                </div>
              </div>
              
              {/* Thumbnail Strip */}
              <div className="flex space-x-3 mt-6 overflow-x-auto max-w-full px-4 pb-2">
                {filteredImages.map((image, index) => (
                  <img 
                    key={image.id}
                    src={image.src} 
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-20 h-20 object-cover rounded-lg cursor-pointer transition-all duration-200 flex-shrink-0 ${
                      index === currentImageIndex 
                        ? 'ring-4 ring-blue-400 scale-110 shadow-lg' 
                        : 'opacity-60 hover:opacity-100 hover:scale-105'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;