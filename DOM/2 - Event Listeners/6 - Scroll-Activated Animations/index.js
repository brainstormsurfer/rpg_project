const sections = document.querySelectorAll('.section');
let scrolling = false;


window.addEventListener('scroll', () => {
  if (!scrolling) {
      scrolling = true;
  }  
  sections.forEach((section) => {  
        const bounding = section.getBoundingClientRect();
        if (bounding.top < window.innerHeight / 2 && bounding.bottom >= window.innerHeight / 2 ) {
          section.querySelector('.text').classList.add('active');
      } else {
          section.querySelector('.text').classList.remove('active');
    }})
    setTimeout(() => {
      scrolling = false;
    }, 300);
})