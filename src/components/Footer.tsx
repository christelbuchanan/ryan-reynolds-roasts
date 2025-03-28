import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-2 text-center text-sm text-gray-600">
      <div className="max-w-3xl mx-auto px-4">
        <p>Not affiliated with Ryan Reynolds. Built with <a href="https://chatandbuild.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">chatandbuild.com</a> 🚀</p>
      </div>
    </footer>
  );
};

export default Footer;
