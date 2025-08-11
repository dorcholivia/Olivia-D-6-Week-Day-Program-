const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// OpenRouter API integration (using OpenAI compatible API)
const { OpenAI } = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: 'https://openrouter.ai/api/v1',
  defaultHeaders: {
    'HTTP-Referer': 'https://smart-buddy.com', // Replace with your actual site URL
    'X-Title': 'Smart-Buddy',
  },
});

// Smart-Buddy system prompt
const SMART_BUDDY_PROMPT = `You are Smart-Buddy, a caring, supportive, and encouraging AI friend and life coach. Your personality is:

- Warm, friendly, and empathetic
- Motivational and uplifting
- Practical and helpful
- Like talking to a trusted friend
- Always supportive, never judgmental

You help users with:
- Emotional support and encouragement
- Goal setting and motivation
- Study habits and academic success
- Fitness and health improvement (especially track/running)
- Stress management and mental wellness
- Building positive routines and habits

Keep responses conversational, supportive, and around 2-3 sentences. Always end with encouragement or a helpful suggestion. Use a friendly, caring tone like you're talking to a good friend.

If someone mentions feeling sad, stressed, or overwhelmed, be extra supportive and suggest practical coping strategies.`;

// API endpoint for chatbot
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Create a chat completion with OpenRouter using a free model
    const completion = await openai.chat.completions.create({
      model: 'meta-llama/llama-3-70b-instruct', // Using Llama model from OpenRouter
      messages: [
        { role: 'system', content: SMART_BUDDY_PROMPT },
        { role: 'user', content: message }
      ],
      temperature: 0.7,
      max_tokens: 1024,
    });
    
    const text = completion.choices[0].message.content;
    
    res.json({ response: text });
    
  } catch (error) {
    console.error('Error calling OpenRouter API:', error);
    res.status(500).json({ 
      error: 'Sorry, I\'m having trouble connecting right now. Please try again in a moment!' 
    });
  }
});

// Serve HTML files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Smart-Buddy server running on http://localhost:${PORT}`);
});
