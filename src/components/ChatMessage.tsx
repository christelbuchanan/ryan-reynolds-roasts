import React from 'react';
import { Message } from '../types';
import { Twitter, Edit, RefreshCw, Maximize } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
  isLastAssistantMessage: boolean;
  onTweet: (tweet: string) => void;
  onModify: (tweet: string, template: string) => void;
  onNewTweet: () => void;
  onExpandTweet: (tweet: string) => void;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ 
  message, 
  isLastAssistantMessage, 
  onTweet, 
  onModify, 
  onNewTweet,
  onExpandTweet
}) => {
  const isAssistant = message.role === 'assistant';
  
  // Templates for tweet modifications
  const modificationTemplates = [
    "Make it funnier with Ryan's sarcasm",
    "Add a Deadpool reference",
    "Make it more self-deprecating",
    "Add a reference to Aviation Gin",
    "Make it sound like a fake feud with Hugh Jackman",
    "Add a dad joke",
    "Make it more witty and clever",
    "Add a reference to one of his movies",
    "Make it sound like a marketing pitch",
    "Add a Canadian reference"
  ];

  return (
    <div className={`py-5 ${isAssistant ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="max-w-3xl mx-auto px-4 flex">
        <div className="mr-4 mt-1">
          {isAssistant ? (
            <div className="bg-red-500 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <line x1="10" y1="9" x2="8" y2="9"></line>
              </svg>
            </div>
          ) : (
            <div className="bg-gray-200 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          )}
        </div>
        <div className="flex-1">
          <div className="font-medium mb-1">{isAssistant ? 'Ryan Reynolds' : 'You'}</div>
          <div className="text-gray-800 whitespace-pre-wrap">{message.content}</div>
          
          {isAssistant && isLastAssistantMessage && (
            <div className="mt-4 flex flex-wrap gap-2">
              <button 
                onClick={() => onTweet(message.content)}
                className="inline-flex items-center space-x-1 text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md transition-colors"
              >
                <Twitter className="h-4 w-4" />
                <span>Tweet</span>
              </button>
              
              <button 
                onClick={() => onExpandTweet(message.content)}
                className="inline-flex items-center space-x-1 text-sm bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md transition-colors"
              >
                <Maximize className="h-4 w-4" />
                <span>Expand Tweet</span>
              </button>
              
              <div className="relative group">
                <button 
                  className="inline-flex items-center space-x-1 text-sm bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded-md transition-colors"
                >
                  <Edit className="h-4 w-4" />
                  <span>Modify</span>
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md p-2 hidden group-hover:block z-10">
                  {modificationTemplates.map((template, index) => (
                    <button
                      key={index}
                      onClick={() => onModify(message.content, template)}
                      className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                      {template}
                    </button>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={onNewTweet}
                className="inline-flex items-center space-x-1 text-sm bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded-md transition-colors"
              >
                <RefreshCw className="h-4 w-4" />
                <span>New Tweet</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
