//initialize , condition, increment

//do while
let i = 1;
do{
    console.log("do while " + i);
    i++;
} while(i<1)

//while --- 
i=1;
while(i<=5){
    console.log("while loop " + i);
    i++;
}

//---- use for loop when you know start and the end
//for loop
for (i=0;i<2;i++){
    console.log("for loop" + i)
}
for (;i<5;i++){
    console.log("for loop without intialisation" + i)
}

//for each
let number = [1,2,3,4,4,5];
number.filter(n => n%2 === 0)
.forEach(() => {
    console.log(n);
});
console.log(n);