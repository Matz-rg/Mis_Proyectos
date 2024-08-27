



let auto1 = document.getElementById('auto1')
let auto2 = document.getElementById('auto2')


let pista = document.querySelector('.pistaDeCarreras').clientWidth


function llegarALaMeta() {
    
    if (accD >= pista - auto1.clientWidth) {
        alert('¡El auto rojo ganó la carrera!');
        resetRace();

    } 
    
    else if (accK >= pista - auto2.clientWidth) {
        alert('¡El auto azul ganó la carrera!');
        resetRace();
    }
}

function resetRace() {
    accD = 0;
    accK = 0;
    auto1.style.marginLeft = accD + 'px';
    auto2.style.marginLeft = accK + 'px';
}


let accD = 0;
let accK = 0;

window.addEventListener('keyup', (event) => {

    if (event.key === 'd' || event.key === 'D'){
        
        accD += 10;
        auto1.style.marginLeft = accD + 'px'; 

    }

    
    if (event.key === 'k' || event.key === 'K'){
        
        accK += 10;
        auto2.style.marginLeft = accK + 'px'; 

    }

    llegarALaMeta();

})






