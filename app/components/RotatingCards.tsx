'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function RotatingCards() {
  const [currentCard, setCurrentCard] = useState(0);
  
  const cards = [
    {
      title: "Premium Courses",
      description: "Master financial concepts with our comprehensive course library",
      image: "https://readdy.ai/api/search-image?query=Modern%20financial%20education%20classroom%20with%20charts%20and%20graphs%2C%20professional%20learning%20environment%20with%20blue%20and%20gold%20accents%2C%20clean%20minimal%20design%20for%20online%20courses&width=600&height=400&seq=courses-preview&orientation=landscape",
      link: "/courses",
      icon: "ri-graduation-cap-fill"
    },
    {
      title: "Our Best Work",
      description: "Watch our featured portfolio showcasing successful financial strategies",
      image: "https://readdy.ai/api/search-image?query=Professional%20video%20presentation%20showing%20financial%20success%20stories%20and%20portfolio%20performance%2C%20modern%20corporate%20style%20with%20green%20and%20blue%20themes&width=600&height=400&seq=best-work&orientation=landscape",
      link: "/portfolio",
      icon: "ri-play-circle-fill"
    },
    {
      title: "Featured Blog",
      description: "Latest insights on market trends and investment strategies",
      image: "https://readdy.ai/api/search-image?query=Clean%20modern%20blog%20layout%20with%20financial%20articles%20and%20market%20analysis%2C%20professional%20editorial%20design%20with%20blue%20and%20green%20color%20scheme&width=600&height=400&seq=featured-blog&orientation=landscape",
      link: "/blogs/featured",
      icon: "ri-article-fill"
    },
    {
      title: "Top Blogs",
      description: "Most popular articles from our expert writers",
      image: "https://readdy.ai/api/search-image?query=Collection%20of%20popular%20financial%20blog%20posts%20and%20articles%20displayed%20in%20modern%20grid%20layout%2C%20professional%20publishing%20design&width=600&height=400&seq=top-blogs&orientation=landscape",
      link: "/blogs",
      icon: "ri-fire-fill"
    },
    {
      title: "Premium Tools",
      description: "Advanced calculators and analyzers for serious investors",
      image: "https://readdy.ai/api/search-image?query=Professional%20financial%20calculator%20interface%20with%20charts%20and%20data%20visualization%2C%20premium%20tool%20design%20with%20gold%20and%20blue%20accents&width=600&height=400&seq=paid-tools&orientation=landscape",
      link: "/tools/premium",
      icon: "ri-vip-crown-fill"
    },
    {
      title: "Free Tools",
      description: "Essential financial calculators available at no cost",
      image: "https://readdy.ai/api/search-image?query=Simple%20clean%20financial%20calculator%20tools%20interface%2C%20accessible%20design%20with%20green%20and%20blue%20color%20scheme%20for%20free%20tools&width=600&height=400&seq=free-tools&orientation=landscape",
      link: "/tools/free",
      icon: "ri-gift-fill"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive suite of financial education, tools, and insights designed to accelerate your wealth-building journey
          </p>
        </div>

        <div className="relative h-96 md:h-[500px] perspective-1000">
          <div className="relative w-full h-full">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 transform ${
                  index === currentCard 
                    ? 'opacity-100 translate-x-0 scale-100 z-10' 
                    : index === (currentCard - 1 + cards.length) % cards.length
                    ? 'opacity-30 -translate-x-full scale-95 z-5'
                    : index === (currentCard + 1) % cards.length
                    ? 'opacity-30 translate-x-full scale-95 z-5'
                    : 'opacity-0 translate-x-full scale-90 z-0'
                }`}
              >
                <Link href={card.link} className="block h-full cursor-pointer">
                  <div className="bg-white rounded-2xl shadow-2xl h-full overflow-hidden border border-gray-100 hover:shadow-3xl transition-shadow duration-300">
                    <div className="relative h-2/3">
                      <img 
                        src={card.image} 
                        alt={card.title}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      <div className="absolute top-6 left-6">
                        <i className={`${card.icon} text-yellow-400 text-3xl w-8 h-8 flex items-center justify-center`}></i>
                      </div>
                    </div>
                    <div className="p-8 h-1/3 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{card.title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">{card.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Card Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCard(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentCard 
                  ? 'bg-blue-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}