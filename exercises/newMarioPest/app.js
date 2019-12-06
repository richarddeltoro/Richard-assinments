
const grabform = document.myForm

grabform.addEventListener("submit", function(e){
    e.preventDefault()
    const goombas = grabform.goombas.value *5;
    const bob = grabform.bobombs.value *7;
    const cheep = grabform.cheepcheeps.value *11;
    const enchilada = goombas + bob + cheep

    const grabber = document.getElementById("sum")
    const createNew = document.createElement("h6")
    createNew.textContent = `${enchilada} is your total`
    grabber.append(createNew)
   
   
    // alert(`You chaught ${enchilada} pest total looks like the princesses owes you some money`)

})

