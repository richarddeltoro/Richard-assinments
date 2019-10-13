const readlineSync = require("readline-sync")
let name = readlineSync.question('What is your name?')

console.log(`Hello, ${name}`)

const  optionsArray = ["put hand in hole", "find the key", "Open the door"] 
let playing = true
let hasKey = false

while(playing === true){
  index = readlineSync.keyInSelect(optionsArray, 'make a choice', {cancel: false})
    if (optionsArray[index] === "put hand in hole"){
    playing = false
    console.log ("you're dead")
  } else if (optionsArray[index] === "find the key"){
        hasKey = true
        console.log("you may continue")
  }else {
    if (hasKey === true){
      console.log("the door has opened")
      playing = false
    }else if (hasKey === false){
      console.log ("The Door Is Locked You Might Need A Key")
    }
    
  }
}
