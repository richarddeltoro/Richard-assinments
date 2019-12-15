
///function that returns the sum of two numbers
function sum(x, y){
    try{
        if(x === "str" || ""||" "){
            throw new Error(`****PLEASE ENTER A NUMBER****`)
        }
    }
    catch(error){
        console.log(error)
    }
    return x + y;
  }

console.log(sum(2,2))
// ////////////////////////
////////////////////////
////////////////////////


function sum(x, y){
    try{
        if (x  === 1 && y === 2) {
            throw new Error("this is an Error")
        }
    }
    catch(error){
        console.log(error)
    }
   return x + y
  }
console.log(sum(1,2))




const user = {username: "sam", password: "123abc"};


function login(username, password){
    try{
        if(username === "sam" && password === "123abc"){
            throw "welcome back"
        }
        else if(username !== "sam" || password !== "123abc"){
            throw "worng Login"
        }
    }

    catch(error){
        return error
    }

   
  }

console.log(login("sam", "123abc"))
















