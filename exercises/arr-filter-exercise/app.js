

// // const arr = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13]
// const arr2 = ["hi", "by", "what in the world", "fiver", "ojfed", "sup", "bro"]

// //BY FIVE
// const pluseFive = arr.filter(num => num >= 5)
// //EVEN NUMBER
// const byTwo = arr.filter(num => num %2 === 0)

// //STRING IS 5 OR MORE CHARACTERS
// const strBy5 = arr2.filter(arr2 => arr2.length <= 5)

// console.log(pluseFive)
// console.log(byTwo)
// console.log(strBy5)




// const suspects = [
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true }
// ]


// const findPeepes = suspects.filter(function(suspects){
//     if(suspects.member === true){
//         return suspects
//     }
// })

// console.log(findPeepes)



// const people = [
//     { name: "Angelina Jolie", age: 80 },
//     { name: "Eric Jones", age: 2 },
//     { name: "Paris Hilton", age: 5 },
//     { name: "Kayne West", age: 16 },
//     { name: "Bob Ziroll", age: 100 }
// ]


// const ofAge = people.filter(function(people){
//     if(people.age >= 18){
//         return people
//     }
// })



// console.log(ofAge)



const byFive = arr => arr.filter(num => num >= 5)

 
console.log(byFive([3, 6, 8, 2]))