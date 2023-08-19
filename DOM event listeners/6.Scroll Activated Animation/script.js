const allTextElements = document.querySelectorAll('.text')
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  function handleScroll() {
    allTextElements.forEach((textElement) => {
      if (isElementInViewport(textElement)) {
        textElement.classList.add('active');
      } 
    //   else {
    //     textElement.classList.remove('active');
    //   } ======= this line is for Tesla Animation :) ========
    });
  }
window.addEventListener('scroll', handleScroll);
