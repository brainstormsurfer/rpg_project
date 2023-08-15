const form = document.getElementById('form');
const numList = document.querySelectorAll('input');
const hidCode = document.getElementById('hid-code');
const visCode = document.getElementById('vis-code');
const randomString = (length, chars) => {
    let str = '';
    for (let i = length; i > 0; --i) str += chars[Math.floor(Math.random() * chars.length)];
    return str;
};
const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const sms = randomString(6, chars);
visCode.value = sms;
numList[2].focus();
const fillCode = (el) => {
    if (/^[a-zA-Z0-9]$/.test(el.value)) {
        hidCode.value += el.value;
        if (el.nextElementSibling) {
            console.log(el.nextElementSibling), el.nextElementSibling.focus();
        } else {
            Array.from(numList)
                .reduce((curr, accum) => curr + accum, '')
        }
    } else {
        el.value = '';
    }
};
const fillFromClipboard = (event) => {
    event.preventDefault();
    const paste = event.clipboardData.getData('text');
    if (paste.length < 6 || !/^[a-zA-Z0-9]+$/.test(paste)) {
        return false;
    } else {
        for (let i = 0; i < 6; i++) {
            numList[i+2].value = paste[i];
        }
    }
};
const checkAndSubmit = () => {
    console.log(hidCode.value + ' / ' + visCode.value)
    if (visCode.value.toLowerCase() === hidCode.value.toLowerCase()) {
        form.submit();
        return true;
    } else {
        return false;
    }
};
const checkValue = (el) => {
    if (/^[a-zA-Z0-9]+$/.test(el.value)) {
        el.classList.remove('error');
    } else {
        el.classlist.add('error');
    }
};
numList.forEach((el) => {
    el.addEventListener('keyup', () => fillCode(el));
    el.addEventListener('keyup', () => checkValue(el));
    el.addEventListener('paste', (event) => fillFromClipboard(event));
    el.addEventListener('keyup', () => checkAndSubmit());
});

