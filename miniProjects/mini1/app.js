const form = document["my-Formy"]

form.addEventListener("submit",function(event){
    event.preventDefault()

    const firstName = form.firstName.value
    form.firstName.value = ""

    const passWord = form.password.value
    form.firstName.value = ""

    const h1 = document.createElement("h1")
    h1.textContent = firstName
    document.getElementsByTagName("body")[0].append(h1)


    const h3 = document.createElement("h3")
    h3.textContent = passWord
    document.getElementsByTagName("body")[0].append(h3)

    
})