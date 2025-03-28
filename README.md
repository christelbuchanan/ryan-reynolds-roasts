# CZ Tweet Generator

A web application that generates tweets in the style of Changpeng Zhao (CZ), the founder and former CEO of Binance.
- Built using [ChatAndBuild](https://www.chatandbuild.com/)

## Features

- **Tweet Generation**: Create authentic-sounding tweets in CZ's distinctive style
- **Prompt Enhancement**: Automatically enhance your basic prompts with more details
- **Tweet Modification**: Refine generated tweets with specific instructions
- **Tweet Expansion**: Expand concise tweets into longer, more detailed content
- **Twitter Integration**: Share generated tweets directly to Twitter
- **Trending Topics**: Browse popular crypto topics for inspiration
- **Mobile Friendly**: Fully responsive design for all devices

## Technology Stack

- **Frontend**: React with TypeScript
- **Styling**: Tailwind CSS
- **AI**: Anthropic Claude API for natural language processing
- **Build Tool**: Vite
- **Dependencies**: 
  - uuid for unique message IDs
  - lucide-react for icons

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Anthropic API key

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/cz-tweet-generator.git
   cd cz-tweet-generator
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with your Anthropic API key:
   ```
   VITE_ANTHROPIC_API_KEY=your_anthropic_api_key_here
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## Usage

1. **Generate a Tweet**:
   - Enter a description of what you want CZ to tweet about
   - Click "Generate Tweet" to create a tweet in CZ's style

2. **Enhance Your Prompt**:
   - Enter a basic idea for a tweet
   - Click "Enhance Prompt" to get a more detailed prompt
   - The system will automatically generate a tweet based on the enhanced prompt

3. **Modify a Tweet**:
   - After generating a tweet, click "Modify"
   - Enter specific instructions for modifications
   - Click "Modify Tweet" to get an updated version

4. **Expand a Tweet**:
   - After generating a tweet, click "Expand"
   - The system will create a longer, more detailed version of the tweet

5. **Share to Twitter**:
   - Click the "Tweet" button on any generated tweet
   - A Twitter compose window will open with the tweet text pre-filled

6. **Browse Trending Topics**:
   - On desktop, view trending topics in the sidebar
   - On mobile, click "Trending Topics" in the bottom menu
   - Click any topic to use it as a prompt

## Project Structure

```
cz-tweet-generator/
├── public/
│   └── bitcoin.svg
├── src/
│   ├── components/
│   │   ├── AnimatedHeart.tsx
│   │   ├── ChatHeader.tsx
│   │   ├── ChatInput.tsx
│   │   ├── ChatMessage.tsx
│   │   ├── ChatMessages.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── TrendingTopics.tsx
│   │   └── TweetAnalytics.tsx
│   ├── services/
│   │   └── api.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .env
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Key Components

- **App.tsx**: Main application component that manages state and coordinates other components
- **ChatInput.tsx**: Handles user input for generating and modifying tweets
- **ChatMessages.tsx**: Displays the conversation history and tweet actions
- **TrendingTopics.tsx**: Shows popular crypto topics for inspiration
- **api.ts**: Contains all API calls to the Anthropic Claude service

## CZ's Tweeting Style

The application is designed to mimic CZ's distinctive tweeting style, which includes:

- Short, concise tweets (usually under 280 characters)
- Simple, direct language with occasional grammatical quirks
- Calm, measured tone that conveys credibility
- Limited use of emojis (typically only at the end of tweets)
- Minimal use of exclamation marks and hashtags
- Occasional use of crypto community slang like "ser" and "buidling"
- References to "community" and phrases like "funds are SAFU"

## Development

### Building for Production

```
npm run build
```

This will create a production-ready build in the `dist` directory.

### Preview Production Build

```
npm run preview
```

## License

[MIT License](LICENSE)

## Acknowledgements

- [ChatAndBuild](https://www.chatandbuild.com/) Build Anything, Own Everything
- [Anthropic Claude](https://www.anthropic.com/) for the AI language model
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [Vite](https://vitejs.dev/) for the build tool
- [React](https://reactjs.org/) for the UI library
