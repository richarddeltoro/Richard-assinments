const readlineSync = require("readline-sync")

const num1 = readlineSync.question("What is your first number")
const num2 = readlineSync.question("What is your  second number")
const operaterArray = ["add", "sub", "multi", "div"];

index = readlineSync.keyInSelect(operaterArray, "which number");

   console.log('ok, ' + operaterArray[index] + 'the answer is ');

function doMath(){
    if (operaterArray[index] === "add"){
        return +num1 + +num2
   }else if(operaterArray[index] === "sub"){
        return +num1 - +num2
   }else if(operaterArray[index] === "multi"){
        return +num1 * +num2 
   } else if (operaterArray[index] === "div"){
        return +num1 / +num2
   }
}
   

console.log(doMath())