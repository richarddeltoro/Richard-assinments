var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));



function myFunck(str1, num){
    let part1 = str1.split("")
    let part2 = part1.splice(0,num)
    let together = part1.concat(part2)
    let str = together.join("")
     return str
        
}


console.log(myFunck(input,shift))