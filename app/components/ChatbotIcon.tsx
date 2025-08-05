'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ChatbotIcon() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isVisible && (
        <Link href="/chatbot">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-500 hover:to-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 cursor-pointer animate-bounce">
            <i className="ri-robot-fill text-2xl w-6 h-6 flex items-center justify-center"></i>
          </div>
        </Link>
      )}
      
      {/* Tooltip */}
      <div className="absolute bottom-20 right-0 bg-black text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with FinancePal AI
        <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
      </div>
    </div>
  );
}