function my_Dictionary() { //defining dicitonary
    var Car = { //assigning variable for dictionary
        Car_Model: "Porsche 911",
        Body_Style : "Coupe",
        Fuel_Type: "Petrol",
        Drive_Type: "FWD",
        Size: "Compact",
        Luxury_Level: "Premium",
        Size: "rim17" //creating a duplicate key to see the result
    };
    delete Car.Size; //delete operator for KVP value size
    document.getElementById("Dictionary").innerHTML = Car.Size; //displays the output in HTML
}