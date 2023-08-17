const sections = document.querySelectorAll('.section');
let scrolling = false;


window.addEventListener('scroll', () => {
  if (!scrolling) {
      scrolling = true;
  }  
  sections.forEach((s) => {  
        const bounding = s.getBoundingClientRect();
        if (bounding.top <= window.innerHeight) {
          s.querySelector('.text').classList.add('active');
      } else {
          s.querySelector('.text').classList.remove('active');
    }})
    setTimeout(() => {
      scrolling = false;
    }, 300);
})