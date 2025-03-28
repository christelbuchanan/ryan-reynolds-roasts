import React from 'react';

const ChatHeader: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-3 px-4 flex items-center justify-between">
      <div className="flex items-center">
        <div className="flex items-center">
          <div className="h-8 w-8 mr-2 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">R</div>
          <h1 className="text-xl font-bold text-gray-800">Ryan Reynolds Tweet Generator</h1>
        </div>
      </div>
    </header>
  );
};

export default ChatHeader;
