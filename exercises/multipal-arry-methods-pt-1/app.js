
    
    const newArr = [
        {
            person: "guy",
            type: "mean",
            face: "good"  
        }
    ]


const peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

const result1 = peopleArray.sort(function(a, b,){
    return a.age - b.age 
},)

const result2 = peopleArray.sort()

let togther = result1.concat(result2)

let mappedTogether = togther.map((line) => {
    
    return `<li>${line.firstName} is ${line.age}<li>`
  
})





console.log(mappedTogether)