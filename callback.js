
// setTimeout(function(){
//     console.log("timer");
// }, 500);
// //callback function is executed after 500 msec are over

// function x(y){
//     console.log("x");
//     y();
// }

// x(function y(){
//     console.log("y");
// })

x()
console.log(x);
//console.log(y); //gives referenceError because it is not declared so not loaded at start
function x(){
    console.log("x");
}
var x = 3;

//In javascript the variables are allocated undefined before the start of the program
// Function on start of the program whole block code is stored


