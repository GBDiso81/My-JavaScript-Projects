//concatenate function
function fullsentence() {
    var part_1 = "Running this ";
    var part_2 = "code will ";
    var part_3 = "display the sentence ";
    var part_4 = "as a whole. ";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("concatenate").innerHTML = whole_sentence;
}

//slice function
function slice_method() {
    var sentence = "Here is a useful link containing a list of JavaScript string methods: ";
    var section = sentence.slice(42, 53);
    document.getElementById("slice").innerHTML = section;
}

//toUppercase function
function toUpper() {
    var sent_1 = "convert me to uppercase !"
    var convert = sent_1.toUpperCase();
    document.getElementById("upper").innerHTML = convert;
}

//search function
function find() {
    var sentence = "The slice() method is a string method that extracts a section of a string and then returns the extracted section in a new string. ";
    var search_1 = sentence.search ("string");
    document.getElementById("search_function").innerHTML = search_1;
}

//ToString function
function to_string() {
    var X = 10000;
    var text_to = X.toString();
    document.getElementById("demo1").innerHTML = text_to;
}

//precision method
function precision_func() {
    var x = 1234567890.09876543210;
    document.getElementById("demo2").innerHTML = x.toPrecision(12);
}

//toFixed method
function tofixed_func() {
    var x = 1234.567890;
    document.getElementById("demo3").innerHTML = x.toFixed();
}

