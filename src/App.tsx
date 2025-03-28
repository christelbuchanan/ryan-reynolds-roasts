import React, { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ChatHeader from './components/ChatHeader';
import ChatMessages from './components/ChatMessages';
import ChatInput from './components/ChatInput';
import TrendingTopics from './components/TrendingTopics';
import MobileMenu from './components/MobileMenu';
import { Message, ChatState } from './types';
import { generateTweet, enhancePrompt, modifyTweet, openTwitterIntent, expandTweet } from './services/api';
import Footer from './components/Footer';

function App() {
  const [chatState, setChatState] = useState<ChatState>({
    messages: [],
    isLoading: false,
    error: null,
    lastTweet: null,
    modifyingTweet: false
  });
  
  const [inputValue, setInputValue] = useState('');
  const [showSidebar, setShowSidebar] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const addMessage = (role: 'user' | 'assistant', content: string) => {
    const newMessage: Message = {
      id: uuidv4(),
      role,
      content,
    };
    
    setChatState((prev) => ({
      ...prev,
      messages: [...prev.messages, newMessage],
    }));
    
    return newMessage;
  };

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;
    
    // Add user message
    addMessage('user', content);
    
    // Set loading state
    setChatState((prev) => ({ ...prev, isLoading: true, error: null }));
    
    try {
      if (chatState.modifyingTweet && chatState.lastTweet) {
        // Handle tweet modification
        const modifiedTweet = await modifyTweet(chatState.lastTweet, content);
        
        // Add assistant message with modified tweet
        addMessage('assistant', modifiedTweet);
        
        // Update last tweet and reset modifying state
        setChatState((prev) => ({
          ...prev,
          lastTweet: modifiedTweet,
          modifyingTweet: false
        }));
      } else {
        // Format messages for API
        const apiMessages = chatState.messages
          .concat({ id: '', role: 'user', content })
          .map(({ role, content }) => ({ role, content }));
        
        // Generate response
        const response = await generateTweet(apiMessages);
        
        // Add assistant message
        addMessage('assistant', response);
        
        // Update last tweet
        setChatState((prev) => ({
          ...prev,
          lastTweet: response
        }));
      }
    } catch (error) {
      setChatState((prev) => ({
        ...prev,
        error: error instanceof Error ? error.message : 'An unknown error occurred',
      }));
    } finally {
      setChatState((prev) => ({ ...prev, isLoading: false }));
      setInputValue('');
    }
  };

  const handleEnhancePrompt = async (content: string) => {
    if (!content.trim()) return;
    
    // Add user message
    addMessage('user', content);
    
    // Set loading state
    setChatState((prev) => ({ ...prev, isLoading: true, error: null }));
    
    try {
      // Enhance the prompt
      const enhancedPrompt = await enhancePrompt(content);
      
      // Add enhanced prompt as assistant message
      addMessage('assistant', `I've enhanced your prompt:\n\n${enhancedPrompt}\n\nNow I'll generate a tweet based on this enhanced description.`);
      
      // Generate tweet based on enhanced prompt
      const response = await generateTweet([{ role: 'user', content: enhancedPrompt }]);
      
      // Add tweet as assistant message
      addMessage('assistant', response);
      
      // Update last tweet
      setChatState((prev) => ({
        ...prev,
        lastTweet: response
      }));
    } catch (error) {
      setChatState((prev) => ({
        ...prev,
        error: error instanceof Error ? error.message : 'An unknown error occurred',
      }));
    } finally {
      setChatState((prev) => ({ ...prev, isLoading: false }));
      setInputValue('');
    }
  };

  const handleTweet = (tweet: string) => {
    openTwitterIntent(tweet);
  };

  const handleModify = (tweet: string, template: string) => {
    setChatState((prev) => ({
      ...prev,
      modifyingTweet: true,
      lastTweet: tweet
    }));
    
    // Auto-populate the input with the template
    setInputValue(template);
    
    // Focus the input
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const handleNewTweet = () => {
    setChatState((prev) => ({
      ...prev,
      modifyingTweet: false,
      lastTweet: null
    }));
    setInputValue('');
  };

  const handleExpandTweet = async (tweet: string) => {
    // Set loading state
    setChatState((prev) => ({ ...prev, isLoading: true, error: null }));
    
    try {
      // Expand the tweet
      const expandedContent = await expandTweet(tweet);
      
      // Add expanded content as assistant message
      addMessage('assistant', expandedContent);
    } catch (error) {
      setChatState((prev) => ({
        ...prev,
        error: error instanceof Error ? error.message : 'An unknown error occurred',
      }));
    } finally {
      setChatState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const handleSelectTopic = (topic: string) => {
    setInputValue(topic);
    setShowSidebar(false); // Close sidebar on mobile when a topic is selected
    // Focus the input
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 font-nunito">
      <ChatHeader />
      <div className="flex-1 overflow-hidden flex flex-col md:flex-row relative">
        <div className="md:w-3/4 flex-1 flex flex-col overflow-hidden">
          <ChatMessages 
            messages={chatState.messages} 
            isLoading={chatState.isLoading}
            onTweet={handleTweet}
            onModify={handleModify}
            onNewTweet={handleNewTweet}
            onExpandTweet={handleExpandTweet}
          />
          <ChatInput 
            onSendMessage={handleSendMessage} 
            onEnhancePrompt={handleEnhancePrompt}
            isLoading={chatState.isLoading}
            modifyingTweet={chatState.modifyingTweet}
            placeholder={chatState.modifyingTweet ? "Enter instructions to modify the tweet..." : undefined}
            inputValue={inputValue}
            setInputValue={setInputValue}
            inputRef={inputRef}
          />
          {chatState.error && (
            <div className="p-2 bg-red-100 text-red-700 text-center">
              {chatState.error}
            </div>
          )}
          
          {/* Mobile Menu - positioned below input box and above footer */}
          <MobileMenu 
            onToggleSidebar={toggleSidebar} 
            onNewTweet={handleNewTweet}
          />
        </div>
        
        {/* Desktop sidebar */}
        <div className="md:w-1/4 p-4 overflow-y-auto hidden md:block">
          <TrendingTopics onSelectTopic={handleSelectTopic} />
        </div>
        
        {/* Mobile sidebar - shown/hidden based on state */}
        {showSidebar && (
          <div className="absolute inset-0 bg-white z-10 md:hidden overflow-y-auto">
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Trending Topics</h2>
                <button 
                  onClick={toggleSidebar}
                  className="p-2 rounded-full hover:bg-gray-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <TrendingTopics onSelectTopic={handleSelectTopic} />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
