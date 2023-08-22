const button = document.getElementById("triggerPromise");
const checkbox = document.getElementById("triggerRejection");
const updateMessage = document.getElementById("message")

button.addEventListener("click", () => {
    console.log("in listener");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (checkbox.checked) {reject(`The promise has been rejected`)}
            else if (!checkbox.checked) {resolve(`The promise has been resolved`)}
            console.log('in promise')

        }, 1000);
    })
    .then((message) => {
        console.log('in then ')
        updateMessage.textContent = message;
        updateMessage.classList.add("resolved");
        if (updateMessage.classList.contains("rejected")) {updateMessage.classList.remove("rejected")}
    })
    .catch((error) => {
        console.log('in catch ')
        updateMessage.textContent = error;
        updateMessage.classList.add("rejected");
        if (updateMessage.classList.contains("resolved")) {updateMessage.classList.remove("resolved")}
    })
})