

// 3,pepper,1,watermelon,orange,apple

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


let newVegetables = vegetables.pop()
    console.log(newVegetables)
let newFruit = fruit.shift() 
    console.log(newFruit)
let findCount = fruit.indexOf("orange")
    console.log(findCount)
let addFruit = fruit.push(1)
    console.log(addFruit)
let lenghtOfVeggie = vegetables.length
    console.log(lenghtOfVeggie)
let addToVeggies = vegetables.push(3)
    console.log(addToVeggies)
let food = vegetables.concat(fruit)
    console.log(food)
let changeNewArr = food.splice(2,2)
    console.log(changeNewArr)
let reverseArry = changeNewArr.reverse()
    reverseArry.push(1,"watermelon","orange","apple")
    reverseArry.push()
    console.log(reverseArry)
    
let stringy = changeNewArr.join(", ")
    console.log(stringy)
