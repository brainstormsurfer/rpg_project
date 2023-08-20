// Exercise 1 - the create account button need refactor for being submit button.(i made temp' submit btn')
// const form = document.getElementById('form');
// form.addEventListener('submit', function(event){
//     event.preventDefault()
//     const nickName = document.querySelector('.form-nickname-container input')
//     const email = document.querySelector('.form-email-container input')
//     const password = document.querySelector('.form-password-container input')
//     alert(`nickname: ${nickName.value}\n Email: ${email.value}\n Password: ${password.value}`);
// })

// Exercise 2 - 
const form = document.getElementById('form');
const nicknameInput = document.getElementById('nicknameInput');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const nicknameError = document.getElementById('nicknameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    clearErrors();

    let isValid = true;

    if (nicknameInput.value.length < 3) {
        showError(nicknameInput, nicknameError, "Nickname must be at least 3 characters long.");
        isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(emailInput.value)) {
        showError(emailInput, emailError, "Please enter a valid email.");
        isValid = false;
    }

    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~]).{8,}$/;
    if (!passwordPattern.test(passwordInput.value)) {
        showError(passwordInput, passwordError, "Password must be at least 8 characters long, containing lowercase, uppercase letters, numbers, and a special character.");
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
});

function showError(input, errorElement, errorMessage) {
    errorElement.textContent = errorMessage;
    input.classList.add('error');
}

function clearErrors() {
    nicknameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    nicknameInput.classList.remove('error');
    emailInput.classList.remove('error');
    passwordInput.classList.remove('error');
}

const inputFields = [nicknameInput, emailInput, passwordInput];
inputFields.forEach(inputField => {
    inputField.addEventListener('input', function () {
        inputField.classList.remove('error');
        const errorElement = document.getElementById(inputField.id + 'Error');
        errorElement.textContent = '';
    });
});
