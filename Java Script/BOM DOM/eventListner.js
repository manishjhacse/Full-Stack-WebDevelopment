// const myDiv=document.createElement("div");
// function paraStatus(event){
//     // console.log("clicked on para")
//     console.log("click on para"+event.target.textContent)
// }
// myDiv.addEventListener("click",paraStatus)
// for(let i=0;i<100;i++)
// {
//     let para=document.createElement("p")
//     para.textContent="this is para "+i;
//     myDiv.appendChild(para);
// }
// document.body.appendChild(myDiv)

const element=document.querySelector("#wrapper");
element,addEventListener("click",(event)=>{
    // console.log("span clicked "+event.target.textContent);
    //this is also working when we click on para,to execute only on span:
    if(event.target.nodeName==="SPAN")
    {
        console.log("span clicked "+event.target.textContent);
    }
    
})