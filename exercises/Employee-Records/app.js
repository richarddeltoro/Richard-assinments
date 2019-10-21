

const employees = ["Richard", "Stephen", "Grant", "Reggie" ] 


function printEmployeeForm(Name, jobtitle, Salary, Status = "Fulltime"){

    this.employeeName = Name;
    this.jobPostion = jobtitle;
    this.money = Salary;
    this.emtime = Status;

    this.speak = function(){
        console.log(`This is the emplyee's name ${employeeName}  "and he is a  " ${jobPostion} and his salary is ${money} with a  ${emtime}`)

    }
}
const newEmplyee1 = new printEmployeeForm([0],"top dog", "100 hr")
const newEmplyee2 = new printEmployeeForm([1],"second in command", "80hr")
const newEmplyee3 = new printEmployeeForm([2], "janitor", "800" )



