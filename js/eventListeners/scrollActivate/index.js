const animate = document.querySelectorAll('.text');

const animateText = Array.from(animate);

function addAnimation () {
    for (let text of animateText) {
        if (text.getBoundingClientRect().top < 900 && !text.classList.contains("active")){
            text.classList.add("active");
        } else if (text.getBoundingClientRect().top >= window.innerHeight && text.classList.contains("active")) {
            text.classList.remove("active");
        }
        
    }
}
window.addEventListener('scroll', () => addAnimation())