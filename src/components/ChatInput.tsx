import React, { RefObject } from 'react';
import { Send, Wand2 } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  onEnhancePrompt: (message: string) => void;
  isLoading: boolean;
  modifyingTweet: boolean;
  placeholder?: string;
  inputValue: string;
  setInputValue: (value: string) => void;
  inputRef: RefObject<HTMLTextAreaElement>;
}

const ChatInput: React.FC<ChatInputProps> = ({ 
  onSendMessage, 
  onEnhancePrompt, 
  isLoading, 
  modifyingTweet,
  placeholder,
  inputValue,
  setInputValue,
  inputRef
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue && inputValue.trim() && !isLoading) {
      onSendMessage(inputValue);
    }
  };

  const handleEnhance = () => {
    if (inputValue && inputValue.trim() && !isLoading) {
      onEnhancePrompt(inputValue);
    }
  };

  const defaultPlaceholder = modifyingTweet 
    ? "Enter your modification instructions..." 
    : "Describe the tweet you want Ryan to write...";

  return (
    <div className="border-t border-gray-200 bg-white p-4">
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
          <textarea
            ref={inputRef}
            value={inputValue || ''}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={placeholder || defaultPlaceholder}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
            rows={3}
            disabled={isLoading}
          />
          <div className="flex justify-between">
            <button
              type="button"
              onClick={handleEnhance}
              disabled={!inputValue || !inputValue.trim() || isLoading}
              className={`flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${modifyingTweet ? 'hidden' : ''}`}
            >
              <Wand2 className="h-4 w-4" />
              <span>Enhance Prompt</span>
            </button>
            <button
              type="submit"
              disabled={!inputValue || !inputValue.trim() || isLoading}
              className={`flex items-center space-x-2 px-4 py-2 ${modifyingTweet ? 'bg-blue-600 hover:bg-blue-700' : 'bg-red-500 hover:bg-red-600'} text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${!modifyingTweet ? '' : 'ml-auto'}`}
            >
              <Send className="h-4 w-4" />
              <span>{modifyingTweet ? 'Modify Tweet' : 'Generate Tweet'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatInput;
