





function run(e){
    e.preventDefault()
    let getMylist = document.getElementById("myUnOder")
    let create = document.createElement("p")
    create.style.textDecoration = "underline"
    let newButt = document.createElement("button")
    newButt.addEventListener("click", runButt)
    newButt.style.height = "20px"
    newButt.style.width = "20px"
    newButt.textContent = "X"
    
    let text = create.textContent = myform.myinput.value
  
    myUnOder.append(create, newButt)

    function runButt(){
        // create.style.display = "none"
        // newButt.style.display = "none"
        getMylist.removeChild(create)
        getMylist.removeChild(newButt)
    }
  
}






let buttGraber = document.getElementById("button")
buttGraber.addEventListener("click",run)


// function runButt(e){
//     e.preventDefault()
//     style
// }


