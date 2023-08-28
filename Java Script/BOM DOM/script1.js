const box1=document.getElementById("box1");
box1.innerHTML="<p>inner html change by js</p>"

const box3=document.getElementById("box3");
box3.style.backgroundColor="blue"

const box4=document.getElementById("box4");
box4.classList.add("round-border")

// box3.classList.remove("box")
// box3.classList.toggle("round-border")
const newPara=document.createElement("p")
newPara.innerText="This is a para created using js"
newPara.classList.add("box")
const container=document.getElementById("container");
container.appendChild(newPara)