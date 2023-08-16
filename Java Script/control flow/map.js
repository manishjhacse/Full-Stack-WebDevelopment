let arr=[56,23,1,2,21];
let a=arr.map((value)=>{
    console.log(value);
    return value+2;
})
console.log(a);

let b=arr.map((value,index,array)=>{
    console.log(value,index,array);
    return value+value;
})
console.log(b);
