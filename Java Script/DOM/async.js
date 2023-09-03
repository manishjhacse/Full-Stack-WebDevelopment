// setTimeout(() => {
//     console.log("first")
// },0);

// function sync(){
//     console.log("two")
// }
// sync();

// console.log("three")

// let myPromise=new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("I am inside promise")
//     }, 3000);
//     // resolve("555")
//     reject(new Error("this is eroor"))
// })

// myPromise.then((value)=>{console.log(value)});
// myPromise.catch((error)=>{console.log("Error found")})
// myPromise.then((value)=>{console.log(value);},(error)=>{console.log("eroor found")})

// console.log("hello");

// let p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("insise Promise p1")
//     },2000)
//     resolve(true);
// })
// p3=p1.then(()=>{
//     let p2=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("inside promise p2")
//         },4000);
//         resolve("p2 is done")
//     })
//     return p2;
// })
// p3.then((value)=>{console.log(value)});



// async function abcd(){ //async function return promise
//     return 7;
// }
// console.log(abcd())

async function weather(){

let delhiWeather=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Delhi weather is hot")
    },5000)
});
let mumbaiWeather=new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("Mumbai weather is cold")
    },5000)
});

let delhi= await delhiWeather;
let mumbai= await mumbaiWeather;

return [delhi,mumbai];
}