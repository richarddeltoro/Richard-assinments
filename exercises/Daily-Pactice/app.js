// // Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

// function findPairForSum(integers, target) {
//   let gothrew = integers.filter(function(num){
//         return num
//   })
//   return gothrew
// }

// // example
// var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
// console.log(pair); // --> [4, 5]







// arr = ["john", "JACOB", "jinGleHeimer", "schmidt"]

/// capitolize the fisrt letter
/// get rid of every word
function DoIt(arr){
  
  let grab =  arr.map(function(word){
      return word[0].toUpperCase() + word.slice(1)

    })
    return grab
}

console.log(DoIt(["john", "JACOB", "jinGleHeimer", "schmidt"]))




// function findPair(ints, target){
//   for(let i = 0; i < ints.length; i++){
//     for(let j = 0; j < ints.length; j++){
//       if(j === i){ 
//         continue
//       }
//       if(ints[i] + ints[j] === target){
//         return [ints[i], ints[j]]
//       }
//     }
//   }
// }




// console.log(findPairs([4, 23, 58, 3, 0, 3], 6))


