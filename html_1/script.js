console.log("Successfully connected with javascript")
alert("Welcome to your A.I. friend")

let age = 16;
const birthyear = 2009;
console.log("My age is ", age)

const THEME = {
    background: "#f0f8ff",
    primary: "rgb (47, 4, 219)",
    accent: "Libertinus Sans, sans-serif",
};

let userName = "";            // e.g., "Olivia"
let userMood = "";             // e.g., "happy", "sad", "neutral"
let focusArea = "";           // e.g.,  "e.g., "discipline", "stress reli"
let journalEntries = [];      // array of {date, text}
let lastCheckIn = null;       // timestamp or ISO string

let growthPlan = {
    area: "",                 // same as focusArea
    dayTasks: ["", "", ""],   // 3-day mini plan
    currentDay: 1,            // progress tracker (1-3)
    completed: false,
};

// Gemini API Chatbot Integration
async function handleUserInput() {
    const input = document.getElementById("userInput").value.trim();
    const responseDiv = document.getElementById("aiResponse");
    
    if (!input) {
        responseDiv.innerText = "Please tell me how you're feeling or what you'd like to improve!";
        responseDiv.style.display = "block";
        responseDiv.style.color = "#666";
        return;
    }
    
    // Show loading message
    responseDiv.innerText = "Smart-Buddy is thinking... 🤔";
    responseDiv.style.display = "block";
    responseDiv.style.color = "#666";
    
    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: input })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            responseDiv.innerText = data.response;
            responseDiv.style.color = "#333";
        } else {
            responseDiv.innerText = data.error || "Sorry, I'm having trouble right now. Please try again!";
            responseDiv.style.color = "#d32f2f";
        }
        
    } catch (error) {
        console.error('Error:', error);
        responseDiv.innerText = "Sorry, I'm having trouble connecting right now. Please try again in a moment!";
        responseDiv.style.color = "#d32f2f";
    }
    
    // Clear the input field
    document.getElementById("userInput").value = "";
}

// Add Enter key support for better UX
document.addEventListener('DOMContentLoaded', function() {
    const userInput = document.getElementById("userInput");
    if (userInput) {
        userInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleUserInput();
            }
        });
    }
});
