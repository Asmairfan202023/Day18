"use strict";
// Making Flexible Object Keys: Learn how to setup a list where you can change the name of each section based on what you need at that moment. Like adjusting label based on user choices.
//  A way to make a flexible list function
function creatObjectwithDynamickey(key, value) {
    let dynamicObject = {};
    // setting up a section in the list witha changeable name
    dynamicObject = value;
    return dynamicObject;
}
// using the flexible list setup for a user's preference
let userpreference = creatObjectwithDynamickey("theme", "dark");
console.log(userpreference);
// Showing the user's key
console.log();
