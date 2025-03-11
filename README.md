# Frameworks - Favorite Website Project

This is a project assignment for Coding Temple. The assignment is to re-create our favorite website or to create one of our own design.
I elected to create a model for my personal company website "Rekode Advanced Development." This site has a home, event, about, location and contact page all linked via navbar. It is created with HTML and styled using CSS and BootStrap, Additionally there is a seperate JavaScript (scripts.js) file for interactive design ideas that I may implement in the future.  I hope you enjoy it!

I used BootStrap to simplify the design process by implementing cards, forms and table forms

JavaScript Functions:
// 1. Random design ideas:

const designIdeas = {
    "Consistency creates trust",
    "Contrast is key",
    "White space is necessary",
    "Mobile first"
};

function getRandomIdea() {
    return designIdeas[Math.floor(Math.random() * designIdeas.length)];
}

// 2. Interactive checklist:

const featuresList = [
    { id: 1, text: "Create dark mode", done: false },
    { id: 2, text: "Add Carousel or accordion", done: false },
    { id: 3, text: "Add avatars for 'meet the team'", done: true },
    { id: 4, text: "Add interactive portfolio page", done: false }
];

function toggleFeature(id) {
    const feature = featuresList.find(item => item.id === id);
    if (feature) feature.done = !feature.done;
    return featuresList;
}

// 3. Progress calculator

function showProgress(current, total) {
    const percentage = (current / total * 100).toFixed(1);
    return `Progress: ${current}/${total} (${percentage}%)`;
}

console.log(showProgress(3, 10)); // Output: Progress: 30.0%


// 4. Enhance form input

function formatUsername(input) {
    return input.trim().toLowerCase().replace(/\s+/g, '-');
}

const userInput = " Code Master ";
console.log(formatUsername(userInput));

// 5. Greeting generator

const greetings = ["Welcome back", "So glad you returned", "Great to see you", "Hello!"];
const username = "CodeMaster";

function showGreeting() {
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    return `${randomGreeting}, ${username}! Let's make something great!`;
}

// 6. Carousel of company features

const features = [
    "Full stack design",
    "Cloud solutions",
    "Mobile app design",
    "On-site classes"
];

let currentFeature = 0;

function cycleFeature() {
    currentFeature = (currentFeature + 1) % features.length;
    document.getElementById('feature-display').textContent = features[currentFeature];
}
