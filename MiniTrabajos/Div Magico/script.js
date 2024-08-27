
//Codigo largo
/*
let imagenes1 = document.querySelector('#img1')
let botones1 = document.getElementById('btn1')

botones1.addEventListener('click', () => {
    
    imagenes1.classList.toggle('oculto')
})

let imagenes2 = document.querySelector('#img2')
let botones2 = document.getElementById('btn2')

botones2.addEventListener('click', () => {
    
    imagenes2.classList.toggle('oculto')
})

let imagenes3 = document.querySelector('#img3')
let botones3 = document.getElementById('btn3')

botones3.addEventListener('click', () => {
    
    imagenes3.classList.toggle('oculto')
})
 */

//Codigo achicado / click en el boton
const toggleVisibility = (imgId, btnId) => {
    const imagen = document.querySelector(imgId);
    const boton = document.getElementById(btnId);

    boton.addEventListener('click', () => {
        imagen.classList.toggle('oculto');
    });
    
}

// Llama a la función para cada par de imagen y botón
toggleVisibility('#img1', 'btn1');
toggleVisibility('#img2', 'btn2');
toggleVisibility('#img3', 'btn3');


//Click sobre la imagen...
const onMouse = (imgId) => {

    const imagen = document.querySelector(imgId);

    imagen.addEventListener('click', () => {
        imagen.classList.toggle('oculto');
    });
    
}

onMouse('#img1')
onMouse('#img2')
onMouse('#img3')