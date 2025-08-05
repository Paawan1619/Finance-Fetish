'use client';

import { useState } from 'react';

export default function Creators() {
  const [selectedCreator, setSelectedCreator] = useState(null);

  const creators = [
    {
      id: 1,
      name: "Devyansh Pawar",
      title: "CEO & Founder",
      bio: "Visionary leader with 8+ years in fintech industry, passionate about democratizing financial education in India.",
      image: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20young%20Indian%20CEO%20in%20modern%20business%20suit%2C%20confident%20leadership%20expression%20with%20financial%20background%2C%20inspiring%20and%20visionary&width=400&height=400&seq=ceo-devyansh&orientation=squarish",
      social: {
        linkedin: "https://linkedin.com/in/devyanshpawar",
        twitter: "https://twitter.com/devyanshpawar",
        email: "devyansh@financefetish.com"
      },
      expertise: ["Business Strategy", "Fintech Innovation", "Leadership"],
      achievements: ["Founded 3 Successful Startups", "MBA from IIM", "Forbes 30 Under 30"]
    },
    {
      id: 2,
      name: "Paawan Sharma",
      title: "Backend Developer",
      bio: "Expert full-stack developer specializing in secure financial systems and scalable backend architecture.",
      image: "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20young%20Indian%20software%20developer%20in%20casual%20tech%20environment%2C%20coding%20background%20with%20modern%20setup%2C%20technical%20expertise&width=400&height=400&seq=backend-paawan&orientation=squarish",
      social: {
        linkedin: "https://linkedin.com/in/paawansharma",
        twitter: "https://twitter.com/paawansharma",
        email: "paawan@financefetish.com"
      },
      expertise: ["Node.js", "Database Design", "API Development"],
      achievements: ["B.Tech CSE", "5+ Years Experience", "Open Source Contributor"]
    },
    {
      id: 3,
      name: "Chhavi Soni",
      title: "Chatbot Developer",
      bio: "AI specialist creating intelligent chatbots that make financial advice accessible and personalized for everyone.",
      image: "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20young%20Indian%20woman%20AI%20developer%20in%20modern%20tech%20workspace%2C%20friendly%20and%20innovative%20expression%2C%20chatbot%20and%20AI%20background&width=400&height=400&seq=chatbot-chhavi&orientation=squarish",
      social: {
        linkedin: "https://linkedin.com/in/chhavisoni",
        twitter: "https://twitter.com/chhavisoni",
        email: "chhavi@financefetish.com"
      },
      expertise: ["AI/ML", "Natural Language Processing", "Chatbot Development"],
      achievements: ["M.Tech AI", "Published Research Papers", "AI Innovation Award"]
    },
    {
      id: 4,
      name: "Rishita Thakur",
      title: "Frontend Developer",
      bio: "Creative UI/UX developer crafting beautiful and intuitive interfaces that make finance learning enjoyable.",
      image: "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20young%20Indian%20woman%20frontend%20developer%20in%20creative%20workspace%2C%20design-focused%20background%20with%20colorful%20UI%20elements%2C%20artistic%20and%20technical&width=400&height=400&seq=frontend-rishita&orientation=squarish",
      social: {
        linkedin: "https://linkedin.com/in/rishitathakur",
        twitter: "https://twitter.com/rishitathakur",
        email: "rishita@financefetish.com"
      },
      expertise: ["React.js", "UI/UX Design", "Frontend Architecture"],
      achievements: ["B.Tech IT", "Design Excellence Award", "4+ Years Experience"]
    },
    {
      id: 5,
      name: "Taniya Thakur",
      title: "Frontend Developer",
      bio: "Passionate frontend developer focused on creating responsive and accessible financial education platforms.",
      image: "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20young%20Indian%20woman%20frontend%20developer%20in%20modern%20office%20setting%2C%20collaborative%20and%20innovative%20atmosphere%2C%20web%20development%20background&width=400&height=400&seq=frontend-taniya&orientation=squarish",
      social: {
        linkedin: "https://linkedin.com/in/taniyathakur",
        twitter: "https://twitter.com/taniyathakur",
        email: "taniya@financefetish.com"
      },
      expertise: ["JavaScript", "Responsive Design", "Performance Optimization"],
      achievements: ["B.Tech CSE", "3+ Years Experience", "Web Development Expert"]
    }
  ];

  const closeModal = () => {
    setSelectedCreator(null);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-400">Expert Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn from passionate innovators building India's future financial platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {creators.map((creator) => (
            <div 
              key={creator.id}
              className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-700 hover:border-yellow-400"
              onClick={() => setSelectedCreator(creator)}
            >
              <div className="text-center">
                <img 
                  src={creator.image} 
                  alt={creator.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover object-top border-4 border-yellow-400"
                />
                <h3 className="text-xl font-bold mb-2">{creator.name}</h3>
                <p className="text-yellow-400 font-semibold mb-4">{creator.title}</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">{creator.bio}</p>
                
                <div className="flex justify-center space-x-4">
                  <a href={creator.social.linkedin} className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                    <i className="ri-linkedin-fill text-white w-5 h-5 flex items-center justify-center"></i>
                  </a>
                  <a href={creator.social.twitter} className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-300 transition-colors cursor-pointer">
                    <i className="ri-twitter-fill text-white w-5 h-5 flex items-center justify-center"></i>
                  </a>
                  <a href={`mailto:${creator.social.email}`} className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors cursor-pointer">
                    <i className="ri-mail-fill text-white w-5 h-5 flex items-center justify-center"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal remains the same */}
      {selectedCreator && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-6" onClick={closeModal}>
          <div 
            className="bg-gray-800 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-600"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-6">
                <img 
                  src={selectedCreator.image} 
                  alt={selectedCreator.name}
                  className="w-24 h-24 rounded-full object-cover object-top border-4 border-yellow-400"
                />
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedCreator.name}</h3>
                  <p className="text-yellow-400 font-semibold text-lg">{selectedCreator.title}</p>
                </div>
              </div>
              <button 
                onClick={closeModal}
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer"
              >
                <i className="ri-close-line text-white w-4 h-4 flex items-center justify-center"></i>
              </button>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">{selectedCreator.bio}</p>

            <div className="mb-6">
              <h4 className="text-lg font-bold text-white mb-3">Areas of Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {selectedCreator.expertise.map((skill, index) => (
                  <span key={index} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-bold text-white mb-3">Key Achievements</h4>
              <ul className="space-y-2">
                {selectedCreator.achievements.map((achievement, index) => (
                  <li key={index} className="text-gray-300 flex items-center">
                    <i className="ri-check-line text-green-400 mr-2 w-4 h-4 flex items-center justify-center"></i>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center space-x-4">
              <a href={selectedCreator.social.linkedin} className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition-colors cursor-pointer whitespace-nowrap">
                Connect on LinkedIn
              </a>
              <a href={`mailto:${selectedCreator.social.email}`} className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-500 transition-colors cursor-pointer whitespace-nowrap">
                Send Email
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}