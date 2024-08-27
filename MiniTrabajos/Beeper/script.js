

let boton = document.querySelector('button');

//Realizamos directamente el evento en el boton.
/* 

boton.addEventListener('click', function(){

    document.body.insertAdjacentHTML('afterend', '<h2>BEEPPP!!!</h2>')
    document.body.classList.toggle('color')
})
    
*/

//Realizamos una funcion por separado y luego agregamos la funcion a un evento
function seEjecutaEnEvento(){

    document.body.insertAdjacentHTML('afterend', '<h2>BEEPPP!!!</h2>')
    document.body.classList.toggle('color')
   
}




let beepButon = document.getElementById('beepButon');

beepButon.addEventListener('click', seEjecutaEnEvento);

