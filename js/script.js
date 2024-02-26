// elements 
const itemsWrapper = document.querySelector('.items-wrapper');
const topChev = document.querySelector('.top');
const bottomChev = document.querySelector('.bottom');


let counterImg = 0;



// inserisco tutti i percorsi delle immagini in un array

const images = [
  './img/01.webp',
  './img/02.webp',
  './img/03.webp',
  './img/04.webp',
  './img/05.webp',
]


// creo un ciclo dell'array delle immagini e ad ogni ciclo aggiungo il tag con l'immagine ciclata 

for(let i = 0; i < images.length; i++){
  const img = images [i];
  console.log(img);

  itemsWrapper.innerHTML += `<img class " img hide " src="${img}">`
}

// prendo tutti gli elementi con la classe img 
const itemsCollection = document.getElementsByClassName('img');


// tolgo la classe .hide al primo elemento 

itemsCollection[counterImg].classList.remove('hide');
console.log(counterImg);






