const box1=document.getElementById("box1");
box1.addEventListener("click",()=>{
    box1.style.backgroundColor="red"
})
box1.addEventListener("mouseover",()=>{
    box1.style.backgroundColor="blue"
})

const box3=document.getElementById("box3")
box3.addEventListener("click",()=>{
    box3.innerHTML="you clicked here"
})