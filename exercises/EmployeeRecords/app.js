

const employees = []

function Allemployees(name,jobtitle,salary,status){
    this.name = name
    this.jobtitle = jobtitle
    this.salary = salary
    this.status = status || "full-time"
}

let firstEmployee = new Allemployees("Richie","The Head Boss","3000'hr'")
let secondEmployee = new Allemployees("Duke ua boy","Assistinte","40'hr'","part-time")
let thirdEmployee = new Allemployees("Mr.Green","janotor","40'hr'","part-time")

 const pushEmployees = (firstEmployee) =>{
    return employees.push(firstEmployee)
}
pushEmployees(firstEmployee);
pushEmployees(secondEmployee);
pushEmployees(thirdEmployee);
console.log(employees)



