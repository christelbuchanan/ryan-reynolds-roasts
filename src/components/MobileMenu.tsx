import React from 'react';

interface MobileMenuProps {
  onToggleSidebar: () => void;
  onNewTweet: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onToggleSidebar, onNewTweet }) => {
  return (
    <div className="bg-white border-t border-gray-200 p-3 md:hidden">
      <div className="max-w-3xl mx-auto flex justify-between">
        <button 
          onClick={onNewTweet}
          className="flex items-center space-x-2 text-gray-700 hover:text-binance-yellow transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span>Generate</span>
        </button>
        
        <button 
          onClick={onToggleSidebar}
          className="flex items-center space-x-2 text-gray-700 hover:text-binance-yellow transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          <span>Trending Topics</span>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
