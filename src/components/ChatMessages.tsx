import React from 'react';
import { Message } from '../types';
import ChatMessage from './ChatMessage';
import TweetAnalytics from './TweetAnalytics';
import { Twitter, RefreshCw, Maximize } from 'lucide-react';
import AnimatedHeart from './AnimatedHeart';

interface ChatMessagesProps {
  messages: Message[];
  isLoading: boolean;
  onTweet: (tweet: string) => void;
  onModify: (tweet: string, template: string) => void;
  onNewTweet: () => void;
  onExpandTweet: (tweet: string) => void;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ 
  messages, 
  isLoading, 
  onTweet, 
  onModify, 
  onNewTweet,
  onExpandTweet
}) => {
  // Check if there are no messages to show welcome screen
  const showWelcome = messages.length === 0 && !isLoading;
  
  // Get the last message that is from the assistant (for analytics)
  const lastAssistantMessage = [...messages].reverse().find(m => m.role === 'assistant');
  
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {showWelcome ? (
        <div className="flex flex-col items-center justify-center h-full text-center px-4">
          <AnimatedHeart />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Maximum Effort Tweets</h2>
          <p className="text-gray-600 mb-6 max-w-md">
            Generate tweets that sound like I wrote them, but without the crushing existential anxiety and Aviation Gin hangover. Warning: May contain excessive sarcasm, Canadian politeness, and jokes about Hugh Jackman that my wife will definitely make me apologize for later.
          </p>
        </div>
      ) : (
        <>
          {messages.map((message) => (
            <ChatMessage 
              key={message.id} 
              message={message} 
              onTweet={onTweet}
              onModify={onModify}
              onExpandTweet={onExpandTweet}
            />
          ))}
          
          {isLoading && (
            <div className="flex items-center space-x-2 text-gray-500 animate-pulse">
              <div className="h-3 w-3 bg-gray-400 rounded-full"></div>
              <div className="h-3 w-3 bg-gray-400 rounded-full"></div>
              <div className="h-3 w-3 bg-gray-400 rounded-full"></div>
              <span className="text-sm">Ryan is typing...</span>
            </div>
          )}
          
          {lastAssistantMessage && !lastAssistantMessage.content.startsWith("I've enhanced your prompt") && (
            <TweetAnalytics tweet={lastAssistantMessage.content} />
          )}
        </>
      )}
    </div>
  );
};

export default ChatMessages;
