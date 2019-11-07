const list = document.getElementById("list")

axios.get("https://api.vschool.io/richard/todo/").then((response) => {
    const todos = response.data
    console.log(todos)
    for(let i = 0; i < todos.length; i++){
        makeTodo(todos[i])
    }
})
// create or select Dom element
function makeTodo(todo){
    const container = document.createElement("div")
    const h1 = document.createElement("h1")
    const p = document.createElement("p")
    const img = document.createElement("img")
    


    // edit element
    h1.textContent = todo.title
    p.textContent = todo.description
    img.src = todo.imgUrl
    
   
    if(todo.completed){
        h1.style.textDecoration = "line-through";
    }
    
    
    //append
    container.appendChild(h1)
    container.appendChild(p)
    container.appendChild(img)

    console.log(container)
    list.appendChild(container)

}

document.form1.addEventLister("submit", (e)=>{
        e.preventDefault()
    const newToDo = {
        title: document.form1.title.value
    }
    axios.post("https://api.vschool.io/richard/todo/", )
})



// function myTodo(todo){
//    const container = document.createElement("div")

// }
// console.log(myTodo)
