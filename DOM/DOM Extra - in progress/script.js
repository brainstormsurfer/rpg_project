const form = document.getElementById('form')
const numList = form.querySelectorAll('input[type=text]')
const hidCode = document.getElementById('hid-code')
const visCode = document.getElementById('vis-code')

function smsGenerator() {
    let smsCode = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        smsCode += characters.charAt(randomIndex);
    }
    return smsCode;
}

visCode.value = smsGenerator();
numList[0].focus();

function fillCode(el){
if(/^[a-zA-Z0-9]$/.test(el.value)){
    const listToArray = Array.from(numList);
    const codeString = listToArray.reduce((input, acc) => acc + input.value ,'')
    hidCode.value = codeString.toLowerCase();
    const currentIndex = listToArray.indexOf(el);
    if (currentIndex < listToArray.length - 1) {
        listToArray[currentIndex + 1].focus();
    }
} else {
    el.value = '';
}
}

numList.forEach(input => {
    input.addEventListener('input', () => fillCode(input));
});
















