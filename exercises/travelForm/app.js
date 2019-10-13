
const runAll = document.passengerForm

runAll.addEventListener("submit", function(e){
    e.preventDefault()
    const firName = runAll.firstname.value   
    const lastName = runAll.lastname.value
    const yearsOld = runAll.age.value
    const genderOp = runAll.gender.value
    const destenation1 = runAll.flyto.value
    const foodChoice = runAll.foodAccommodations
    const foodChoiceArr = []
    for(let i = 0; i < foodChoice.length; i++){
        if(foodChoice[i].checked){
            foodChoiceArr.push(foodChoice[i].value)
        }
    }
    alert(
        `
        First Name: ${firName}
        Last Name: ${lastName}
        Age: ${yearsOld}
        Gender: ${genderOp}
        Location: ${destenation1}
        Dietary restrictions: ${foodChoiceArr}
        `
    )    
    
})
