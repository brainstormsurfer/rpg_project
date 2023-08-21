const message = document.querySelector("#message");
const button = document.querySelector("button");
const checkbox = document.querySelector("#triggerRejection");

function clickHandler() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (checkbox.checked) {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}

button.addEventListener("click", () => {
  clickHandler()  
    .then(() => {
      console.log("The promise has been resolved!");
    })
    .then(() => {
      console.log("(...seriously)");
    })
    .catch(() => {
      console.log("The promise has been rejected!");
    });
});
