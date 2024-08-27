

document.body.addEventListener('mousemove', (evento) =>{

    if(evento.buttons === 1){

        const img = document.querySelector('.traker')
        img.style.top = evento.clientY + 'px';
        img.style.left = evento.clientX + 'px';

    }

});