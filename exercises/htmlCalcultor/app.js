
const add = document.add

add.addEventListener("submit", function(){
  event.preventDefault()
    const firstadd = add.addnum1.value
    const secAdd = add.addnum2.value

  document.getElementById("sum").textContent = `your sum is ${+firstadd + +secAdd}`
  
  
})

const sub = document.sub

sub.addEventListener("submit", function(){
  event.preventDefault()
    const firstsub = sub.subnum1.value
    const secsub = sub.subnum2.value

  document.getElementById("subtract").textContent = `your diference is ${+firstsub - +secsub}`
  
  
})

const div = document.div

div.addEventListener("submit", function(){
    event.preventDefault()
    const divFristnum = div.divnum1.value
    const divSecnum = div.divnum2.value

    document.getElementById("divide").textContent = `Your quotient is ${+divFristnum / +divSecnum}`
})

const multi = document.multi

multi.addEventListener("submit", function(){
    event.preventDefault()
    const multiFirst = multi.mulnum1.value
    const multiSec = multi.mulnum2.value

    document.getElementById("product").textContent = `Your product is ${+multiFirst * +multiSec}`
})