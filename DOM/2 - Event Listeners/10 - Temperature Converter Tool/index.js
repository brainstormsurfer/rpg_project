

(function() {
    const temperatureInput = document.querySelector('#temperature')
    const toCelsiusButton = document.querySelector('#toCelsius')
    const toFahrenheitButton = document.querySelector('#toFahrenheit')
    const outputElement = document.querySelector('#output')
    
    
    toCelsiusButton.addEventListener('click', function() {
        const inputValue = parseFloat(temperatureInput.value);        
        if (isNaN(inputValue)) {
            outputElement.textContent = 'Please enter a number to convert'
        } else {
            const celsiusValue = ((inputValue - 32) * (5 / 9))
            const result = `${inputValue}°F = ${celsiusValue.toFixed(3)}°C`
            outputElement.textContent = result;
        }
    });

    toFahrenheitButton.addEventListener('click', function() {     
        const inputValue = parseFloat(temperatureInput.value);  
        if (isNaN(inputValue)) {
            outputElement.textContent = 'Please enter a number to convert'
        } else {
            const celsiusValue = (inputValue * 9 / 5 + 32)
            const result = `${inputValue}°C = ${celsiusValue.toFixed(3)}°F`
            outputElement.textContent = result;
        }        
    });
})();