// ARITHEMATIC OPERATORS

let num1 = 7
let num2 = 3
let result = num1 % num2 //remainder 
console.log(result)

let a = true; let b =true;
console.log(a+b)

num1 += 2 // num = num + 2
console.log(num1)
num1++
console.log(num1)
num1--
num1 -= 2
console.log(num1)

z = 3 ; y = z++;
console.log(z, y) //post increment -- first assign then increment


let o = 8; let x = ++o;  //pre increment -- first increment then assign
console.log(o, x)

let value = 4
let r = Math.pow(2,3)
console.log("power: " + r)
r = 2 ** 2 // ** is for power
console.log("power with ** : " + r)

// RELATIONAL OPERATORS

let d1 = 7<8

console.log(6>4)
console.log(d1)
d1 = 6<=6
console.log(d1)
let d2 = 'book' < 'text' //compares ASCII value of each char - 
console.log(d2)
d1 = "2" < 1
console.log(d1)
d1 = 2 == "2"
console.log('=='+d1)
d1 = 2 === "2"
console.log('==='+d1)


//logical operators
let h=4, t=6, k =8;
let f = h>t & t<k; //bitwise
console.log(f)
f = h>t && t<k;
console.log(f)
f = h>t || t<k;
console.log(f)
console.log(!f)

//ternary operator
let r1 = 6%2 == 0 ? "Even" : "Odd"
console.log(r1)
