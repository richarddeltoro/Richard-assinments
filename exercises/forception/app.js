
let people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
let alphabet = "abcdefghijklmnopqrstuvwxyz"
let newArry = []

function forception(people, alphabet){
    for(let i = 0; i < people.length; i++){
        newArry.push(`${people[i]}:`)
        for(let j = 0; j < alphabet.length; j++){
          newArry.push(`${alphabet[j]}:`)  
        }
        
    }

    return newArry
}


console.log(forception(people, alphabet))

