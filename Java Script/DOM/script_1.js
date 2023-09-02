const para=document.querySelector("p")
let newPara=document.createElement("p");
newPara.textContent=" This is new para"
// para.appendChild(newPara);
const container=document.getElementsByClassName("container")
container.appendChild(newPara)