
let container = document.getElementById("container")
container.style.display = "grid"
container.style.gridTemplateColumns = "repeat(3, 1fr)"
container.style.gridTemplateRows = "50px 50px 50px"

var getterDone = document.getElementById("getthis")
getterDone.textContent = "Plase help me!!!!!!~!"

var myClasses = document.getElementsByClassName("mainContent")
myClasses[0].textContent = "Yabababadoo"

console.log(myClasses)

let oneId = document.querySelector("#one")
oneId.textContent = "What up little homie"
oneId.style.display = "grid"
oneId.style.color = "red"
oneId.style.fontSize = "50px"

function changeBody(){
    document.body.style.backgroundColor = "blue"
}

let button = document.getElementById("button")
button.addEventListener("click",changeBody)


// let spanOne = document.getElementsByClassName("two")
// #one{
//      color:red;
//      font-size: 20px;
//      display:grid;
    
// }