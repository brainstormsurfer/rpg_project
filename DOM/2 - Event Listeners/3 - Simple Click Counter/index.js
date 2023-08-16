function createButtons() {
  const plusBtn = document.querySelector("#clickButton");
  const minusBtn = plusBtn.cloneNode(true);
  const resetBtn = plusBtn.cloneNode(true);

  const buttonsWrapper = document.createElement("div");
  buttonsWrapper.style.display = "flex";
  buttonsWrapper.style.justifyContent = "space-around";
  plusBtn.parentElement.insertBefore(buttonsWrapper, counterValue);
  buttonsWrapper.append(minusBtn, resetBtn, plusBtn);

  return { minusBtn, resetBtn, plusBtn };
}

function setButtonsFunctionality(buttons) {
  const buttonsPropsObj = {
    minus: {
      textContent: "-",
      borderRadius: "50%",
    },
    reset: {
      textContent: "Reset",
      borderRadius: "25px",
    },
    plus: {
      textContent: "+",
      borderRadius: "50%",
    },
  };

  const changeCounterValue = function () {
    let currentValue = parseInt(counter.textContent);
    switch (this.id) {
      case "reset": {
        currentValue = 0;
        break;
      }
      case "plus": {
        currentValue++;
        break;
      }
      case "minus": {
        currentValue--;
        break;
      }
    }
    counter.textContent = currentValue;
  };

  buttons.forEach((btn, index) => {
    btn.addEventListener("click", changeCounterValue);
    const id = Object.keys(buttonsPropsObj)[index];
    const btnValues = buttonsPropsObj[id];
    btn.id = id;
    btn.textContent = btnValues.textContent;
    btn.style.borderRadius = btnValues.borderRadius;
  });
}

const counterValue = document.querySelector("p");
const buttons = createButtons()
setButtonsFunctionality(Object.values(buttons))