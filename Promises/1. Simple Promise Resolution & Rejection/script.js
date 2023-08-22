const triggerPromiseButton = document.getElementById('triggerPromise');
const triggerRejectionChB = document.getElementById('triggerRejection');
const message = document.getElementById('message');

triggerPromiseButton.addEventListener('click', function () {
    const myPromise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (triggerRejectionChB.checked) {
                reject('The Promise has been rejected!');
            } else {
                resolve('The Promise has been resolved!');
            }
        }, 1000);
    });

    myPromise.then(function (result) {
        message.textContent = result;
        message.classList.remove('rejected');
        message.classList.add('resolved');
    })
        .catch(function (error) {
            message.textContent = error;
            message.classList.remove('resolved');
            message.classList.add('rejected');
        });
});


