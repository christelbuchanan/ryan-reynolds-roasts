// Mock API service for Ryan Reynolds Tweet Generator

// Simulates API call to generate a tweet
export const generateTweet = async (messages: { role: string; content: string }[]): Promise<string> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Get the last user message
  const lastUserMessage = messages.filter(m => m.role === 'user').pop()?.content || '';
  
  // Ryan Reynolds tweet styles and phrases
  const ryanPhrases = [
    "I'm only doing this because I lost a bet.",
    "My wife is definitely going to roll her eyes at this one.",
    "Hugh Jackman would probably unfollow me for this.",
    "This is why they don't let me run my own social media.",
    "Aviation Gin: for when you need to tolerate your own tweets.",
    "Dad joke loading... 100%",
    "I apologize in advance. Or after. Whichever makes this tweet seem better.",
    "My social media manager is definitely getting fired for this one.",
    "This is why Canadians have a reputation for apologizing.",
    "Blake just read this over my shoulder and walked away silently. Not a good sign."
  ];
  
  const randomPhrase = ryanPhrases[Math.floor(Math.random() * ryanPhrases.length)];
  
  // Generate a mock response based on the prompt
  if (lastUserMessage.toLowerCase().includes('gin') || lastUserMessage.toLowerCase().includes('aviation')) {
    return "Just a reminder that Aviation Gin is the smoothest gin on the planet. And yes, I'm contractually obligated to say that even in my tweets. #AviationOwner";
  }
  
  if (lastUserMessage.toLowerCase().includes('hugh') || lastUserMessage.toLowerCase().includes('jackman')) {
    return "Breaking: Hugh Jackman just called to say he wants to be in Deadpool 4, 5, AND 6. Also, he's a terrible person. And his coffee is just hot brown water. @RealHughJackman";
  }
  
  if (lastUserMessage.toLowerCase().includes('deadpool')) {
    return "Spent 5 hours in the Deadpool suit today. Now I know what a Hot Pocket feels like. The things I do for you people. #Deadpool #SweatingInPlaces";
  }
  
  if (lastUserMessage.toLowerCase().includes('dad') || lastUserMessage.toLowerCase().includes('father')) {
    return "My daughter asked why the sky is blue. I told her it's because God needed something to match his eyes. She said 'that's wrong' and walked away. Parenting: nailed it.";
  }
  
  if (lastUserMessage.toLowerCase().includes('blake') || lastUserMessage.toLowerCase().includes('wife')) {
    return "Just spent 20 minutes looking for my phone while on a call with @blakelively. She didn't say anything until I hung up. This is why she's the smart one in the relationship.";
  }
  
  if (lastUserMessage.toLowerCase().includes('canada')) {
    return "Fun fact about Canada: We don't actually say 'aboot'. We say 'about' while being excessively polite. Sorry for the confusion. #ProudCanadian";
  }
  
  // Default response with some Ryan Reynolds humor
  return `${randomPhrase} But here goes nothing... ${lastUserMessage.charAt(0).toUpperCase() + lastUserMessage.slice(1)}`;
};

// Simulates API call to enhance a prompt
export const enhancePrompt = async (prompt: string): Promise<string> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Add Ryan Reynolds style elements to the prompt
  return `${prompt}, but make it sound like Ryan Reynolds with his signature self-deprecating humor, possibly with a reference to Aviation Gin, Deadpool, or a playful jab at Hugh Jackman. Add a touch of sarcasm and wit that Ryan is known for.`;
};

// Simulates API call to modify a tweet
export const modifyTweet = async (tweet: string, instruction: string): Promise<string> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1200));
  
  // Modify based on instruction
  if (instruction.toLowerCase().includes('deadpool')) {
    return `${tweet} And yes, Deadpool would definitely say this too, but with more swearing and fourth-wall breaking. #ChimichongasForEveryone`;
  }
  
  if (instruction.toLowerCase().includes('hugh jackman') || instruction.toLowerCase().includes('feud')) {
    return `${tweet} P.S. Hugh Jackman (@RealHughJackman) tried to steal this tweet but his tiny Australian fingers couldn't reach all the keys. #SorryNotSorry`;
  }
  
  if (instruction.toLowerCase().includes('gin') || instruction.toLowerCase().includes('aviation')) {
    return `${tweet} *sips Aviation Gin* Ah, that's smooth. Unlike this tweet, which is rough around the edges. Just like me. #AviationGin`;
  }
  
  if (instruction.toLowerCase().includes('canadian')) {
    return `${tweet} *says in Canadian* Sorry for being so forward with this tweet. Would you like some maple syrup to make it go down easier? #CanadianProblems`;
  }
  
  if (instruction.toLowerCase().includes('dad joke')) {
    return `${tweet} Dad joke incoming: I told my kids I was tweeting and they said "Dad, nobody says tweeting anymore." I said "Well, I just did. It's called parenting." They walked away. I won.`;
  }
  
  // Default modification
  return `${tweet} (But with more Ryan Reynolds charm, which is basically just me typing while making a smirky face at my phone)`;
};

// Simulates opening Twitter intent
export const openTwitterIntent = (tweet: string): void => {
  const encodedTweet = encodeURIComponent(tweet);
  window.open(`https://twitter.com/intent/tweet?text=${encodedTweet}`, '_blank');
};

// Simulates API call to expand a tweet into a longer form
export const expandTweet = async (tweet: string): Promise<string> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1800));
  
  // Expand the tweet into a longer form content
  return `
Here's how this tweet would look as a Ryan Reynolds monologue:

"${tweet}"

[Ryan looks directly into camera with his signature smirk]

You know, I was sitting in my home office - which is really just a corner of my bedroom where Blake lets me pretend I'm important - and I thought, "This is exactly the kind of thing people expect me to say." And who am I to disappoint?

[Takes a sip from an Aviation Gin bottle]

The thing about social media is that it's basically just a place where I can share thoughts that my wife has already rejected in person. It's like having millions of people who haven't yet learned to roll their eyes at me.

[Pauses dramatically]

Anyway, that's my expanded thought on this. And yes, Hugh Jackman would probably say he could have said it better. He'd be wrong. But he'd say it.

#RyanReynoldsThoughts #SorryNotSorry
`;
};
