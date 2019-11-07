
const readlinesync = require('readline-sync')
// const ques1 = resdlinesync.question(`Hello there would you like to play a game ?`)
const num1 = readlinesync.question(`What is your first number`)
const num2 = readlinesync.question(`What is your second number`)
const operaterArry = ["add", "subtract", "multiply","divided"]

index = readlinesync.keyInSelect(operaterArry,"what is your number");

    console.log(`alright ${operaterArry[index]} the answer is`);

function doMath(){
    if(operaterArry[index] === "add"){
        return +num1 + +num2
    }else if(operaterArry[index] === "subtract"){
        return +num1 - +num2
    }else if(operaterArry[index] === "multiply"){
        return +num1 * +num2
    }else if(operaterArry[index] === "divided") {
        return +num1 / +num2
    }

}

console.log(doMath())