const grabForm1 = document.myForm1

grabForm1.addEventListener("submit", e => {
    event.preventDefault(e)

    const firstForm = (`${grabForm1.flightInfo.value}`)
    const secondForm = (`${grabForm1.firstName.value} ${grabForm1.lastName.value} Age of  ${grabForm1.age.value}`)
    const thirdForm = (`from ${grabForm1.SelectOP.value} to ${grabForm1.SelectOP2.value}`)
    const checkedItems = []

        for(let i = 0; i < grabForm1.food.length; i++){
            if(grabForm1.food[i].checked){
                checkedItems.push(grabForm1.food[i].value)
            }
        }
          
    alert(`Thank you,
     your flight is for ${firstForm}
    booked by ${secondForm}
    ${thirdForm} 
    & your food choice is ${checkedItems} 
    you flight has been booked with AIR BUS and please reamber to arrive at lest 1 hr early`)
})