var panjangInput = document.querySelector(".panjang");
var lebarInput = document.querySelector(".lebar");
var calculateButton = document.querySelector(".calculate");
var result = document.querySelector("result");
var BMI, panjang, lebar;

function myFunction(){
    panjang = panjangInput.value;
    lebar = lebarInput.value;
    BMI = panjang*lebar;
    alert("Your BMI is :" + BMI);
}