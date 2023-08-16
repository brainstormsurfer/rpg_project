const counterValue = document.querySelector('p')

const plusBtn = document.querySelector('#clickButton')
const minusBtn = plusBtn.cloneNode(true)
const resetBtn = minusBtn.cloneNode(true)

const buttonsWrapper = document.createElement("div")
buttonsWrapper.style.display = 'flex'
buttonsWrapper.style.justifyContent = 'space-around'
plusBtn.parentElement.insertBefore(buttonsWrapper, counterValue)
buttonsWrapper.append(minusBtn,resetBtn,plusBtn)

const buttonPropsObj = {
    'minus': {
        textContent : '-',
        borderRadius : '50%'
    },
    'reset': {
        textContent : 'Reset',
        borderRadius : '25px'
    },
    'plus': {
        textContent : '+',
        borderRadius : '50%'
    }
};

const changeCounterValue = function() {
    let currentValue = parseInt(counter.textContent)
    switch (this.id) {
        case 'reset': {
            currentValue = 0
        break;
        }
        case 'plus': {
        currentValue++;
        break;
        }
        case 'minus': {
            currentValue--
            break;
        }
    }
    counter.textContent = currentValue    
}

document.querySelectorAll('button').forEach((btn, index) => {
    btn.addEventListener('click', changeCounterValue)    
    const id = Object.keys(buttonPropsObj)[index]
    const properties = buttonPropsObj[id]
    btn.id = id;
    btn.textContent = properties.textContent;
    btn.style.borderRadius = properties.borderRadius;        
})

