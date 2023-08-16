const form = document.getElementById("form");
const numList = form.querySelectorAll("#form input[type=text]");
const hidCode = document.getElementById("hid-code");
const visCode = document.getElementById("vis-code");

const sms = Math.random().toString(36).slice(2).substring(0, 6);

visCode.value = sms;
numList[0].focus();

function fillCode(el) {
  const index = Array.from(numList).indexOf(el);
  if (/^[a-zA-Z0-9]$/.test(el.value) && visCode.value[index] === el.value) {
    const combinedCode = Array.from(numList)
      .reduce((accumulator, input) => accumulator + input.value, "")
      .toLowerCase();
    hidCode.value = combinedCode;

    const nextInput = el.nextElementSibling;
    if (nextInput !== null) {
      nextInput.focus();
    }
  } else {
    el.value = "";
  }
}

function fillFromClipboard(event) {
  event.preventDefault();
  let paste =
    event.clipboardData.getData("text") || window.clipboardData.getData("text");
  paste = paste.toLowerCase();

  if (paste.length !== 6 || !/^[a-zA-Z0-9]+$/.test(paste)) {
    return false;
  }

  paste.split("").forEach((char, index) => {
    if (char === visCode.value[index]) {
      numList[index].value = char;
    }
  });
}

function checkAndSubmit() {
  if (visCode.value !== hidCode.value) {
    return false;
  }
  form.submit();
  alert("BRAVO!");
}

function checkValue(el) {
  if (/^[a-zA-Z0-9]$/.test(el.value)) {
    el.classList.remove("error");
  } else {
    el.classList.add("error");
  }
}

numList.forEach((el) => {
  el.addEventListener("keyup", () => {
    fillCode(el);
    checkValue(el);

    checkAndSubmit();
  });

  el.addEventListener("paste", (event) => {
    fillFromClipboard(event);
    // checkAndSubmit();
  });
});
