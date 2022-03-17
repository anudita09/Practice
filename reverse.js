"use strict";
const ps = require("prompt-sync"); //load the module - exports the function for prompt
const prompt = ps();
let name = prompt("Enter a string: ");
let reverse = null;
for (let i=name.length-1; i>=0; i--){
    if (reverse == null)
        reverse = name[i];
    else 
        reverse = reverse + name[i];
}
console.log(reverse);