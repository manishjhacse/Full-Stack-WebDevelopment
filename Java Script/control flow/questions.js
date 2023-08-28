// const prompt=require("prompt-sync")();
// problem1

let arr=[5,2,1,4,3,0];
console.log(arr);
let a=prompt("Enter a number ");
a=Number.parseInt(a);
arr.push(a);
console.log(arr);



// problem2

let arr2=[5,2,1,4,3,0];
console.log(arr2);
let a2=prompt("Enter a number ");
while(a2!=0)
{
    arr2.push(a2);
    a2=prompt("Enter a number ");

}
console.log(arr2);

//problem3


let arr3=[10,22,50,40,30,120,56];
let a3=arr3.filter((value)=>{
    return (value%10===0);
})
console.log(a3);

//problem 4

let arr4=[5,7,6,3,2];
let a4=arr4.map((value)=>{
    return value*value;
})
console.log(a4);

//problem 5

let arr5=[1,2,3,4,5];
let a5=arr5.reduce((x,y)=>{
    return x*y;
})
console.log(a5);