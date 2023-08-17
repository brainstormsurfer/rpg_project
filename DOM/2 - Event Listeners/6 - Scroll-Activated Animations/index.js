const sections = document.querySelectorAll('.section'); // Select all elements with class 'section'
let scrolling = false;

const onScrolling = (section) => {
    if (!scrolling) {
        scrolling = true;
    }

    sections.forEach((s) => {        
      if (s === section) {
        s.querySelector('.text').classList.add('active');
        } else {
        s.querySelector('.text').classList.remove('active');
      }});
    

    setTimeout(() => {
      scrolling = false;
    }, 300);
  }


window.addEventListener('scroll', () => {
  sections.forEach((section) => {
    const bounding = section.getBoundingClientRect();
    if (bounding.top <= window.innerHeight / 2 && bounding.bottom >= window.innerHeight / 2) {
      onScrolling(section); 
    }
  });
});
