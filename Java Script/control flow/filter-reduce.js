let arr=[5,6,8,12,41,56,20,11,3];

let a=arr.filter((value)=>{
    return value>=8;
})
console.log(arr);
console.log(a);

////reduce
let b=arr.reduce((x,y)=>{
    return x+y;
})
console.log(b);