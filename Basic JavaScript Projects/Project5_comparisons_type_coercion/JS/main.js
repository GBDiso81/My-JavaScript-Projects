function type_of() {
    document.getElementById("test6").innerHTML = typeof "TEST";
}
//utilizing coercion
function coercion1() {
    document.getElementById("test7").innerHTML = ("100" + 1500);
}

function my_function() {
    document.getElementById("TEST").innerHTML = 0/0;
}

function myFunction() {
    document.getElementById("test1").innerHTML = isNaN('This is an isNAN test!')
}

//utilizing isnan
function isnan_test() {
    document.getElementById("test").innerHTML = isNaN('007');
}
//utilizing infinity
function infinity1() {
    document.getElementById("test2").innerHTML = 4E9876543210;
}

function infinity2() {
    document.getElementById("test3").innerHTML = -8E1234567890;
}
//utilizing boolean 
function boolean1() {
    document.getElementById("test4").innerHTML = 100>99;
}

function boolean2() {
    document.getElementById("test5").innerHTML = 100<99;
}

console.log(1000 + 200);

console.log(100>1000);

//utilizing the double equal
function double_equal() {
    document.getElementById("test8").innerHTML = 2000==(50*40);
}

function double_equal1() {
    document.getElementById("test9").innerHTML = 2000==(50*4);
}
//utilizing the triple equal
function triple_equal() {
    x=100;
    y=100;
    document.getElementById("test10").innerHTML = (x===y);
}

function triple_equal1() {
    x=100;
    y="1000";
    document.getElementById("test11").innerHTML = (x===y);
}

function triple_equal2() {
    x=100;
    y="100";
    document.getElementById("test12").innerHTML = (x===y);
}

function triple_equal3() {
    x="100";
    y="10000";
    document.getElementById("test13").innerHTML = (x===y);
}
//utilizing the and operator
function and_true() {
    document.getElementById("test14").innerHTML = (20>15 && 30>20);
}

function and_true1() {
    document.getElementById("test15").innerHTML = (20>45 && 30>20);
}
//utilizing the OR operator
function OR_true() {
    document.getElementById("test16").innerHTML = (200>450 || 3000>2000);
}

function OR_true1() {
    document.getElementById("test17").innerHTML = (200>450 || 300>2000);
}
//utilizing the Not operators
function NOT_function() {
    document.getElementById("test18").innerHTML = ! (100*4) < 300;
}

function NOT_function1() {
    document.getElementById("test19").innerHTML = ! (100*9) > 800;
}


