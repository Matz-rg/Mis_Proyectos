
//objeto para pasar de ingles a español
const colorMap = {
    rojo: 'red',
    azul: 'blue',
    amarillo: 'yellow'
};

//funcion para agregar un color al fondo
document.getElementById('input').addEventListener('keypress', function(event) {
    const color = colorMap[this.value.toLowerCase()] || 'white';
    document.body.style.backgroundColor = color;

    document.body.style.backgroundColor = this.value === '' && event.key === 'Backspace' ? 'white' : color;
    
});

 const boton = document.getElementById('btn1')

 //funcion para borrar el fondo
boton.addEventListener('click', () => {

   document.body.style.backgroundColor = 'white';
})
