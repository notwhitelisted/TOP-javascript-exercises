const convertToCelsius = function(tempFarenheit) {
  let celsius = 5/9 * (tempFarenheit - 32);
  let roundedCelsius = parseFloat(celsius.toFixed(1));
  return roundedCelsius;
};

const convertToFahrenheit = function(tempCelsius) {
  let fahrenheit = (tempCelsius * 9/5) + 32;
  let roundedFahrenheit = parseFloat(fahrenheit.toFixed(1));
  return roundedFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
