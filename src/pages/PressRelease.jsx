import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const PressRelease = ({ pressData }) => {
  const [selectedRelease, setSelectedRelease] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pressReleases, setPressReleases] = useState([]);

  // Process and structure your provided data
  useEffect(() => {
    // If external data is provided, use it
    if (pressData && pressData.length > 0) {
      setPressReleases(pressData);
    } else {
      // Otherwise use the TWO press releases you provided
      const formattedReleases = [
        {
          id: 1,
          title: "Dickson Lane's The 10 Little Indians Unlocks the 10 Essential Keys Every Screenwriter Needs to Succeed",
          date: "December 15, 2025",
          excerpt: "In The 10 Little Indians, Dickson Lane distills the wisdom of cinema's greatest storytellers into ten essential lessons—offering writers, filmmakers, and publishers a masterclass in screenwriting...",
          fullContent: `
            <h3>From Page to Screen: Dickson Lane Reveals the 10 Essential Keys to Successful Screenplays</h3>
            
            <h4>Sub Headline:</h4>
            <p>In The 10 Little Indians, Dickson Lane distills the wisdom of cinema's greatest storytellers into ten essential lessons—offering writers, filmmakers, and publishers a masterclass in screenwriting that is both timeless and commercially powerful.</p>
            
            <h4>Introduction</h4>
            <p>Every great film begins with a great script—and behind every great script lies a set of timeless principles. In his groundbreaking new book, The 10 Little Indians (of Successful Screenplays): Lessons from the Masters of Moviemaking, author and educator Dickson Lane uncovers the craft secrets that have shaped cinema's most enduring stories.</p>
            <p>Blending film study with practical guidance, Lane takes readers on a journey through ten essential keys to screenwriting success. Drawing on lessons from legendary filmmakers and screenwriters, he reveals how story structure, character, dialogue, and theme work together to create scripts that not only captivate audiences but also stand the test of time.</p>
            
            <h4>About the Author:</h4>
            <p>Dickson Lane is a writer, educator, and screenwriting analyst whose career has been dedicated to understanding the mechanics of great storytelling. With a background that bridges both literature and film, Lane has spent years studying the works of iconic filmmakers and translating their techniques into lessons that inspire the next generation of writers.</p>
            <p>Known for his ability to make complex ideas clear, engaging, and practical, Lane has guided students, emerging authors, and aspiring screenwriters in mastering the art of narrative. His passion lies in showing how the wisdom of cinema's masters can empower writers not only to tell better stories but also to craft works that resonate with audiences and endure. The 10 Little Indians (of Successful Screenplays) represents the culmination of Lane's dedication to both teaching and creating, offering writers a resource that is as insightful as it is inspiring.</p>
            
            <h4>About the Book</h4>
            <p>The 10 Little Indians (of Successful Screenplays): Lessons from the Masters of Moviemaking is both a study of cinema's greatest scripts and a practical guide for writers who want to elevate their storytelling.</p>
            <p>In this book, Dickson Lane identifies ten essential keys that appear again and again in the most successful screenplays—structural mastery, unforgettable characters, authentic dialogue, thematic depth, emotional impact, and more. Each chapter explores how legendary filmmakers have applied these principles, using real-world examples that illuminate why certain stories become timeless while others fade.</p>
            <p>Accessible yet insightful, The 10 Little Indians is designed for both aspiring screenwriters and seasoned professionals. It is a roadmap that bridges the gap between film theory and creative practice, making it not just a book to read, but a tool to apply.</p>
            <p>Whether readers dream of writing their first screenplay or refining their tenth, Lane's work offers a unique blend of industry wisdom and creative inspiration—a book that belongs on every storyteller's shelf.</p>
            
            <h4>Reception and Impact</h4>
            <p>Even before its release, The 10 Little Indians (of Successful Screenplays) has been generating buzz within writing circles, film schools, and among independent filmmakers. Early readers describe the book as both "a practical masterclass in screenwriting" and "a love letter to the art of cinema."</p>
            <p>Educators have praised its clarity and structure, noting its potential as a valuable teaching text in creative writing and film programs. Aspiring screenwriters have called it "a guide that finally makes the craft feel accessible without losing its depth." Meanwhile, professionals in the industry have highlighted Lane's ability to distill decades of cinematic wisdom into a framework that is relevant for today's storytellers.</p>
            <p>Critics point to three standout qualities of the book:</p>
            <ul>
              <li>Its ability to bridge film theory and real-world writing practice</li>
              <li>Its mix of inspiration and actionable lessons</li>
              <li>Its resonance with both beginners and experienced writers alike</li>
            </ul>
            <p>With its blend of analysis and guidance, The 10 Little Indians is already being recognized as more than just a book on screenwriting—it is a resource that could shape the way new generations of writers approach the craft.</p>
            
            <h4>Conclusion</h4>
            <p>With The 10 Little Indians (of Successful Screenplays), Dickson Lane has created more than a guidebook—he has crafted a bridge between the wisdom of legendary filmmakers and the aspirations of today's storytellers. At once practical and inspiring, the book equips writers with the tools to craft screenplays that not only succeed on the page but also resonate on the screen.</p>
            <p>Lane's work is a reminder that the art of storytelling is both timeless and evolving, and that every writer—whether a student, an independent filmmaker, or an industry veteran—can learn from the masters while finding their own unique voice.</p>
          `,
          image: "/images/10littleImg.png",
          type: "book_release",
          bookTitle: "The 10 Little Indians"
        },
        {
          id: 2,
          title: "Kakaki, The Medicine Woman: Dickson Lane Delivers a Powerful Novel of Myth, Healing, and Human Resilience",
          date: "December 15, 2025",
          excerpt: "Blending the depth of folklore with the rhythm of cinematic storytelling, Lane's latest work explores the timeless power of courage, tradition, and the stories that heal us...",
          fullContent: `
            <h3>Dickson Lane Unveils Kakaki, The Medicine Woman: A Mythic Tale of Healing, Courage, and the Power of Story</h3>
            
            <h4>Sub Headline:</h4>
            <p>Blending the depth of folklore with the rhythm of cinematic storytelling, Lane's latest work explores the timeless power of courage, tradition, and the stories that heal us.</p>
            
            <h4>Introduction</h4>
            <p>In his latest novel, Kakaki, The Medicine Woman, acclaimed storyteller and screenwriting educator Dickson Lane invites readers into a world where myth and memory intertwine, and stories themselves become a form of medicine. At once lyrical and cinematic, the book traces the journey of Kakaki, a healer whose strength and wisdom are tested by forces that challenge her spirit and the traditions she upholds. With its rich blend of folklore, resilience, and narrative craft, Kakaki, The Medicine Woman is more than a novel—it is a meditation on the power of storytelling to heal, transform, and endure.</p>
            
            <h4>About the Author:</h4>
            <p>Dickson Lane is a storyteller, educator, and screenwriting analyst whose work bridges the worlds of literature and cinema. With a deep respect for cultural traditions and a fascination with the craft of narrative, Lane has dedicated his career to exploring how stories shape human experience.</p>
            <p>His earlier projects examined the lessons of great filmmakers and the art of screenwriting, work that continues to influence his approach to storytelling today. Drawing on this foundation, Lane infuses his fiction with a cinematic rhythm—bringing characters, landscapes, and emotions to life with vivid immediacy.</p>
            <p>Kakaki, The Medicine Woman represents the culmination of Lane's passion for both folklore and narrative craft. Through it he reaffirms his belief that stories are not only entertainment but also vessels of memory, healing, and cultural identity.</p>
            
            <h4>About the Book</h4>
            <p>Kakaki, The Medicine Woman is a sweeping tale that blends myth, tradition, and the enduring human quest for healing. At its center is Leelee, a gifted medicine woman whose strength, wisdom, and resilience are tested as she walks between the worlds of heritage and change.</p>
            <p>The novel draws on the richness of folklore while carrying the urgency and rhythm of modern storytelling. Lane crafts scenes with cinematic intensity—born from his deep study of screenwriting masters—while weaving a narrative that speaks to universal themes: courage in the face of adversity, the struggle to preserve tradition, and the power of stories to transform lives.</p>
            <p>With prose that is at once lyrical and vivid, Kakaki, The Medicine Woman invites readers to reflect on the timeless role of the healer, storyteller, and the human spirit's ability to endure.</p>
            
            <h4>Reception and Impact</h4>
            <p>Even before its wide release, Kakaki, The Medicine Woman has begun to spark anticipation among early readers, educators, and literary critics. The novel has been praised for its lyrical prose, cinematic pacing, and cultural depth, offering an experience that feels both timeless and contemporary.</p>
            <p>Readers highlight Lane's ability to weave myth into modern narrative in a way that feels alive, urgent, and healing. Educators and fellow writers point to the book's unique duality—both a captivating story and a subtle masterclass in the art of storytelling itself.</p>
            <p>Critics have called Kakaki, The Medicine Woman:</p>
            <ul>
              <li>"A breathtaking fusion of folklore and modern narrative craft."</li>
              <li>"A story that heals as it entertains, carrying the weight of tradition into the present day."</li>
              <li>"A novel that lingers long after the final page—poetic, powerful, unforgettable."</li>
            </ul>
            <p>As word spreads, Kakaki is poised to become not just a work of fiction, but a cultural touchstone—a story that resonates across audiences and reminds us of the enduring power of stories to guide, inspire, and connect.</p>
            
            <h4>Conclusion</h4>
            <p>With Kakaki, The Medicine Woman, Dickson Lane delivers more than a novel—he offers readers an encounter with the timeless power of story itself. By blending myth, healing, and cinematic craft, Lane creates a work that entertains while illuminating the deeper truths of courage, resilience, and cultural memory.</p>
            <p>Kakaki stands as both a testament to tradition and a beacon for contemporary readers, proving that stories are not merely told—they are lived, carried, and passed on.</p>
          `,
          image: "/images/kakakiImg.jpg",
          type: "book_release",
          bookTitle: "Kakaki, The Medicine Woman"
        }
      ];
      setPressReleases(formattedReleases);
    }
  }, [pressData]);

  const openModal = (release) => {
    setSelectedRelease(release);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Function to safely render HTML content
  const renderHTML = (htmlString) => {
    return { __html: htmlString };
  };

  return (
    <section id="press" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-center text-4xl font-serif text-gray-800 mb-16 relative">
          <span className="relative inline-block">
            Press Releases
            <span className="absolute bottom-[-10px] left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-400"></span>
          </span>
        </h2>
        
        {/* Only 2 columns for 2 press releases - responsive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pressReleases.map((release) => (
            <div 
              key={release.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer group"
              onClick={() => openModal(release)}
            >
              <div className="h-77 overflow-hidden relative">
                <img 
                  src={release.image} 
                  alt={release.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-orange-100 text-orange-800">
                    Press Release
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-xl font-serif text-white line-clamp-2">
                    {release.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm text-orange-600 font-medium">{release.date}</div>
                  <div className="text-xs text-gray-500 font-medium">
                    {release.bookTitle}
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-5 line-clamp-3">{release.excerpt}</p>
                <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-400 text-white font-medium rounded-lg hover:from-orange-500 hover:to-orange-400 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0">
                  Read Full Press Release
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for full press release */}
        {isModalOpen && selectedRelease && (
          <div className="fixed inset-0 bg-black/95 z-[1000] flex items-center justify-center p-5 backdrop-blur-sm">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button 
                  onClick={closeModal}
                  className="absolute top-6 right-6 text-white hover:text-gray-300 text-2xl z-10 bg-black/30 rounded-full p-2"
                  aria-label="Close modal"
                >
                  <FaTimes />
                </button>
                <div className="h-64 bg-gradient-to-r from-orange-500 to-orange-400 relative overflow-hidden">
                  <img 
                    src={selectedRelease.image} 
                    alt={selectedRelease.title}
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-5">
                      <div className="text-white/90 text-sm font-medium mb-2">{selectedRelease.date}</div>
                      <h3 className="text-3xl font-serif text-white mb-2">{selectedRelease.title}</h3>
                      <div className="text-emerald-200 font-medium mt-2">{selectedRelease.bookTitle}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={renderHTML(selectedRelease.fullContent)}
                />
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <button 
                    onClick={closeModal}
                    className="text-orange-600 hover:text-orange-700 font-medium transition-colors duration-300 flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Press Releases
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact section */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border border-green-100">
            <h3 className="text-2xl font-serif text-gray-800 mb-4">Media Inquiries</h3>
            <p className="text-gray-600 mb-6">
              For interview requests, review copies, or additional information about Dickson Lane's work, please contact our press department.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:info@dicksonlane.com" 
                className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@dicksonlane.com
              </a>
              {/* <a 
                href="/media-kit.zip" 
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-green-600 text-green-600 font-medium rounded-lg hover:bg-green-50 transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Media Kit
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressRelease;