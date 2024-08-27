

let button = document.getElementById('button')
let p = document.querySelectorAll('p')

button.addEventListener('click', function() {

    for(let i = 0; i < p.length; i++) {

        p[i].classList.toggle('resaltado');
    }
});

