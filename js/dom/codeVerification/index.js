const form = document.getElementById('form');
const numList = document.querySelectorAll("input");
const hidCode = document.getElementById('hid-code');
const visCode = document.getElementById('vis-code')


const randomString = (length, chars) => {
    let str = '';
    for (let i = length; i > 0; --i) str += chars[Math.floor(Math.random() * chars.length)];
    return str;
}
const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const sms = randomString(6, chars);

visCode.value = sms;
numList[2].focus();


console.log(numList[2]);

const fillCode = (el) => {
    if(/^[a-zA-Z0-9]$/.test(el.value)) {
        Array.from(numList).reduce((curr, accum) => curr + accum,'').toLowerCase();
        if(el.nextElementSibling) {console.log(el.nextElementSibling), el.nextElementSibling.focus()};
    } else {el.value = ''};
}

const fillFromClipboard = (event) => {
    event.preventDefault();
    const paste = event.clipboardData.length;
    if( paste < 6 || /^[a-zA-Z0-9]+$/.test(paste)) 
    {return false} else {
        for (i = 0 ; i < 6 ; i++) {
            numList[i].value = paste[i]
        };
    } 
}

const checkAndSubmit = () => {
    if (visCode.value === hidCode.value) {
        form.submit();
        return true;
    } else {return false}
}

const checkValue = (el) => {
    if ( /^[a-zA-Z0-9]+$/.test(el.value)) {
        el.classList.remove('error');
    } else {el.classlist.add('error');}
}

numList.forEach(el => {
    el.addEventListener('keyup', () => fillCode(el));
    el.addEventListener('keyup', () => checkValue(el));
    el.addEventListener('paste', (event) => fillFromClipboard(event));
    el.addEventListener('keyup', () => checkAndSubmit());
});