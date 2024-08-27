

//Arreglo de las palabras randoms
const words = [

  'californication',
  'plataforma5',
  'black',
  'summer',
  'flea',
  'aeroplane',
  'peppers',
  'unlimited',
  'arcadium',
  'love',
  'getaway',
  'stadium',
  'quixoticelixer',
  'quarter',
  'snow',
  'dylan',
  'zephyr',
  'funky',
  'chili'

];



function randomWords() {

  const palabraRandom = Math.floor(Math.random() * words.length);
  return words[palabraRandom];

}

console.log(randomWords())

let letterRandom = randomWords();

function addWordHTML (){

  const h1 = document.querySelector('h1');
  h1.textContent = letterRandom ;

}

addWordHTML()

let textCajita = document.querySelector('input[type="text"]');
textCajita.addEventListener('input', function(e){
  const palabraIngresada = e.target.value;
  if (palabraIngresada === letterRandom){
    tiempo += 4;
    textCajita.value = '';
    letterRandom = randomWords();
    addWordHTML();
    updateScore();
  }
});

textCajita.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    const palabraIngresada = e.target.value;
    if (palabraIngresada === letterRandom) {
      tiempo += 4;
      textCajita.value = '';
      letterRandom = randomWords();
      addWordHTML();
      updateScore();
    }
    e.preventDefault(); // Evita que el formulario se envíe
  }
});

let tiempo = 10;
let score = 0;


function iniciarTime (){

  timerInterval = setInterval(actualizarTimer, 1000);
}

iniciarTime();

function actualizarTimer (){

  let time = document.querySelector('#timeSpan');

  time.textContent = `${tiempo}s`;

  tiempo--;

  if(tiempo < 0){

    clearInterval(timerInterval);
    time.textContent = '¡El tiempo ya Termino!';
    gameOver();

  }

}

function updateScore(){
  score ++;
  const marcador = document.querySelector('#score');
  marcador.textContent = score;
}


function gameOver(){

  let gameOver = document.querySelector('#end-game-container')
  const gameContainer = document.querySelector('.main')

  gameContainer.style.display = 'none';
  gameOver.style.display = 'block';
  gameOver.innerHTML = `
  
    <h1 class = 'gameOver'>¡Has Perdido!</h1>
    <p class = 'puntosTotales'>Tu puntaje total fue de ${score} puntos.</p>
   <button class = 'reloadGame' onclick="reiniciarJuego()"><b> Pulsa para poder reiniciar </b></button> `;

}

function reiniciarJuego(){
  location.reload();
}

