
const fireFunk = document.getElementById("parentForm");


fireFunk.addEventListener("submit", function(e){
    e.preventDefault()

    const  priceCost = fireFunk.nodeValue;


  alert(`These are our competitive prices: ${priceCost}`)

})










