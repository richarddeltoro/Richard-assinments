/*
This code contains only syntax and code style problems. The logic of the code works,
so DO NOT change the functionality of anything in here.

In short, you shouldn't need to add your own statements anywhere,
just fix the existing ones.
*/


// Written by Kent, Clark

var enemies=["Lex","Batman","Darkseid","Brainiac","General Zod","Doomsday"];

function whoWins(is_There_Kryptonite, enemy_Name){

if (!is_There_Kryptonite)
{
    return "Superman beats " + enemy_Name + ", of course";
}

else{
    return "Depends on how quick Superman can get rid of the Kryptonite. "+ enemy_Name +" could possibly win this one.";
}
}

for (var i = 0; i < enemies.length; i++)
{
    var is_There_Kryptonite;
    if (i % 2 === 0){
        is_There_Kryptonite = true; 
    } else {
        is_There_Kryptonite = false;
    }
    console.log(whoWins(is_There_Kryptonite,enemies[i]));
}

function HowAttractedIsLoisLaneToMe ()
{
    // 1 is not at all attracted, 10 is "super" attracted...
    return Math.floor((Math.random()*10)+1);
}

console.log( HowAttractedIsLoisLaneToMe ()) ;

var clarkKent =true;
var superman =false;

while (clarkKent){
    console.log("I'm just a nerdy columnist");
    var phoneBoothQuickChange =Math.random();
    if (phoneBoothQuickChange>= 0.5) {
        clarkKent=false;
        superman=true;
        console.log("Now I'm Superman!");}}
