import React, { useState } from "react";

const ebooks = [
  {
    id: 1,
    title: "LILLY OF THE GHETTO",
    author: "SARITA GAYE CARDWELL",
    image: "/images/image1.png",
    rating: 4.5,
    formats: ["EPUB"],
    description: "“Lilly of the Ghetto” expresses admiration for a woman who brings wonder, excitement, and a sense of magic wherever she goes. She is portrayed as someone extraordinary, capable of creating memorable and rewarding experiences for others. The poem reflects a desire for her presence to continue, emphasizing that life feels more vibrant and meaningful when she is around. Overall, it celebrates belief, hope, and the joy of witnessing something special that feels almost too good to be true.",
    comingSoon: true,
    stores: []
  },
  {
    id: 2,
    title: "THE LEGEND OF ANNE AND THE NUBIAN",
    author: "SARITA GAYE CARDWELL",
    image: "/images/image4.png",
    rating: 4.2,
    formats: ["EPUB"],
    description: "“Anne the Nubian” celebrates a powerful African queen and warrior who conquers evil and brings hope, freedom, and justice to her people. She is portrayed as strong, noble, and devoted to truth, leading the oppressed out of suffering and into liberation. The poem highlights her courage, beauty, and spiritual strength, presenting her as a legendary figure whose leadership inspires joy, faith, and triumph over darkness.",
    comingSoon: true,
    stores: []
  }
];

export default function EBookShop() {
  const [selectedEbook, setSelectedEbook] = useState(null);
  const [showComingSoonModal, setShowComingSoonModal] = useState(false);

  const handleShopNow = (ebook) => {
    setSelectedEbook(ebook);
    setShowComingSoonModal(true);
  };

  const closeModal = () => {
    setShowComingSoonModal(false);
    setSelectedEbook(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100">
      {/* Hero Section - Resized smaller */}
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center relative z-10">
          <h1 className="text-xl font-bold text-white mb-1">
            Discover Your Next Digital Escape
          </h1>
          <p className="text-sm text-orange-100 max-w-2xl mx-auto">
            Instantly access captivating ebooks across genres. Read anywhere,
            anytime, on any device.
          </p>
        </div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-gray-900">
            Featured Digital Editions
          </h2>
          <p className="text-gray-600 text-xs mt-1">
            Coming soon to our digital library
          </p>
        </div>

        {/* EBooks Grid */}
        <div className="grid gap-5 md:grid-cols-2">
          {ebooks.map((ebook) => (
            <div
              key={ebook.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden relative"
            >
              {/* Coming Soon Badge */}
              <div className="absolute top-3 right-3 z-10">
                {/* <span className="bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                  🔜 COMING SOON
                </span> */}
              </div>
              
              <div className="flex flex-col md:flex-row">
                {/* Cover */}
                <div className="relative md:w-1/3">
                  <img
                    src={ebook.image}
                    alt={ebook.title}
                    className="w-full h-40 md:h-full object-cover transform group-hover:scale-105 transition duration-500 opacity-80"
                  />
                  <div className="absolute top-2 left-2 bg-orange-600 text-white text-xs px-2 py-0.5 rounded-lg shadow">
                    DIGITAL
                  </div>
                </div>

                {/* Details */}
                <div className="p-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-1">
                      {ebook.title}
                    </h3>
                    <p className="text-xs text-gray-500 mb-1">
                      by {ebook.author}
                    </p>
                    <p className="text-gray-700 text-xs mb-2 line-clamp-2">
                      {ebook.description}
                    </p>
                  </div>

                  <div>
                    {/* Formats */}
                    <div className="mb-2 flex flex-wrap gap-1">
                      {ebook.formats.map((format) => (
                        <span
                          key={format}
                          className="px-2 py-0.5 text-xs rounded-lg font-medium bg-amber-100 text-amber-700"
                        >
                          {format}
                        </span>
                      ))}
                    </div>

                    {/* Button */}
                    <div className="flex items-center justify-end">
                      <button
                        onClick={() => handleShopNow(ebook)}
                        className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-amber-100 text-orange-600 hover:bg-amber-200 transition cursor-pointer"
                      >
                        Notify Me
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-12 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Why Choose EBooks?
          </h2>
          <div className="grid md:grid-cols-3 gap-3">
            {[
              {
                title: "Instant Access",
                description: "Start reading immediately after purchase.",
                icon: "📚",
              },
              {
                title: "Read Anywhere",
                description: "Access on mobile, tablet, or computer.",
                icon: "📱",
              },
              {
                title: "Cloud Library",
                description: "Your books are safe and accessible anytime.",
                icon: "☁️",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-3 rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="text-2xl mb-1">{benefit.icon}</div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-xs">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Coming Soon Modal - Orange */}
      {showComingSoonModal && selectedEbook && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full mx-auto transform animate-fadeIn">
            <div className="p-5 text-center">
              {/* Animated Icon */}
              <div className="mb-3">
                <span className="text-5xl inline-block animate-bounce">🔜</span>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Coming Soon!
              </h3>
              
              <p className="text-sm text-gray-600 mb-3">
                <span className="font-semibold text-orange-600 block mb-1">
                  "{selectedEbook.title}"
                </span>
                by {selectedEbook.author} will be available for purchase soon. 
                We'll notify you when it's ready!
              </p>

              {/* Email Signup */}
              <div className="mb-3">
                <p className="text-xs text-gray-500 mb-2">
                  Want to be notified? Leave your email:
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <button className="px-3 py-1.5 text-sm bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
                    Notify
                  </button>
                </div>
              </div>
              
              <div className="flex justify-center">
                <button
                  onClick={closeModal}
                  className="px-4 py-1.5 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition font-semibold"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
