
function convertCelsius(celsius) {
    let Fahrenheit = (celsius * 9/5) + 32;

    if (Fahrenheit > 30) {
        return `${celsius}°C = ${Fahrenheit}°F (Hot)`;
    } else if (Fahrenheit >= 15 && Fahrenheit <= 30) {
        return `${celsius}°C = ${Fahrenheit}°F (Warm)`;
    } else if (Fahrenheit < 15) {
        return `${celsius}°C = ${Fahrenheit}°F (Cold)`;
    }
}


console.log(convertCelsius(35));
console.log(convertCelsius(20));
console.log(convertCelsius(0)); 
