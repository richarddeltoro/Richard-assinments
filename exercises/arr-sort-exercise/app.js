// //small to Big
// const leastToGreatest = arr => arr.sort((a, b) => a-b)

// console.log(leastToGreatest([1, 3, 5, 2, 90, 20]))

// //Big to small
// const greatestToLeast = arr => arr.sort((a, b) => b - a)

// console.log(greatestToLeast([1, 3, 5, 2, 90, 20]))


// //smallest to bigest strings
// const  lengthSort = arr => arr.sort((a, b) => (a.length - b.length))    
 
// console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]))
  
// //Alphabetical Order
// function alphabetical(arr) {
//     return arr.sort()
// }

// console.log(alphabetical(["Aog", "wolf", "by", "family", "eaten"]))


///sorting by age in a Object
const byAge = arr => arr.sort((a, b) => a.age - b.age)

console.log(byAge([
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]))


