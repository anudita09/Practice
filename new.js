//script is executed line by line
// execution is in two phases
    // Memory creation phase
    // execution phase



// for variable the memory is reserved as undefined at first
var n = 2;
// function - whole code is stored in memory

function square(n){
    var sq = n*n;
    // variable inside the function are stored as undefined
    return sq;
}

console.log(square(7));
//for function call in code 
//on function call - variable and arguments are allocated memory as undefined
//in code execution undefined is replaced by value

console.log(Boolean(0));
console.log(Boolean(2));
console.log(Boolean('tree'));
let x = String(4);
console.log(typeof x);
x = Number("123A")
console.log(typeof x, x);
x = parseInt("123A345") // get numbers only
console.log(typeof x, x);

