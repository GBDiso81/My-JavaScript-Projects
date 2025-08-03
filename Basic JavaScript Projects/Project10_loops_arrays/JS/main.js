//while loop
function Call_Loop() {
let text = "";
let i = 30;
while (i > 0) {
    text += "<br>The number is " + i;
    i--;
}
document.getElementById("loop").innerHTML = text;
}

//length property
function func_length1() {
let text = "Length Property Challenge";
let length = text.length;
document.getElementById("def_length").innerHTML = length;
}

//for loop
function for_loop() {
    const instruments = ["Guitar", "Piano", "Drums", "Violin", "Flute"];
    let text = "";
    for (let i = 0; i < instruments.length; i++) {
        text += instruments[i] + "<br>";
    }
    document.getElementById("List_of_instruments").innerHTML = text;
}

//array
function mobile_brands() {
    var cell_model = [];
    cell_model[1] = "Samsung";
    cell_model[2] = "Apple";
    cell_model[3] = "Google";
    cell_model[4] = "Xiaomi"
    cell_model[5] = "Oneplus";
    document.getElementById("cellphones").innerHTML = "In this cellphone brands, " + cell_model[1] + " is the brand that fits my office works."
}

//const keyword
function constant_function() {
    const Samsung_Galaxy = {model: "S24", color: "black", RAM: "12gb"};
    Samsung_Galaxy.storage = "512gb";
    //added property and value
    Samsung_Galaxy.processor = "Snapdragon 8 Elite Gen4"

    Samsung_Galaxy.price = "$1200";
    document.getElementById("constant").innerHTML = "I prefer Samsung Galaxy " + Samsung_Galaxy.model + " with storage of " + Samsung_Galaxy.storage + " and " + Samsung_Galaxy.processor + " m!"
}

//let function inside curly has block scope
function let_function() {
    var A = 100;
    var B = 50;
    {let A = 20;
    }
    document.getElementById("letfunc").innerHTML = A + B;
}

//return statement
let x = retfunction(10000, 1500); 
document.getElementById("returnfunc").innerHTML = x;

function retfunction(a, b) {
    return a * b;   
    } 

//object assignment
function object_assignment() {
    const person = {firstName: "Glen Mark", lastName: "Diso", age: 44, city: "Mississauga"};
    person.age = 44; //updating age
    person.province = "Ontario"; //adding province
    person.country = "Canada"; //adding country
    person.school = "Academy of Learning"; //adding school
    document.getElementById("object").innerHTML = person.firstName + " " + person.lastName + " is " + person.age + " years old and lives in " + person.city + ", " + person.country + "." + " He studied at " + person.school + " in " + person.province + ".";
}

//Break and Continue Challenge
function break_continue() 
{
    let text = "";
    for (let i = 30; i >= 1; i--) {
        if (i === 20) {
            text += "SKIPPING NUMBER " + i + "<br>" + "CONTINUE COUNT AT 19<br>";
            continue; // skip the number 20
            
        }
        if (i === 1) {
            text += "STOP THE LOOP AT 1!<br>";
            break; // stop the loop when reaching 15
        }
        text += "Number: " + i + "<br>";
    }
    document.getElementById("break_continue").innerHTML = text;
}
    