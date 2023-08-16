const highlight = document.querySelectorAll('.highlightable');

highlight.forEach(element => {element.addEventListener('mouseover', event => event.target.classList.add('highlighted'))
                                element.addEventListener('mouseout', event => event.target.classList.remove('highlighted'))})
