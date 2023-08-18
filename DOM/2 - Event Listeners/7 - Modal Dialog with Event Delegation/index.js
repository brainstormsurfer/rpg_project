const button = document.querySelector('button')
const div = document.querySelector('div')
const overlay = document.querySelector('#overlay')

button.addEventListener('click', (event) => {
    console.log('event.target', event.target);
        overlay.style.display = 'block'
})

const colorGesture = (element) => {
let keyframes = []
const originPosition = getComputedStyle(element).transform;
const originBackgroundColor = getComputedStyle(element).backgroundColor;

    if (element.id === 'closeBtn') {
        keyframes = [
            {
              transform: `${originPosition}`,
              rotate: '0deg'
            },
            {
              transform: `scale(4)`,
              backgroundColor: "black",
              color: "red",
              boxShadow: "inset 0px 0px 30px 0px red",
              fonSize: '20px',
              borderRadius: '50%',
              padding: '1.5em',             
            },
            {
              transform: `scale(1) ${originPosition}`,
            //   backgroundColor: `${originBackgroundColor}`,
              rotate: '720deg'
            },
          ];
    } else {
   keyframes = [
    {
      transform: `${originPosition}`,
      backgroundColor: "blue",
     test : 'Click the X to close this modal'
    },
    {
      transform: `scale(2)`,
      backgroundColor: "red",
    },
    {
      transform: `scale(1) ${originPosition}`,
      backgroundColor: `${originBackgroundColor}`,
    },
  ];

  setTimeout(() => {

      element.textContent = ''
      element.textContent = 'Click the X to close this modal';    
    }, 800);
  }

  const options = {
    duration: 3000,
    iterations: 1,
    easing: "ease-in-out",
    fill: "forwards",
  }  
  
    element.animate(keyframes, options)    
}

div.addEventListener('click', (event) => {
    const target = event.target
     if (target.id === "closeBtn") {   
        const xSpan = document.querySelector('span') 
        setTimeout(() => {            
            overlay.style.display = 'none'
          }, 2900);
        colorGesture(xSpan)     
    } else if (target.id !== "overlay") {        
        let tempText = target.innerHTML
        setTimeout(() => {            
            target.innerHTML = tempText;
          }, 2300);
        colorGesture(target)        
    } 
})