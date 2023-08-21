const draggable = document.querySelector(".draggable");
const containers = document.querySelectorAll(".box");
let currentSource = document.querySelector("#sourceBox");
let currentTarget = document.querySelector("#targetBox");

let draggablePosX = 0;
let draggablePosY = 0;

let insideTargetBox = false;
let switchColor;
let targetEffect;

draggable.addEventListener("dragstart", (e) => {
  draggablePosX = e.clientX;
  draggablePosY = e.clientY;
  currentSource = e.target.parentElement;
  if (!targetEffect) {
    switchColor = !switchColor
    targetEffect = setInterval(() => {
      colorGesture(currentTarget);
    }, 1000);
  }
});

draggable.addEventListener("dragend", (e) => {
  draggablePosX = e.clientX;
  draggablePosY = e.clientY;
  if (checkDragState()) {
    clearInterval(targetEffect);
    targetEffect = null;
    currentTarget = currentSource;
  }
});

containers.forEach((container) => {
  container.addEventListener("dragover", function (e) {
    if (container.id === currentSource.id) {
      insideTargetBox = false;
    } else {
      e.preventDefault();
      currentTarget = container;
      insideTargetBox = true;
    }
  });
});

function checkDragState() {
  const currentTargetBounding = currentTarget.getBoundingClientRect();
  if (
    currentTargetBounding.left <= draggablePosX &&
    currentTargetBounding.right >= draggablePosX &&
    currentTargetBounding.top <= draggablePosY &&
    currentTargetBounding.bottom >= draggablePosY &&
    insideTargetBox
  ) {
    currentTarget.appendChild(draggable);
    insideTargetBox = false;
    return true;
  } else return false;
}

const colorGesture = (element) => {
  let keyframes = [];

  let boxShadowColor = switchColor ?
    "inset 0px 0px 200px 0px red" :
    "inset 0px 0px 200px 0px hsl(168, 100%, 44%)";

  const originBoxShadow = getComputedStyle(element).boxShadow;
  keyframes = [
    {
      boxShadow: `${boxShadowColor}`,
    },
    {
      boxShadow: `${originBoxShadow}`,
    },
  ];

  const options = {
    duration: 800,
    iterations: 1,
    easing: "ease-in-out",
    fill: "forwards",
  };

  element.animate(keyframes, options);
};
