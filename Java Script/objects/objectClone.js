let a={
    val_1:10,
    val_2:12,
    val_3:15
}
let b={};
for(let key in a)
{
    b[key]=a[key];
}
console.log(a)
console.log(b)

let src={
    val_1:1,
    val_2:2,
    val_3:3,
    val_4:4
}
let dest=Object.assign({},src);
console.log(src)
console.log(dest)


let dest1={
    ...src
}
console.log(dest1)