const celsiusTemp = parseFloat(prompt("Ingresa la temperatura en Celsius: "));

const celsiusToFahrenheit = temp => {
  const result = (temp * 9 / 5) + 32;
  return result;
}

const fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);
console.log(`La temperatura en Fahrenheit es: ${fahrenheitTemp}`);
console.log(celsiusToFahrenheit(20))
console.log(celsiusToFahrenheit(25))
console.log(celsiusToFahrenheit(14))
