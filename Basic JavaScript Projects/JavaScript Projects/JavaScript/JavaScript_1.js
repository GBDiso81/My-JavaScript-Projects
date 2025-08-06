function checkBrand() {
    let brand = document.getElementById("brand").value;
    let message;

    switch (brand) {
        case "Apple":
            message = "You selected Apple.";
            break;
        case "Samsung":
            message = "You selected Samsung Mobiles.";
            break;
        case "Google":
            message = "You selected Google Mobiles.";
            break;
        case "OnePlus":
            message = "You selected OnePlus Mobiles.";
            break;
        case "Oppo":
            message = "You selected Oppo Mobiles.";
            break;
        case "Vivo":
            message = "You selected Vivo Mobiles.";
            break;
        case "Realme":
            message = "You selected Realme Mobiles.";
            break;
        case "Motorola":
            message = "You selected Motorola Mobiles.";
            break;
        case "Nokia":
            message = "You selected Nokia Mobiles.";
            break;
        case "Huawei":
            message = "You selected Huawei Mobiles.";
            break;
        default:
            message = "Please enter exactly from listed items (Case Sensitive).";
    }

    document.getElementById("switchfunc").innerHTML = message;
}

//getElementsByClassName() Method
const x = document.getElementsByClassName("sample");
document.getElementById("classOutput").innerHTML = 
'The third paragraph (index 2) with class="sample" is: ' + x[2].innerHTML;

//<!--Canvas Element Assignment-->
const canvas = document.getElementById("my_Canvas");
            const ctx = canvas.getContext("2d");
            
            ctx.fillStyle = "blue";
            ctx.fillRect(40, 40, 120, 120);
        

//Gradient Color Challenge
const c = document.getElementById("gradientCanvas");
const ctx1 = c.getContext("2d");

const grd = ctx1.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx1.fillStyle = grd;
ctx1.fillRect(10, 10, 180, 180);    

//