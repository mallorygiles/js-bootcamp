let convertFahrenheitToCelsius = function (fahrenheit){
    let celsius = (fahrenheit - 32) * 5/9
    if(celsius <= 0){
        let isFreezing = true
    }
    return celsius
}

let celsiusOf32Fahrenheit = convertFahrenheitToCelsius(32)
let celsiusOf68Fahrenheit = convertFahrenheitToCelsius(68)
let celsiusOf55Fahrenheit = convertFahrenheitToCelsius(55)

console.log(celsiusOf32Fahrenheit)
console.log(celsiusOf68Fahrenheit)
console.log(celsiusOf55Fahrenheit)