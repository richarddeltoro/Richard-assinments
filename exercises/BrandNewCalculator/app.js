
const form = document.myForm

form.addEventListener("submit", (e)=>{
    event.preventDefault()

    const add1 = form.add1.value
    const add2 = form.add2.value
    
    const h6 = document.createElement("h6")
    h6.textContent = `Your Answer is ${+add1 + +add2}`
    h6.style.backgroundColor = "rgb(6, 114, 32)"
    h6.style.margin = "-155px 187px 0px 144px"
    h6.style.borderRadius = "8px"
    h6.style.fontSize = "25px"

    document.getElementsByClassName("cal")[0].appendChild(h6)
})

const formSub = document.myFormSub

formSub.addEventListener("submit", (e)=>{
    event.preventDefault()

    const sub1 = formSub.sub1.value
    const sub2 = formSub.sub2.value

    const h7 = document.createElement("h6")
    h7.textContent = `Your Answer is ${+sub1 - +sub2}`
    document.getElementsByClassName("cal")[0].appendChild(h7)
    h7.style.backgroundColor = "rgb(6, 114, 32)"
    h7.style.borderRadius = "8px"
    h7.style.fontSize = "25px"
    h7.style.margin = "2px 114px 3px 111px"
})

const MuiltiForm = document.myformMulti

MuiltiForm.addEventListener("submit", (e) =>{
    event.preventDefault()

    const multi1 = MuiltiForm.multi1.value
    const multi2 = MuiltiForm.multi2.value

    const h8 = document.createElement("h6")
    h8.textContent = `your answer is ${+multi1 * +multi2}`
    document.getElementsByClassName("cal")[0].appendChild(h8)
    h8.style.backgroundColor = "rgb(6, 114, 32)"
    h8.style.borderRadius = "8px"
    h8.style.fontSize = "25px"
    h8.style.margin = "2px 114px -154px 111px"
    h8.style.position = "relative"
    h8.style.bottom = "137px"
})

const diviyForm = document.mydivform

diviyForm.addEventListener("submit", (e)=> {
    event.preventDefault()

    const dividNum1 = diviyForm.dividNum1.value
    const dividNum2 = diviyForm.dividNum2.value

    const h9 = document.createElement("h6")
    h9.textContent = `Your answer is ${+dividNum1 / +dividNum2}`
    document.getElementsByClassName("cal")[0].append(h9)
    h9.style.backgroundColor = "rgb(6, 114, 32)"
    h9.style.borderRadius = "8px"
    h9.style.fontSize = "25px"


})