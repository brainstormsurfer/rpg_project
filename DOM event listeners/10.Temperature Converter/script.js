(function () {
    const tempInput = document.getElementById('temperature')
    const celsiusBtn = document.getElementById('toCelsius')
    const fahrenheitBtn = document.getElementById('toFahrenheit')
    const displayArea = document.getElementById('output')

    celsiusBtn.addEventListener('click' , function(){
        const inputValue = parseFloat(tempInput.value);
        const celsiusValue = (inputValue - 32) * 5 / 9;
        displayArea.textContent = `${celsiusValue.toFixed()} \u2103 ` ;
    })
    fahrenheitBtn.addEventListener('click' , function(){
        const inputValue = parseFloat(tempInput.value);
        const fahrenheitValue = inputValue * 9 / 5 + 32;
        displayArea.textContent = `${fahrenheitValue} \u2109 ` ;
    })
  })();

  