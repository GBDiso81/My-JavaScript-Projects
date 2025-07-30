//Global Variable 
var x=100;
function Multiply_numbers() {
    document.getElementById("mult1").innerHTML = (20*x);
}
function Multiply_numbers2() {
    document.getElementById("mult2").innerHTML = (8*x);
}

//Local Variable 
function Multiply_numbers3() {
    var x=10;
    document.getElementById("mult3").innerHTML = (500*x);
}
function Multiply_numbers4() {
    document.getElementById("mult4").innerHTML = (3*x);
}
//console.log
function Multiply_numbers5() {
    var x=10;
    console.log(20*x);
}
function Multiply_numbers6() {
    console.log(30*x);
}
Multiply_numbers5();
Multiply_numbers6();

//if function 
function New_day() {
    if (new Date().getHours()<6) {
        document.getElementById("Morning").innerHTML = "Good Morning! Have  a great day ahead !";
    }
}

//if function assignment
function Cut_off() {
    if (new Date().getDate()>15) {
        document.getElementById("billing").innerHTML = "Have you sent your 15th Billing Cut-off !";
    }
}

//if else assignment
function Salary_range() {
    Salary = document.getElementById("salary").value;
    if (Salary >=10000) {
        Loan = "You can avail our Salary Loan !";
    }
    else {
        Loan = "Your Salary Range does not meet Loan Requirements !";
        }
        document.getElementById("Your_monthly_salary?").innerHTML = Loan;
}

//else if statement
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time <18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}   