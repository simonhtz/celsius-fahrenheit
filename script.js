var button = document.querySelector(".button");
var toFahrenheit = document.querySelector(".temp");

var calculateTemp = function () {
    var tempCelsius = Number(prompt("Enter the temperature in Celsius (e.g. 20)"));
    var tempFahrenheit = tempCelsius * 1.8 + 32;
    toFahrenheit.innerText = `It's ${tempFahrenheit}° Fahrenheit.`;
};
button.addEventListener("click", calculateTemp);