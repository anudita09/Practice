let n1 = 3, n2 = 7, n3 = 6;
if (n1>n2 && n2 >n3)
    console.log("n1 > n2");
else {
    console.log("n1<n2");
    console.log("End"); 
}
    
console.log("Bye..")

let num = 6;
let result;

let r1 = 6%2 == 0 ? "Even" : "Odd"
console.log(r1)

//switch
let day = "Monday";

switch(day){
    case 'Monday':
        console.log("7am");
        break;
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
        console.log("9am");
        break;
    default: console.log('not correct');
    
}

//template literal

console.log(`today is ${day}`);