import React from 'react';
import { BarChart, ThumbsUp } from 'lucide-react';

interface TweetAnalyticsProps {
  tweet: string;
}

const TweetAnalytics: React.FC<TweetAnalyticsProps> = ({ tweet }) => {
  // Calculate tweet metrics
  const calculateMetrics = (tweetText: string) => {
    const wordCount = tweetText.split(/\s+/).filter(Boolean).length;
    const charCount = tweetText.length;
    const hashtagCount = (tweetText.match(/#\w+/g) || []).length;
    const emojiCount = (tweetText.match(/[\p{Emoji}]/gu) || []).length;
    
    // Calculate VancityReynolds authenticity score (0-100)
    let authenticityScore = 85; // Base score
    
    // Adjust based on length (Ryan's tweets are typically witty and can be longer)
    if (charCount > 240) authenticityScore -= 5;
    if (charCount < 80) authenticityScore -= 5;
    
    // Adjust based on hashtags (Ryan uses hashtags sparingly but effectively)
    if (hashtagCount > 2) authenticityScore -= (hashtagCount - 2) * 5;
    
    // Adjust based on emojis (Ryan uses emojis occasionally)
    if (emojiCount > 2) authenticityScore -= (emojiCount - 2) * 5;
    
    // Adjust based on exclamation marks (Ryan uses them for comedic effect)
    const exclamationCount = (tweetText.match(/!/g) || []).length;
    if (exclamationCount > 3) authenticityScore -= (exclamationCount - 3) * 3;
    
    // Check for Ryan's common phrases and references
    if (tweetText.toLowerCase().includes("aviation gin")) authenticityScore += 5;
    if (tweetText.toLowerCase().includes("deadpool")) authenticityScore += 5;
    if (tweetText.toLowerCase().includes("hugh jackman")) authenticityScore += 5;
    if (tweetText.toLowerCase().includes("blake")) authenticityScore += 3;
    if (tweetText.toLowerCase().includes("canada")) authenticityScore += 3;
    if (tweetText.toLowerCase().includes("sorry")) authenticityScore += 2;
    
    // Ensure score is within 0-100 range
    return {
      wordCount,
      charCount,
      hashtagCount,
      emojiCount,
      authenticityScore: Math.max(0, Math.min(100, authenticityScore))
    };
  };
  
  const metrics = calculateMetrics(tweet);
  
  // Determine engagement prediction
  const getEngagementPrediction = (score: number) => {
    if (score >= 90) return "Excellent";
    if (score >= 80) return "Very Good";
    if (score >= 70) return "Good";
    if (score >= 60) return "Average";
    return "Below Average";
  };
  
  const engagement = getEngagementPrediction(metrics.authenticityScore);
  
  // Color for authenticity score
  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 80) return "text-green-500";
    if (score >= 70) return "text-yellow-500";
    if (score >= 60) return "text-orange-500";
    return "text-red-500";
  };
  
  const scoreColor = getScoreColor(metrics.authenticityScore);
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mt-4">
      <h3 className="text-lg font-semibold text-binance-black flex items-center mb-3">
        <BarChart className="h-4 w-4 mr-2 text-red-500" />
        Tweet Analytics
      </h3>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <h4 className="text-sm font-medium text-gray-500 mb-1">Tweet Stats</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Characters:</span>
              <span className="text-sm font-medium">{metrics.charCount}/280</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Words:</span>
              <span className="text-sm font-medium">{metrics.wordCount}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Hashtags:</span>
              <span className="text-sm font-medium">{metrics.hashtagCount}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Emojis:</span>
              <span className="text-sm font-medium">{metrics.emojiCount}</span>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-gray-500 mb-1">@VancityReynolds Authenticity</h4>
          <div className="flex items-end mb-2">
            <span className={`text-3xl font-bold ${scoreColor}`}>{metrics.authenticityScore}</span>
            <span className="text-sm text-gray-500 ml-1">/100</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-red-500 h-2.5 rounded-full" 
              style={{ width: `${metrics.authenticityScore}%` }}
            ></div>
          </div>
          <div className="mt-3 flex items-center">
            <ThumbsUp className="h-4 w-4 mr-1 text-gray-600" />
            <span className="text-sm text-gray-600">Predicted engagement: </span>
            <span className="text-sm font-medium ml-1">{engagement}</span>
          </div>
        </div>
      </div>
      
      <div className="text-xs text-gray-500 italic">
        *Analytics based on @vancityreynolds typical tweeting patterns
      </div>
    </div>
  );
};

export default TweetAnalytics;
