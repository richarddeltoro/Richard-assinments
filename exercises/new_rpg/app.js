const readline = require("readline-sync");

let isAlive  = true;
let hasWon = false;
let gotAway = false;
let finalProblem = false;
const listOfStuffarr = ["beefJerky", "sword", "jawlbraker", "flashLight", "MRE"]

    

let doYouwantToPlay =  readline.keyIn(`hey would you like to play a Game ????? Press [- Y -]for Yes. Or [- N -]for No`, {limit: 'yn'})
    if(doYouwantToPlay === "y"){
        isAlive  = true;
    }else if(doYouwantToPlay === "n") {
         console.log("well thats to bad I was certin you would of loved it")
         isAlive  = false;
    }

const printListOfStuff = () => console.log(listOfStuffarr)

//Selecting the Enemy
const selectEnemy = () => {
    const random = Math.floor(Math.random()* enemysArr.length)
    const enemyMethod = enemysArr.splice(random, 1)[0]
    if(enemysArr.length === 0){
        console.log("This is the last problem")
        finalProblem = true
    }
    return enemyMethod
}
///enemyEncounter
const foundEnemy = ()=> {
    let enemySelection = selectEnemy()
    let enemyEncounterChoice = readline.keyIn(`Quick its ${enemySelection.name} ! You have to be Strong Press [- F -] To Fight. Or you can do what everyone else dose like trying to run away from your Problems you will end up facing them sooner or latter but you can Press [- R -]and try to run away and see if it works this time. Also dying is allways an option Press [- D -] to Die `)
    if(enemyEncounterChoice === 'f'){
        fight(enemySelection)
        if(finalProblem){
            hasWon = true
            console.log(`I knew you could of done it. You Made It!!!!`)
        }
    }else if(enemyEncounterChoice === 'r'){
        runaway(enemySelection)
    }else{
        console.log("You really did it this time. You freaking killed yourself")
        isAlive = false;
    }

}
//fight
const fight = (enemySelection) => {
    let choice = readline.keyIn(`Press [- P -] to punch it in the face. Or Press [- R -] to try to run away again Or go check out your list of stuff by Pressing [- I -]`, {limit: 'pri'})
    // console.log(788889999, goodGuy.heawemySelection.health > 0 && !gotAway)
    while(goodGuy.health > 0 && enemySelection.health > 0 && !gotAway){
        if(choice === 'p'){
            heroAttc(enemySelection)
            enemyAttc(enemySelection)    
        }else if (choice === 'r'){
            runaway(enemySelection)
        }else if(choice === 'i'){
            printListOfStuff()
        }
    }
    gotAway = false
}

const runaway = (enemySelection) => {
    let tryingToRunAway = Math.floor(Math.random()*3)
    if(tryingToRunAway === 1){
        console.log(`Wow you got away this time LUCKY DOG`)
        gotAway = true;
    }else{
        enemyAttc(enemySelection)
    }
}






//heroAtt
const heroAttc = (enemySelection) => {
    let heroAttacing = Math.floor(Math.random()* goodGuy.hitPower)
    enemySelection.health -= heroAttacing;
    console.log(`You see life is not that bad you are almost done kicking its but ${enemySelection.health}`)
    if(enemySelection.health <= 0){
        console.log(`life is great you have defeted ${enemySelection.name}`)
    }
}
//enemyAtt 
const enemyAttc = (enemySelection)=>{
    let enemyAttacing = Math.floor(Math.random()* enemySelection.hitPower)
    goodGuy.health -= enemyAttacing
    console.log(`The Power Of Life hiting you in the face is ${enemyAttacing} but you still have ${goodGuy.health}`)
    if(goodGuy.health <= 0){
        console.log(`Dam that sucks, you just died but at lest your in a better place!!`)
        isAlive = false
    }
}





///Hero Info
function Hero(name, hitPower, health){
        this.name = name
        this.hitPower = hitPower
        this.health = health 
}
const goodGuy = new Hero("Richie", 130, 150)

///Enemy
function Enemy(name, hitPower, health){
    this.name = name
    this.hitPower = hitPower
    this.health = health
}
const lifeProblems = new Enemy("Life Problems", 50, 75)
const relationshipProblems = new Enemy("Relationship Problems", 30, 85)
const carTrouble = new Enemy("Car Trouble",20, 45)

const enemysArr = [lifeProblems, relationshipProblems, carTrouble]

const keepGoing = () => {
    let random = Math.floor(Math.random()* 4)
    if(random === 3){
        foundEnemy()
    }else{
        (`you may Continue for Now HAHAHAHAHA`)
    }
} 








console.log(`Good choice`)
while(isAlive && !hasWon){
    let firstOption = readline.keyIn(`Press [- W -] to walk or [- Q -] if you are a quitter. Also you have a list of items press [- i -] to check it `, {limit: 'wqi'})
        if(firstOption === 'w'){
            keepGoing()
        }else if(firstOption === 'i'){
            printListOfStuff()
        }else{
            isAlive = false
            console.log(`O well I guess we are all not born to be heros`)  
        }
    }