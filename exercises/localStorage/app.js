
localStorage.setItem("mystuff", "can you see this ?")
localStorage.setItem("great", "please dont tell anyone about this hidden message")
localStorage.setItem("myArr", JSON.stringify(["thing1", "thing2", "thing3"]))
localStorage.setItem("myObejct", JSON.stringify({name: "Richie", age:"5"}))

const mystuff = localStorage.getItem("mystuff")
const great = localStorage.getItem("great")
const myArr = JSON.parse(localStorage.getItem("myArr"))
const myObejct = JSON.parse(localStorage.getItem("myObect"))

console.log(myObejct)