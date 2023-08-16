const faqItems = document.querySelectorAll('.faq-item')
const faqAnswers = document.querySelectorAll('.faq-answer')

const displayOne = function() {
    const faqId = this.id
    for (let answer of faqAnswers) {
    const parentItem = answer.parentElement;
        if (parentItem && parentItem.id === faqId) {                        
            answer.classList.toggle('active')
            answer.classList.toggle('faq-answer')
        } else {
            console.log(parentItem && parentItem.id === faqId);
            answer.classList.add('faq-answer')
        }        
    }    
}

faqItems.forEach(el => {
    el.addEventListener('click', displayOne)
})

// this.classList.add('faq-item.active')

/*
  if (parentItem && parentItem.id === faqId) {                        
            answer.classList.add('active')
            answer.classList.add('faq-answer')
            // answer.classList.remove('faq-answer')
        } else {
            console.log(parentItem && parentItem.id === faqId);
            answer.classList.remove('active')
            answer.classList.remove('faq-answer')
            
            // answer.classList.add('faq-answer')
        }        

*/