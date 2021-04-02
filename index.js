for (var c = 0; c < document.querySelectorAll("button").length; c++) {
  document.querySelectorAll("button")[c].addEventListener("click", handleClick);
}

function suona(evento) {
  confrontare(evento.key);
}

function handleClick() {
  buttonClicked = this.id;
  confrontare(buttonClicked);
}

function confrontare(buttonClicked) {
  switch (buttonClicked) {
    case "a":
      var tom = new Audio('audio/bravo zozzziiiing.ogg');
      break;
    case "b":
      var tom = new Audio('audio/cazzo dite, cazzo ve ne frega di alberto (feat Cri).ogg');
      break;
    case "c":
      var tom = new Audio('audio/che idolo, che stra idolo.ogg');
      break;
    case "d":
      var tom = new Audio('audio/chiiiiii.ogg');
      break;
    case "e":
      var tom = new Audio('audio/cooooooooosa soft.ogg');
      break;
    case "f":
      var tom = new Audio('audio/cooooosa.ogg');
      break;
    case "g":
      var tom = new Audio('audio/e allora ghe digo va beeeen.ogg');
      break;
    case "h":
      var tom = new Audio('audio/eee alora (con tono interrogratvio).ogg');
      break;
    case "i":
      var tom = new Audio('audio/eeeeee noooo.ogg');
      break;
    case "l":
      var tom = new Audio('audio/eh aloooora.ogg');
      break;
    case "m":
      var tom = new Audio('audio/eh alora (ritmato).ogg');
      break;
    case "n":
      var tom = new Audio('audio/eh ma ddddiiio.ogg');
      break;
    case "o":
      var tom = new Audio('audio/grande fabione è stata una gara emozionante bene così.ogg');
      break;
    case "p":
      var tom = new Audio('audio/grande fabione mi hai fatto emozionare.ogg');
      break;
    case "q":
      var tom = new Audio('audio/HAHAHA.ogg');
      break;
    case "r":
      var tom = new Audio('audio/ma che minghia dici.ogg');
      break;
    case "s":
      var tom = new Audio('audio/ma no è fattuale.ogg');
      break;
    case "t":
      var tom = new Audio('audio/ma nonononono.ogg');
      break;
    case "u":
      var tom = new Audio('audio/medio a 302 va beeeen.ogg');
      break;
    case "v":
      var tom = new Audio('audio/mhhh nooooo.ogg');
      break;
    case "z":
      var tom = new Audio('audio/negro.mpeg');
      break;
    case "aa":
      var tom = new Audio('audio/non pianzeeer.ogg');
      break;
    case "bb":
      var tom = new Audio('audio/o fa 2840 o fa 3 volte i 3000.ogg');
      break;
    case "cc":
      var tom = new Audio('audio/o siiiiii.ogg');
      break;
    case "dd":
      var tom = new Audio('audio/oh cazzo, oh cazzo.ogg');
      break;
    case "ee":
      var tom = new Audio('audio/Pensa fare i 1500 piuttosto che i 600 va beeen.ogg');
      break;
    case "ff":
      var tom = new Audio('audio/se rispondete a robi fatti i cazzi tuoi vi do un premio.ogg');
      break;
    case "gg":
      var tom = new Audio('audio/sei proprio un coreon davide, adesso falli.ogg');
      break;
    case "hh":
      var tom = new Audio('audio/te prego amore non pianzeeer.ogg');
      break;
    case "ii":
      var tom = new Audio('audio/va beeeen (più moderato).ogg');
      break;
    case "ll":
      var tom = new Audio('audio/Va beeeen.ogg');
      break;
    case "mm":
      var tom = new Audio('audio/va beeen, più corto è piu forte.ogg');
      break;
    case "nn":
      var tom = new Audio('audio/va ben.ogg');
      break;
  }
  tom.play();
}
