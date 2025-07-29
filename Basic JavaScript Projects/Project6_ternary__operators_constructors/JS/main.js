//ternary operator activity
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 152) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride! ";
}
//ternary operator challenge
function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are still not allowed":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote for this election! ";
}
//constructor activity
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", "2020", "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", "2019", "White and Black");
var Erik = new Vehicle ("Ford", "Pinto", "1971", "Mustard");
function myfunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " Manufactured in " + Erik.Vehicle_Year + ".";
}




//defining a constructor challenge
function Grades(Algebra, Science, History, Calculus ) {
    this.Grades_Algebra = Algebra;
    this.Grades_Science = Science;
    this.Grades_History = History;
    this.Grades_Calculus = Calculus;
}
var Glen_Diso = new Grades("90", "89", "92", "91");
var Salve_Napasi = new Grades("88", "91", "87", "86");
var Glesa_Mae = new Grades("91", "94", "93", "89");
function my_function1() {
    document.getElementById("My_Constructors1").innerHTML = "Glen Diso has the highest grade in History of " + Glen_Diso.Grades_History + " and has the lowest grade in Science with " + Glen_Diso.Grades_Science + " this semester" + "."; 
}


//utilizing nested count function
function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 60;
        function Minus_one() {Starting_point -= 1;}
        Minus_one();
        return Starting_point;
    }
}


