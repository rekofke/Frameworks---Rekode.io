# Frameworks - Favorite Website Project

This is a project assignment for Coding Temple. The assignment is to re-create our favorite website or to create one of our own design.
I elected to create a model for my personal company website "Rekode Advanced Development." This site has a home, event, about, location and contact page all linked via navbar. It is created with HTML and styled using CSS and BootStrap, Additionally there is a seperate JavaScript (scripts.js) file for interactive design ideas that I may implement in the future.  I hope you enjoy it!

I used BootStrap to simplify the design process by implementing cards, forms and table forms

JavaScript Functions:

1. function getRandomIdea() {
    return designIdeas[Math, floor(Math.random() * designIdeas.length)];

   This function could be potentially used to generate random design ideas

3. function toggleFeature(idea) {
    const feature = teaturesList.find(item => item.idea === idea);
    if (feature) feature.done = !feature.done;
    return featuresList;

   This is an interactive to-do/checklist that I can use to help keep track of changes and features I would like to use

4. function showProgress(current, total) {
    const percentage = (current / total * 100).toFixed(1);
    return `Progress: ${current}/${total} (${percentage}%)`;

   This was a random idea and not sure exactly how functional it would be in practice but the idea is to
   track my completion progress

5. function cycleFeature() {
   currentFeature = (currentFeature + 1) % features length;
   document.getElementById('feature-display').textContent = features[currentFeature];
   
   This function could be used to create a rotating carosusel of main company features to display on the page
