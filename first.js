console.log("hello")
let num = 2+2
console.log(num)
num = 2
console.log(num)
let user = "peak's data"
console.log(user)

let radius = 5
const pi = 3.14
let area
area = pi*radius*radius
console.log(area)
console.log(pi)

//numbers
let no = 786254231517.467
console.log(no)
let hex_no = 0xff
console.log(hex_no)
let num1 = 1.78e12
console.log(num1)
let num_with_ = 10_00_00_000
console.log(num_with_)
let num2_inf = 5/0
console.log(num2_inf)
let num2_neg_inf = -5/0
console.log(num2_neg_inf)
console.log(Number.MAX_VALUE * 10)
let bigint_display_without_e = 982982887287827382739289828928n
console.log(bigint_display_without_e)
//console.log(num_large_display_without_e+1) -- error on operation with bigint

//strings
let userName = "peakai"
console.log(userName)
let first = "anudita"
let last = "sharma"
let name = first+" " +last
console.log(name)
let withQuotes = 'software engineer "QA"' 
let withForwardSlash = "engineer \"QA\""
console.log(withQuotes + " " + withForwardSlash)
let tab_line = "anudita\tsharma\nsoftware\t engineer"
console.log(tab_line)

//boolean
let condition = 4>5
console.log (condition)
console.log(typeof condition)

//bug
let bug =null
console.log(typeof bug) //object type

//undefined
let ud 
console.log(ud)


//type cohersion 

//array
let array = new Array();
let arr = [];
console.log(arr,array);
arr = [2,34,4];
array = [8,4,2];
console.log(arr,array);
console.log(arr.length);
array.push(87);
console.log(array);
console.log(array[0]);
let names = ['Ang', 'peak', 'ai']
names[2] = 'new';
console.log(names)
let datas = ['peak', 5 , {tech: 'JS'}, function(){console.log("Hello");}]
console.log(datas);
datas[3](); //calling a function in an array

//array methods
let fix = [2,3,4,5,5,4,6,7]
fix.push(6); //add value at last
console.log(fix)
fix.pop(); // last in, first out -- pop should remove last value of the array
console.log(fix);
fix.shift(); //deletes 1st element in array
console.log(fix);
fix.unshift(9); //adds element in start of array
console.log(fix);
fix.splice(4); //remove all elements after 2 index
console.log(fix);
console.log(fix.splice(1,2)); //from index 1 keep two element
fix.splice(1,1,11,18) // index , no of values to be removed, add value, add value
console.log(fix);

//for loop for array
let arrnum = [];
arrnum[0] = 0;
arrnum[32] = 32;
for (let n of arrnum){ // using 'of' prints all values including undefined
    console.log(n);
}
for (let n in arrnum){ // using 'in' prints assigned values only
    console.log(n);
}

//destructuring array
let qe = [];
qe.push(1,6,5);
qe.unshift(7);
console.log(qe);
let [a,b,c,d] = qe;
console.log(`${a} and ${b} and ${c} and ${d}`)

//swap using array destructuring
let e=9;
let f=2;
console.log(`e= ${e} , f= ${f}`)
// [e,f] = [f,e]
// console.log(`e= ${e} , f= ${f}`)

let text = "here is peak".split(' ');
let [g,h, j] = text;
console.log(g+h+j);

let laststring = "keep calm and keep working";
let [i,o,, ...p] = laststring;
console.log(i);

//for each
