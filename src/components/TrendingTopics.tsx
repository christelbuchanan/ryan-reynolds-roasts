import React from 'react';

interface TrendingTopicsProps {
  onSelectTopic: (topic: string) => void;
}

const TrendingTopics: React.FC<TrendingTopicsProps> = ({ onSelectTopic }) => {
  const topics = [
    "Write a tweet about Aviation Gin",
    "Create a funny tweet about being a dad",
    "Write a tweet teasing Hugh Jackman",
    "Tweet about your experience filming Deadpool",
    "Write a self-deprecating tweet about your acting",
    "Create a tweet promoting a fictional new movie",
    "Write a tweet about Canada",
    "Tweet about your love for Blake Lively",
    "Write a tweet about your experience as a business owner",
    "Create a tweet reacting to a superhero movie",
    "Write a tweet about your childhood",
    "Tweet a dad joke",
    "Write a tweet about your fitness routine",
    "Create a tweet about Mint Mobile",
    "Write a tweet about a charity you support"
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h2 className="text-lg font-bold mb-4">Tweet Ideas</h2>
      <div className="space-y-2">
        {topics.map((topic, index) => (
          <button
            key={index}
            onClick={() => onSelectTopic(topic)}
            className="w-full text-left p-3 bg-gray-50 hover:bg-red-50 rounded-md transition-colors text-sm"
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TrendingTopics;
