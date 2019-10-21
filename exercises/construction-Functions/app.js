

function User(fName, lName, age, favMovie, favSport) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.favoriteMovie = favMovie;
    this.favoriteSport = favSport;

    this.speak = function() {
        console.log(`Hi! My name is ${fName}  "and my last name is" ${lName} and my favorite movie is ${favMovie} My favorite Sport is ${favSport}`)

    }

}


const rich = new User("Richard","Del toro", 26, "Casino", "Baseball");
rich.speak()
console.log(rich)
// console.log("Richard", "Del", 26, "Casino", "Basball")