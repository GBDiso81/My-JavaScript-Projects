function perform_Addition() { //defining addiition 
    var num1 = 100340;   //assigning variables
    var num2 = 3112; //assigning variables
    var num3 = 327728; //assigning variables
    var sum = num1 + num2 + num3; //performing addition using given variables
    document.getElementById("math").innerHTML = "The sum of 100340 + 3112 + 327728 is : " + sum; //displaying the result in HTML
}

function subtraction() {
    var num1 = 1234567; //assigning variables
    var num2 = 7890; //assigning variables
    var difference = num1-num2; //performing subtraction operation
    document.getElementById("subtract").innerHTML = "The Difference for 1234567 - 7890 is : " + difference; ////displaying the result in HTML
}

function division() {
    var num1 = 12345; //assigning variables
    var num2 = 12; //assigning variables
    var quotient = num1 / num2; //performing division operation
    document.getElementById("divide").innerHTML = " The Quotient for 12345 / 12 is : " + quotient; //displaying the result in HTML
}

function multiplication() {
    var num1 = 1234; //assigning variables
    var num2 = 4567; //assigning variables
    var product = num1 * num2; //perform multiplication of variables
    document.getElementById("multiply").innerHTML = " The Product for 1234 * 4567 is : " + product; //displaying the result in HTML
}

function multiple_ops() { //defining multiple math operations
    var nums = (9876) / 2 * 4 - (123 + 456); //assigning variables
    document.getElementById("simple_math").innerHTML = " 9,876 divided by 2, multiplied by 4, minus the sum of 123 plus 456, the answer is: " + nums; //displaying the result in HTML
}

function modulus_ops() { //defining modulus function
    var modulus_nums = 100 % 30; //assigning variables
    document.getElementById("modulus").innerHTML = "The remainder of 100 divided by 30 is : " + modulus_nums; //displaying the result in HTML
}

function negation_num() { //defining negation function
    var x = 150; //assigning variable
    document.getElementById("negation").innerHTML = "The output unary number for 150 is : " + -x;//displaying the result in HTML
}

function increment() { //defining increment function
    var x = 10; // assigning variable
    x++;
    document.getElementById("inc").innerHTML = "The increment of 10 is : " + x;//displaying the result in HTML
}

function decrement() { //defining decrement function
    var x = 10; // assigning variables
    x--;
    document.getElementById("dec").innerHTML = "The decrement of 10 is : " + x;//displaying the result in HTML
}

function math_random() { //naming the math random number function
    window.alert(Math.random() * 1000);//displaying the result in HTML
}

