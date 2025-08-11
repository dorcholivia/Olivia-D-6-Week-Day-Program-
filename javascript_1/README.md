# Smart-Buddy AI Chatbot

Smart-Buddy is a personal digital friend and life coach web application with OpenRouter API integration for intelligent conversations and support.

## Features

- **AI-Powered Chatbot**: Uses OpenRouter API for intelligent, supportive conversations
- **Life Coaching**: Provides motivation, goal-setting help, and emotional support
- **Specialized Support**: Particularly helpful for track/running improvement, stress management, and academic success
- **Friendly Interface**: Clean, responsive design with real-time chat functionality

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Your OpenRouter API Key

1. Get your OpenRouter API key from [OpenRouter](https://openrouter.ai/keys)
2. Open the `.env` file in the project root
3. Replace `your_openrouter_api_key_here` with your actual API key:

```
OPENROUTER_API_KEY=your_actual_api_key_here
```

### 3. Start the Server

```bash
npm start
```

Or for development with auto-restart:

```bash
npm run dev
```

### 4. Open Your Browser

Navigate to `http://localhost:3000` to start chatting with Smart-Buddy!

## How It Works

1. **User Input**: Users type their feelings, goals, or questions in the chat interface
2. **AI Processing**: The message is sent to OpenRouter API with Smart-Buddy's personality prompt
3. **Smart Response**: The selected AI model (Meta's Llama 3 70B) generates a supportive, helpful response as Smart-Buddy

## Model Information

This application uses Meta's Llama 3 70B Instruct model through OpenRouter. Llama 3 is a powerful language model with 70 billion parameters that provides high-quality responses.
4. **Real-time Display**: The response appears instantly in the chat interface

## Smart-Buddy's Personality

Smart-Buddy is designed to be:
- Warm, friendly, and empathetic
- Motivational and uplifting
- Practical and helpful
- Like talking to a trusted friend
- Always supportive, never judgmental

## Project Structure

```
├── server.js          # Express server with Gemini API integration
├── index.html         # Main homepage with chat interface
├── script.js          # Frontend JavaScript for chat functionality
├── about.html         # About page
├── contact.html       # Contact page with form
├── style.css          # Main stylesheet
├── package.json       # Node.js dependencies
├── .env              # Environment variables (API key)
└── README.md         # This file
```

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **AI**: Google Gemini API
- **Environment**: dotenv for configuration

## Author

Created by Olivia Dorch as part of a 6-week development program.

## License

MIT License
