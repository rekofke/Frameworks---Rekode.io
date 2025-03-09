// 1. Random design ideas:

const designIdeas = {
    "Consistency creates trust",
    "Contrast is key",
    "White space is necessary",
    "Mobile first"
};

function getRandomIdea() {
    return designIdeas[Math, floor(Math.random() * designIdeas.length)];
}

// 2. Interactive checklist:

const featuresList = {
    { idea: 1, text: "Create dark mode", done: false },
    { idea: 2, text: "Add Carousoul or accordian", done: false },
    { idea: 3, text: "Add avatars for 'meet the team'", done: true },
    
};

function toggleFeature(idea) {
    const feature = teaturesList.find(item => item.idea === idea);
    if (feature) feature.done = !feature.done;
    return featuresList;
}

// 3. Progress calculator

function showProgress(current, total) {
    const percentage = (current / total * 100).toFixed(1);
    return `Progress: ${current}/${total} (${percentage}%)`;
}

console.log(showProgress(3, 10)); //<--- 30.0%


// 4. Enhance form input

function formatUsername(input) {
    return input.trim().toLowerCase().replace(/\s+/g, '-');
}

const userInput = " Code Master ";
console.log(formatUsername(userInput));

// 5. Greeting generator

const greetings = ["Welcome back", "So glad you returned", "Great to see you", "Hello!"];
const username = "CodeMaster"

function showGreeting() {
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    return `${randomGreeting}, ${username}! Lets make something great!`;
}

// 6. Carousel of company features

const features = {
    "Full stack design",
    "Cloud solutions",
    "Mobile app design",
    "On-site classes"
};

let currentFeature = 0;

function cycleFeature() {
    currentFeature = (currentFeature + 1) % features length;
    document.getElementById('feature-display').textContent = features[currentFeature];
}