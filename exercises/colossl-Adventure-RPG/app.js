const readLine = require("readline-sync");

console.log("Howdy yall! You are about to  travel back in time to the mid 1800's during the cowboy era? As a fictional character, an outlaw who goes by the named John Marston?")

let isAlive  = true;
let hasWon = false;
let gotAway = false;
let finalEnemy = false;
let inventory = ['Wakie Tabakie', 'six shooter','Snake oil']


///enemy Info
function Enemy(name, hp, ap){
    this.name = name;
    this.hp = hp;
    this.ap = ap;
}
const laramieGang = new Enemy('Larmie gang member', 50, 12)
const bill = new Enemy('Bill Willamson', 50, 25)
const dutch = new Enemy('Dutch Van Der Linde', 80, 45)

const badGuys = [laramieGang, bill, dutch]


//Hero Info
function Hero(name, hp, ap){
    this.name = name;
    this.hp = hp;
    this.ap = ap;
}
const hero = new Hero('John Marston', 200, 14)

// const hero = thisHero
// console.log(hero)


console.log(" Good luck and try not to pick a fight with the wrong fella.")
console.log("You best get going the law is looking for you!")
while(isAlive && !hasWon){
    let choice = readLine.keyIn(`[w]to start walking [i] To check Inventory [q] to Quit`, {limit: 'wiq'})
    if(choice === 'w'){
        walkFunc()
    }else if(choice === 'i'){
        printInventory()
    }else{
        isAlive = false
        console.log('Dont blame you, the wild West was a dangerous time.')
    }
}

 function printInventory(){
     console.log(inventory)
 }
 
 function walkFunc(){
     let random = Math.floor(Math.random()*4)
     if(random === 3){
        enemyEncounter()
     }else {
         console.log("You continue walking")
     }
 }

let enemy

function selectEnemy(){
        const random = Math.floor(Math.random()* badGuys.length)
        const enemy = badGuys.splice(random, 1)[0]
        if(badGuys.length === 0){
            console.log('This is the last enemy! Good luck!')
            finalEnemy = true
        }
        return enemy
}


 function enemyEncounter(){
    let enemy = selectEnemy()
    let choice = readLine.keyIn(`Quick it's ${enemy.name}! what do you want to do? [f]fight, [r]run, or [q]Quit` ,{limit:'frq'})
    if(choice === 'f'){
        fight(enemy)
        if(finalEnemy){
            hasWon = true
            console.log('Yeehaw, thats all of them. Victory is Ours!!')
        }
    }else if (choice === 'r'){
        run(enemy)
    }else{
        isAlive = false
        console.log('I rekon, you should of made a better choice there partner')
    }
 }
    
function fight(enemy){
    // console.log(`enemy.hp stats ${enemy.hp}`)
    while(hero.hp > 0 && enemy.hp > 0 && !gotAway){
        let choice = readLine.keyIn(`Think fast! would you like [s] to give em lead, [r] to run like hell, [u] to use snake oil`, {limit: 'sru'})
        if(choice === 's'){
            heroAtt(enemy) 
            enemyAtt(enemy)
        }else if (choice === 'r'){
            run(enemy)
        }else if (choice === 'u'){
            useItem()
        }
    }
    gotAway = false
}


function heroAtt(enemy){
    let heroAttack = Math.floor(Math.random()* hero.ap) 
     enemy.hp -= heroAttack;
    console.log(`Nice shooting, his health is ${enemy.hp} now`)
    if(enemy.hp <= 0){
        console.log(`You defeated ${enemy.name}`)
    }
}

function enemyAtt(enemy){
    let eAtt = Math.floor(Math.random()* enemy.ap)
    hero.hp -= eAtt
    console.log(`He got you partner for ${eAtt} damage. Your current HP is ${hero.hp}`)
    if(hero.hp <= 0){
        console.log('DEAD')
        isAlive = false
    }
}

function run(enemy){
    let runAway = Math.floor(Math.random()* 3)
    if (runAway === 1){
        console.log('You ran like the wind, and got a way safely')
        gotAway = true;
    }else{
        enemyAtt(enemy)
    }
}


function useItem(){
    hero.hp += 60
    console.log(`That snake oil works wonders. Your heath is now ${hero.hp}`)
}





