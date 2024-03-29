// Pulling Aparta Nested Object:Imagine you have a list inside another list that shows that a computer programmer knows, like coding languages, tools and software frameworks. Find a way to get three specific skills from this list and show them
// Alist showing a programmer's skills in detail
let programmerSkills = {
    languages:["Javascript", "Typescript", "Python"],
    frameWorks:["react", "angular","Vue"],
    tools:["Git","Webpack", "Docker"]
};
// Getting specific skillsfrom the list
let {languages, frameWorks, tools} = programmerSkills;
// Showing a skill from each category
console.log(`languages:${languages[0]}, frameWorks: ${frameWorks[0]}, tools:${tools[0]}`);
