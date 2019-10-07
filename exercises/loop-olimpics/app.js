// for(i = 9; i >= 0; i--){
//     console.log(i)
//    }

// var fruit = ["banana", "orange", "apple", "kiwi"]

// for(i = 0; i < fruit.length; i++){
//   console.log(fruit[i])
// }


// const numbers =[]
// for(i = 0; i < 10; i++){
//     numbers.push (i)
// }
// console.log(numbers)

// for(i = 0; i <= 100; i++ ){
//  console.log(i)
//  if(i % 2 === 0){
//     console.log(i)
//  } 
// }


// const array = []
// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// for(i = 0; i < fruit.length; i++){
//   if(i % 2 === 0 ){
//    array.push(fruit[i])
// }
// }

// console.log(array)

// var peopleArray = [
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//     {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     }
//   ]
  

//   for(i = 0; i < peopleArray.length; i++ ){
//       names.push(peopleArray[i].name)
//       occupations.push(peopleArray[i].occupation)  
//   }
//   console.log(names, occupations)



// var peopleArray = [
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//     {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     }
//   ]
// const names = []
// const occupations = []

// for(i = 0; i < peopleArray.length; i++){
//     if(i % 2 === 0){
//         names.push(peopleArray[i].name)
//     }else if(i % 2 !== 0){
//         occupations.push(peopleArray[i].occupation)   
//     }
// }
// console.log(names, occupations)

// [[0, 0, 0], 
// [0, 0, 0], 
// [0, 0, 0]]

// [[],[],[]]

// const arrAy = []
// for(i = 0; i < 3; i++){
//        arrAy.push([])
//     for(j = 0; j < 3; j++){
//         arrAy[i].push(i)
//     }
// } 
// console.log(arrAy)

const thisOne = []

for(i = 0; i < 3; i++){
      thisOne.push([])
    for (j = 0; j < 3; j++){
       thisOne[i].push(i)
    }
}
console.log(thisOne)