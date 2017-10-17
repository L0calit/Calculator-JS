var current = "";
var maths = 0;
var chiffre = 0;
$(document).ready(function() {
    $("#0").click(function(){
        if (current != "") {
            current += "0";
            chiffre ++;
            document.getElementById("ecran").innerHTML += "0";
            erreur();
        }
    });
    $("#7").click(function(){
        current += "7";
        chiffre++;
        document.getElementById("ecran").innerHTML += "7";
        erreur();
    });
    $("#8").click(function(){
        current += "8";
        chiffre++;
        document.getElementById("ecran").innerHTML += "8";
        erreur();
    });
    $("#9").click(function(){
        current += "9";
        chiffre++;
        document.getElementById("ecran").innerHTML += "9";
        erreur();
    });
    $("#5").click(function(){
        current += "5";
        chiffre++;
        document.getElementById("ecran").innerHTML += "5";
        erreur();
    });
    $("#6").click(function(){
        current += "6";
        chiffre++;
        document.getElementById("ecran").innerHTML += "6";
        erreur();
    });
    $("#4").click(function(){
        current += "4";
        chiffre++;
        document.getElementById("ecran").innerHTML += "4";
        erreur();
    });
    $("#1").click(function(){
        current += "1";
        chiffre++;
        document.getElementById("ecran").innerHTML += "1";
        erreur();
    });
    $("#2").click(function(){
        current += "2";
        chiffre++;
        document.getElementById("ecran").innerHTML += "2";
        erreur();
    });
    $("#3").click(function(){
        current += "3";
        chiffre++;
        document.getElementById("ecran").innerHTML += "3";
        erreur();
    });
    $("#plus").click(function(){
        current += " + ";
        chiffre = 0;
        document.getElementById("ecran").innerHTML = "";
    });
    $("#moins").click(function(){
        current += " - ";
        chiffre = 0;
        document.getElementById("ecran").innerHTML = "";
    });
    $("#fois").click(function(){
        current += " x ";
        chiffre = 0;
        document.getElementById("ecran").innerHTML = "";
    });
    $("#diviser").click(function(){
        current += " / ";
        chiffre = 0;
        document.getElementById("ecran").innerHTML = "";
    });
    $("#egal").click(function(){
        var array = current.split(' ');
        var reponse = calcul(array);
        current = reponse.toString();
        chiffre = current.length;
        document.getElementById("ecran").innerHTML = reponse;
        erreur();
    });
    $("#point").click(function(){
        current += ".";
        document.getElementById("ecran").innerHTML += ".";
    });
    $("#clear").click(function(){
        current = "";
        chiffre = 0;
        document.getElementById("ecran").innerHTML = "";
    });
});

function erreur() {
    if (chiffre >= 9) {
        alert("Erreur trop de caractères");
        document.getElementById("ecran").innerHTML = "";
        chiffre = 0;
        current = "";
    }
}

function calcul(array) {
    if (array.length == 1) {
        return array[0];
    }
    if (array[1] == '+') {
        maths = parseFloat(array[0]) + parseFloat(array[2]);
    }
    else if (array[1] == '-') {
        maths = parseFloat(array[0]) - parseFloat(array[2]);
    }
    else if (array[1] == '/') {
        maths = parseFloat(array[0]) / parseFloat(array[2]);
    }
    else if (array[1] == 'x') {
        maths = parseFloat(array[0]) * parseFloat(array[2]);
    }
    if (array.length > 3) {
        array.shift();
        array.shift();
        array[0] = maths;
        maths = calcul(array);
    }
    maths = Number((maths).toFixed(6));
    return maths;
}
