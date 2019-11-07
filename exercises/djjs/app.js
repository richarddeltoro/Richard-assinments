

function runbody(){
    document.body.style.backgroundColor = "blue";
    box1.textContent = "DoubleClick";
    box1.style.fontSize = "auto";
}



let box1 = document.getElementById("box1")
box1.addEventListener("click",runbody)
box1.addEventListener("dblclick",buttColor)
box1.addEventListener("mouseover",mouseover)
box1.addEventListener("mouseout",mouseOut)

function buttColor(){
    document.body.style.backgroundColor = "red";
    box1.textContent = "MouseOver"
} 

function mouseover(){
    document.body.style.backgroundColor = "url('../pics/lion.jpg')";
    box1.style.backgroundImage = "url('../pics/lion.jpg')";

}
function mouseOut(){
    document.body.style.backgroundColor = "orange";
}
