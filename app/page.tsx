
'use client';

import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import RotatingCards from './components/RotatingCards';
import AboutUs from './components/AboutUs';
import Creators from './components/Creators';
import Contact from './components/Contact';
import ChatbotIcon from './components/ChatbotIcon';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <Hero />
      <RotatingCards />
      <AboutUs />
      <Creators />
      <Contact />
      <ChatbotIcon />
    </div>
  );
}
