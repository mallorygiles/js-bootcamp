let greetUser = function (){
    console.log('Welcome user!')
}

greetUser()

let square = function(num) {
    return num * num
}

let square2 = square(2);
let square3 = square(3);
let square4 = square(4);

console.log(square2)
console.log(square3)
console.log(square4)


let convertFahrenheitToCelsius = function (fahrenheit){
    let celsius = (fahrenheit - 32) * 5/9
    return celsius
}

let celsiusOf32Fahrenheit = convertFahrenheitToCelsius(32)
let celsiusOf68Fahrenheit = convertFahrenheitToCelsius(68)
let celsiusOf55Fahrenheit = convertFahrenheitToCelsius(55)

console.log(celsiusOf32Fahrenheit)
console.log(celsiusOf68Fahrenheit)
console.log(celsiusOf55Fahrenheit)