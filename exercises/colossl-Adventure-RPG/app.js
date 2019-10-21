const readLine = require("readline-sync");

console.log("Howdy there partner would you like to travel back in time to the mid 1800's during the cowboy era? As a fictional character? An outlaw who goes by the named John Marston?")

let isAlive  = true;
let hasWon = false;
let gotAway = false;
let inventory = ['health', 'six shooter']


///enemy Info
function Enemy(name, hp, ap){
    this.name = name;
    this.hp = hp;
    this.ap = ap;
}
const laramieGang = new Enemy('Larmie gang member', 50,  12)
const bill = new Enemy('Bill Willamson', 50,  25)
const dutch = new Enemy('Duth Van Der Linde', 50,  12)

const badGuys = [laramieGang, bill, dutch]


//Hero Info
function Hero(name, hp, ap){
    this.name = name;
    this.hp = hp;
    this.ap = ap;
}
const  hero = new Hero('John Marston', 200, 14)
console.log(hero.hp)


while(isAlive && !hasWon){
    let  choice = readLine.keyIn(`[y] to continue [n] for end game`, {limit: 'yn'})
    if(choice === "y"){
       console.log(" you are now in the wild west of America in the mid 1800's. Good luck and try not to pick a fight with the wrong fella")
       gameStart()
    } else{
        isAlive = false
        console.log('Dont blame you the wild West was a dangerous time')
    }
}

 function gameStart(){
    console.log("Hey there feller, you best get going the law is looking for you!")
    let choice2 = readLine.keyIn(`[w]to start walking [i] To check Inventory [q] to Quit`, {limit: 'wiq'})
    if(choice2 === 'w'){
        walkFunc()
    }else if(choice2 === 'i'){
        printInventory()
    }else{
        isAlive = false
    }
 }

 function printInventory(){
     console.log(inventory)
 }
 
 function walkFunc(){
     let random = Math.floor(Math.random()*4)
     if(random === 3){
        enemyEncounter()
        gotAway = true
     }else {
         console.log("You continue walking")
     }
 }

let enemy

function selectEnemy(){
        const random = Math.floor(Math.random()* badGuys.length)
        const enemy = badGuys.splice(random, [1])[0]
        return enemy
}


 function enemyEncounter(){
    let enemy = selectEnemy()
    let choice = readLine.keyIn(`Quick it's ${enemy.name}! what do you want to do? [f]fight, [r]run, or [q]quit`,{limit:'frq'})
    if(choice === 'f'){
        fight(enemy)
    }else if (choice === 'r'){
        run()
    }else{
        isAlive = false
        console.log('I rekon, you should of made a better choice there partner')
    }
 }
    
function fight(enemy){
    while(hero.hp > 0 && enemy.hp > 0 && isAlive){
    let choice = readLine.keyIn(`Think fast! would you like [s] to give em lead, [r] to run like hell, [u] to use snake oil`, {limit: 'sru'})
        if(choice === 's'){
            heroAtt(Enemy)
        }else if (choice === 'r'){
            run()
        }else if (choice === 'u'){
            useItem()
            console.log(`That snake oil works wonders. Your heath is now ${hero.hp}`)
        } 
        enemyAtt(Hero)
    }
    //if/else for when you die hp < 0
}


function heroAtt(Enemy){
    let heroAttack = Math.floor(Math.random()* hero.ap) 
    console.log(heroAttack)
    let currentEnemyHp = badGuys.hp - heroAttack;
    console.log(badGuys.hp)
    // console.log(currentEnemyHp)
    console.log(`Nice shooting, his health is ${currentEnemyHp} now`)
}

function enemyAtt(Hero){
    let eAtt = Math.floor(Math.random()* Enemy.ap)
    let currentHeroHp = hero.hp - eAtt
    console.log(`He got you partner for ${eAtt} damage. Your current HP is ${currentHeroHp}`)
}
















// function heroAtt(Enemy){
//     let attack = Math.floor(Math.random()* hero.ap)
//     Enemy.hp = Enemy.hp - attack;
//     console.log(`Nice shooting, his health is ${+attack} now`)

// }

// function enemyAtt(Hero){
//     let eAtt = Math.floor(Math.random()* Enemy.att)
//     hero.hp = hero.hp - eAtt
//     console.log(`He got you partner for ${eAtt}`)
// }

function run(Enemy){
    gotAway = false;
    let runAaway = Math.floor(Math.random()* 2)
    if (runAaway === 1){
        console.log('You ran like the wind, and got a way safely')
        gotAway = true;
    }else{
        fight(Enemy)
    }
}






