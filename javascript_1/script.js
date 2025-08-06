console.log("Successfully connected with JavaScript");
alert("Welcome to your A.I. friend");

// User information
let age = 16;
if (age >= 16) {
  console.log('You are able to use Smart-Buddy');
}

// Using the OR logical operator
if (age < 16 || age > 30) {
  console.log("You are under 16 or over 30");
}

// Using the NOT logical operator
let isMinor = age < 16;

if (!isMinor) {
  console.log("You are not a minor");
} else {
  console.log("You are not able to use Smart-Buddy");
}

const birthyear = 2009;
console.log("My age is", age);

// Theme and messages
const THEME = {
  background: "#f0f8ff",
  primary: "rgb(47, 4, 219)",
  accent: "Libertinus Sans, sans-serif"
};

let userName = "";
let userMood = "";
let focusArea = "";
let journalEntries = [];
let lastCheckIn = null;

let growthPlan = {
  area: "",
  dayTasks: ["", "", ""],
  currentDay: 1,
  completed: false
};

let motivationalMessages = [
  "You've got this!",
  "Small steps win the race.",
  "It's okay to pause and breathe."
];

// Unified user profile
const userProfile = {
  user: {
    name: "",
    mood: "",
    focus: "",
    nickname: ""
  },
  growth: {
    plan: [],
    day: 1,
    completed: false
  },
  journal: [],
  preferences: {
    theme: "light",
    audio: false
  },
  lastCheckIn: null
};

// Respond based on mood
function respondToMood(mood) {
  if (["bad", "rough", "tired", "sad", "down"].some(word => mood.includes(word))) {
    return `I'm here for you. ${motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)]}`;
  } else {
    return "I'm glad you're feeling okay! Let's keep that up.";
  }
}

// Generate a growth plan
function generateGrowthPlan(goal) {
  let plan = [];

  if (goal.toLowerCase().includes("track")) {
    plan = [
      "Monday: Sprint drills and endurance runs",
      "Wednesday: Strength training (legs & core)",
      "Friday: Interval training and flexibility work"
    ];
  } else if (goal.toLowerCase().includes("study") || goal.toLowerCase().includes("school")) {
    plan = [
      "Monday: 1 hour reading + flashcards",
      "Wednesday: Practice tests and review",
      "Friday: Group study + summary notes"
    ];
  } else {
    plan = [
      "Set a SMART goal",
      "Break it into small weekly tasks",
      "Review your progress every Friday"
    ];
  }

  growthPlan.area = goal;
  growthPlan.dayTasks = plan;
  growthPlan.completed = false;

  return plan;
}

// MAIN FUNCTION: Handle User Input from the Website
function handleUserInput() {
  const input = document.getElementById("userInput").value.trim().toLowerCase();
  const responseDiv = document.getElementById("aiResponse");
  let reply = "";

  // Case 1: What Smart-Buddy can do
  if (
    input.includes("how can you help me") ||
    input.includes("what can you do for me") ||
    input.includes("can you help") ||
    input.includes("what can i do to help")
  ) {
    reply = `Hi ${userName || "there"}! I'm Smart-Buddy — your personal support system.
I can help you:
- Make personalized routines
- Stay motivated
- Manage school, fitness, and emotional well-being
- Offer advice and support like a trusted buddy

Want a custom routine? Visit the Home page to tell me what you want to improve and I’ll help you build one!`;
  } else if (
    input.includes("not feeling the best") ||
    input.includes("sad") ||
    input.includes("down") ||
    input.includes("depressed")
  ) {
    reply = "That is totally understandable and I'm sorry to hear that. If there's anything you're struggling with, reach out to a friend — they're more helpful than you think. But if you don't want to do that, talk to me — I will always listen. 💙";
  } else if (
    input.includes("track") ||
    input.includes("get better at track") ||
    input.includes("running")
  ) {
    reply = "Awesome! To improve at track, try interval training, strength workouts, rest days, and setting mini goals. I'm here to help build a plan!";
  } else if (
    input.includes("stress") ||
    input.includes("anxious") ||
    input.includes("overwhelmed")
  ) {
    reply = "You’re not alone. Try deep breathing, writing down your thoughts, or taking a short walk. I'm always here to support you.";
  } else {
    reply = "Thanks for sharing. I'm always here to support you — let me know if you need help, encouragement, or just someone to talk to!";
  }

  responseDiv.innerText = reply;

  let myHeading = document.getElementById("myHeading");
  myHeading.innerHTML = "I have put text on the page with JavaScript";

  document.getElementById("userInput").value = ""; // Clear input after response
}
