///body//
const newbod = document.getElementsByTagName("body")
    console.log(newbod)
const newstlye = newbod[0].style.backgroundColor = "rgb(95, 90, 183)"
const bodyMar = newbod[0].style.margin = "30px 80px 30px 80px"
//header //
const newHead = document.getElementById("header")
newHead.textContent="welcome to this blog"
const styleHead1 = newHead.style.marginLeft = "324px"
const stylehead2 = newHead.style.fontSize = " 94px"


///main div
const grabDiv = document.getElementById("main")
const styleMain = grabDiv.style.backgroundColor = "#a098a5"
const styleMain2 = grabDiv.style.borderRadius = "20px"

///event listiner for button//
let getButt = document.getElementById("clear-button")
let addListiner = getButt.addEventListener("click", run)

function run(){
 ////left messege
  let getMess = document.getElementsByClassName("message")
    for(let i = 0; i < getMess.length; i++){
        getMess[i].style.display = "none" 
    }
}

//left message
const newMess = document.getElementsByClassName("left")
const text = newMess[0].textContent = "Hey whats up with you "
const text1 = newMess[1].textContent = "sup"

///right message
const getRightMess = document.getElementsByClassName("right")
const rightText = getRightMess[0].innerHTML ="not much just studing modgule 1 and you?"

const getDropDownId = document.getElementById("theme-drop-down")
const addDropDownLister = getDropDownId.addEventListener("click", run2)



function run2(){
    const getMessges = document.getElementsByClassName("messages")
    const styleAllMess = getMessges[1].style.backgroundColor = "red" 
}