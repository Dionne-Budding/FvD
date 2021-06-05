// https://codepen.io/shooft/pen/bGpLVev?editors=0010
/* omdat er meer buttons geselecteerd moeten worden, wordt querySelectorAll gebruikt (en niet querySelector) */
var hearts = document.querySelectorAll("button.favo");

// Pop up sorteren
var sorteren = document.querySelector(".sorteren");
var openSort = document.querySelector(".openSort");

// pop up filteren
var filteren = document.querySelector(".filteren");
var openFilter = document.querySelector(".openFilter");

// Voor het wisselen van view
var view = document.querySelector("button[name='wissel-view']");

// Wissel van play naar pause en andersom
var pause = document.querySelector(".pause");


// Functie hartje laten vullen
function addToFavorites(event) {
  /* het hartje waarop geklikt is in de variabele 'clickedHeart' opslaan */
  var clickedHeart = event.target;

  /* als het hartje niet gevuld is */
  if (clickedHeart.innerHTML == "\u2661") {
    /* het niet gevulde hartje vervangen door gevuld */
    clickedHeart.innerHTML = "\u2665";
    /* en dan de functie aanroepen om de wishlist aan te passen */
    updatefavoriet("plus");
  }
  /* Als het hartje gevuld is */
  else {
    /* Het gevulde hartje vervangen door niet gevuld */
    clickedHeart.innerHTML = "\u2661";
    /* en dan de functie aanroepen om de love-list aan te passen */
    updatefavoriet("min");
  }
}

/* de favorieten updaten */
/* de action die meegegeven wordt, is "plus" of "min" */
function updatefavoriet(action) {
  /* het getal (de span) in de Wishlist-link in de nav opzoeken */
  /* die span in de variabele 'loveListAmount' opslaan */
  let wishlistAmount = document.querySelector(".favoriet span");

  /* het huidige aantal gele hartjes bepalen */
  let currentAmount = wishlistAmount.innerHTML;
  /* dat is een string - dus even omzetten naar een getal */
  currentAmount = parseInt(currentAmount);

  /* het nieuwe aantal gele hartjes bepalen */
  /* te beginnen met een variabele om het nieuwe aantal in op te slaan */
  let newAmount;

  /* als er liefde bij moet */
  if (action == "plus") {
    /* het nieuwe aantal gele hartjes berekenen */
    newAmount = currentAmount + 1;
  }

  /* als er liefde af moet */
  else {
    /* het nieuwe aantal gele hartjes berekenen */
    newAmount = currentAmount - 1;
  }

  /* tenslotte het nieuwe aantal in de HTML zetten */
  wishlistAmount.innerHTML = newAmount;
}

// Functie voor sorteren button
function sorterenOp(){
  openSort.classList.toggle("open");
  sorteren.classList.toggle("dicht");
}

// Functie voor filteren button
function filterenOp(){
  openFilter.classList.toggle("open");
  filteren.classList.toggle("dicht");
}

// functie wisselview
function wisselview() {
  document.body.classList.toggle("grid-view");
}

// Wissel van play naar pause en andersom
function wisselpause() {
  document.body.classList.toggle("play-pause");
}

/* elke button laten luisteren naar een klik in een array */
hearts[0].addEventListener("click", addToFavorites);
hearts[1].addEventListener("click", addToFavorites);
hearts[2].addEventListener("click", addToFavorites);
hearts[3].addEventListener("click", addToFavorites);
hearts[4].addEventListener("click", addToFavorites);
hearts[5].addEventListener("click", addToFavorites);

// Sorteren
sorteren.addEventListener("click", sorterenOp);

// filteren
filteren.addEventListener("click", filterenOp);

// wissel van view
view.addEventListener("click", wisselview);

// Wissel van play naar pause en andersom
pause.addEventListener("click", wisselpause);

var options = {
  // de classes van de h2's en p's (daarin gaat gezocht worden naar matches)
  valueNames: [ 'name', 'artiest', 'genre' ]
};

/* het daadwerkelijk initialiseren van het zoeken */
// theList - de ID van de main
// options - hierboven gedefinieerd
var charactersList = new List('theList', options);
