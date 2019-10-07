// if (5 > 3){
//     console.log ('IS GREATER THAN')
// }
// var numArry =[ 1, 2, 3, 4, 5, 6, 7]

// for(i = 0; i < numArry.length; i++){
//     if(numArry[i] > 5){
//         console.log("is greater")
//     }
//     else{console.log("is less than")
//     }
// }

// let cat = "cat"
// if (cat.length === 3 ){
//     console.log("is the length")
// }



// if ("dog" === "cat" ){
//   console.log(true)
// }else{ ("dog"!== "cat")
//  console.log("not the same")
// }
    
// var person = {
//     name: "vobby",
//     age: 22
//   }

// if (person.age >= 18){
//     console.log("he can watch the movie")
// }else{
//     console.log("sorry no")

// if (person.name[0]=== 'B'){
//     console.log("can watch movie")
// }else{
//     console.log("sorry no")
// }

// if(person.name[0]=== 'B' && person.age >= 18){
//     console.log("you may come in")
// }else{
//     console.log("sorry no")
// }
        


// if(1 == "1"){
//     console.log('strict')
// }else if(1 == "1"){
//     console.log('loose')
// }else{
//     console.log("not equal at all")
// }

// if(1 <= 2 && 4 === 4){
//  console.log("yes")   
// }else{
//     console.log("naw")
// }

// if(typeof 43 === "number"){
//     console.log("yes")
// }

// if(typeof)


// for(i=0,i<100,i++){

// }

// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

// for(let i = 0; i = officeItems.length; i++)
//     console.log(i)

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

  for(i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
      if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"){
       console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name, "is not old enough dont let him in")
      }else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"){
       console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name, " is old enough let him in")
      
      }else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name, " is old enough let her in")
      }else { 
          console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name, "is not old enough dont let her in")
      }
  }





