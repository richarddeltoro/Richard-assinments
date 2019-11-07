
function runColor1(){
    getID.style.color = "red"
}

function runColor2(){
    getID.style.color = "blue"
}


let getID = document.getElementById("newH6")
setTimeout(runColor1,1000)
setTimeout(runColor2,2000)


