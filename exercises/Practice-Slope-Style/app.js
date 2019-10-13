// function collectAnimals(...array) {  
//   return array
// }
// console.log(collectAnimals('BIRD', 'PLATYPUS', 'EVAN', 'HI'))


function combineFruit(fruit, sweet, vegetable){
    return {
        fruits: [...fruit],
        treats: [...sweet],
        notGood:[...vegetable]
    }
}



 console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrit"]))            