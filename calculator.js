"use strict";
const ps = require("prompt-sync"); //load the module - exports the function for prompt
const prompt = ps();
var num1, num2, op;
var result;
console.log("Press alphabet for performing a particular operation:");
console.log("\tA - Addition\n\tS - Subtraction\n\tM - Multiple\n\tD - Divide");

op =prompt("Enter your choice: ");
num1 = Number(prompt("Enter 1st number: "));
num2 = Number(prompt("Enter 2nd number: "));

switch(op){
    case 'A': result = num1+num2;
        break;
    case 'B': result = num1-num2;
        break;
    case 'M': result = num1*num2;
        break;
    case 'D': result = num1/num2;
        break;
}
console.log("Result:" + result);

//error handling - add