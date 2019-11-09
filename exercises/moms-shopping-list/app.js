





function run(e){
    e.preventDefault()
    let getMylist = document.getElementById("myUnOder")
    let create = document.createElement("p")
    create.style.textDecoration = "underline"
    let newButt = document.createElement("button")
    newButt.style.height = "20px"
    newButt.style.width = "20px"
    
    let text = create.textContent = myform.myinput.value
    console.log(text)
    myUnOder.append(create, newButt)

    
  
}



let buttGraber = document.getElementById("button")
buttGraber.addEventListener("click",run)





