const faqItems = document.getElementsByClassName('faq-item');
const faqArray = Array.from(faqItems)

faqArray.forEach(item => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
        item.classList.toggle("active");
      });
})



