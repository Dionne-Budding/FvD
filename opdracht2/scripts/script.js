// https://codepen.io/shooft/pen/bGpLVev?editors=0010

/* omdat er meer buttons geselecteerd moeten worden, wordt querySelectorAll gebruikt (en niet querySelector) */
var hearts = document.querySelectorAll("button.favo");

// pop up filteren
var filteren = document.querySelector(".filteren");
var openFilter = document.querySelector(".openFilter");

// Voor het wisselen van view
var view = document.querySelector("button[name='wissel-view']");

/* alle button met class 'wish' in de HTML opzoeken */
/* omdat er meer buttons geselecteerd moeten worden, wordt querySelectorAll gebruikt (en niet querySelector) */
/* het gevonden lijstje met buttons (een array) in de variabele 'hearts' opslaan */
var play = document.querySelectorAll("img.play");

// opzoeken
var options = {valueNames: [ 'name', 'artiest', 'genre' ]};
var charactersList = new List('theList', options);

// muziek
// var playerSongs = player.querySelectorAll(".audio");

/* 1. zoek de 4 radio buttons op en sla die op in een variabele */
// document.querySelector
var optionAll = document.querySelector("#filter-all");
var optionPop = document.querySelector("#filter-pop");
var optionRnb = document.querySelector("#filter-rnb");
var optionHiphop = document.querySelector("#filter-hiphop");
var optionDance = document.querySelector("#filter-dance");

/* de opties om het sorteren te initialiseren */
var sort = {
  // de classes van de h2's en p's (daarin gaat de lijst gesorteerd worden)
  valueNames: [ 'name' ]
};

/* de opties om het draggen-en-droppen te initialiseren */
var options = {
  // de tijd van swappen in ms
  animation: 1000
}

/* het daadwerkelijk initialiseren van het draggen-en-droppen */
// list - de class van de ul
// options - hierboven gedefinieerd
var deLijst = document.querySelector(".list");
var sortable = Sortable.create(deLijst, options);


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
function wissel(event) {
  var clickedPlay = event.target;

  if (clickedPlay.src == "images/pause.svg") {
    clickedPlay.src = "images/play.svg";
  }

  else {
    clickedPlay.src = "images/pause.svg";
  }
}

/* 3. maak die functie aan */
// zoek de ul op en stop die in een variabele
// sla de value van de gekozen radio button op in een variabele --> event.target.value
// verwijder de huidige class van de ul --> deLijst.className = "";
// voeg de de nieuwe value als class toe aan de ul --> gebruik daarvoor de variabele van 2 regels omhoog
function filterList() {
  var deLijst = document.querySelector("ul");
  var nieuweFilter = event.target.value;

  deLijst.className = "";
  deLijst.classList.add(nieuweFilter);
}

/* elke button laten luisteren naar een klik in een array */
hearts[0].addEventListener("click", addToFavorites);
hearts[1].addEventListener("click", addToFavorites);
hearts[2].addEventListener("click", addToFavorites);
hearts[3].addEventListener("click", addToFavorites);
hearts[4].addEventListener("click", addToFavorites);
hearts[5].addEventListener("click", addToFavorites);


// filteren
filteren.addEventListener("click", filterenOp);

// wissel van view
view.addEventListener("click", wisselview);

// Wissel van play naar pause en andersom
// pause.addEventListener("click", wisselpause);


/* 2. laat de radio buttons luisteren naar wijzigingen */
// addEventListener
// roep dan steeds dezelfde functie aan
optionAll.addEventListener("change", filterList);
optionPop.addEventListener("change", filterList);
optionRnb.addEventListener("change", filterList);
optionHiphop.addEventListener("change", filterList);
optionDance.addEventListener("change", filterList);


/* elke button laten luisteren naar een klik */
/* na een klik de functie 'toggleLove' uitvoeren */
play[0].addEventListener("click", wissel);
play[1].addEventListener("click", wissel);
play[2].addEventListener("click", wissel);
play[3].addEventListener("click", wissel);
play[4].addEventListener("click", wissel);
play[5].addEventListener("click", wissel);
