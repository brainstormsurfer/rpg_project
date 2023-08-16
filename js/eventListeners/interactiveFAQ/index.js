const container = document.querySelector('.faq-container');
const questions =  document.getElementsByClassName('faq-question');
const answers =  document.getElementsByClassName('faq-answer');


const questionsArray = Array.from(questions);

function toggleAnswer (el) {
    for (const answer of answers) {
        answer.style.display = 'none';
    }
    const questionIndex = questionsArray.indexOf(el);
    answers[questionIndex].style.display = 'block';
}


container.addEventListener('click', (event) => toggleAnswer(event.target))