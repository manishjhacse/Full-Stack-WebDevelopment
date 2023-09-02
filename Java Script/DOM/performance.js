// const t1=performance.now()
// for(let i=0;i<100;i++)
// {
//     let newElement=document.createElement("p");
//     newElement.innerText="para" +i;
//     document.body.appendChild(newElement);
// }
// const t2=performance.now()
// console.log(t2-t1+' ms')
//optimise a bit
// const t3=performance.now();
// let myDiv=document.createElement("div")
// for(let i=0;i<100;i++){
//     let newElement=document.createElement("p")
//     newElement.innerText="para "+i;
//     myDiv.appendChild(newElement)   
// }
// document.body.appendChild(myDiv)
// const t4=performance.now();
// console.log(t4-t3+' ms')


//oprtimizinf by fragment
// const t5=performance.now();
// const fragment=document.createDocumentFragment();
// for(let i=0;i<100;i++)
// {
//     let newElement=document.createElement("p");
//     newElement.innerText="para "+i;
//     fragment.appendChild(newElement)
// }
// document.body.appendChild(fragment);
// const t6=performance.now();
// console.log(t6-t5+' ms')

// setTimeout(() => {
//     console.log("hello")
// }, 5000)
//this will execute the function after 5000ms,5000ms is not the exact time,it is the minimum time after which the function will start its execution
