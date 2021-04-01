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
      var tom1 = new Audio('audio/bravo zozzziiiing.ogg');
      tom1.play();
      break;
    case "b":
      var tom3 = new Audio('audio/cazzo dite, cazzo ve ne frega di alberto (feat Cri).ogg');
      tom3.play();
      break;
    case "c":
      var tom4 = new Audio('audio/che idolo, che stra idolo.ogg');
      tom4.play();
      break;
    case "d":
      var snare = new Audio('audio/chiiiiii.ogg');
      snare.play();
      break;
    case "e":
      var crash = new Audio('audio/cooooooooosa soft.ogg');
      crash.play();
      break;
    case "f":
      var crash = new Audio('audio/cooooosa.ogg');
      crash.play();
      break;
    case "g":
      var kick = new Audio('audio/e allora ghe digo va beeeen.ogg');
      kick.play();
      break;
    case "h":
      var kick = new Audio('audio/eee alora (con tono interrogratvio).ogg');
      kick.play();
      break;
    case "i":
      var kick = new Audio('audio/eeeeee noooo.ogg');
      kick.play();
      break;
    case "l":
      var kick = new Audio('audio/eh aloooora.ogg');
      kick.play();
      break;
    case "m":
      var kick = new Audio('audio/eh alora (ritmato).ogg');
      kick.play();
      break;
    case "n":
      var kick = new Audio('audio/eh ma ddddiiio.ogg');
      kick.play();
      break;
    case "o":
      var kick = new Audio('audio/grande fabione è stata una gara emozionante bene così.ogg');
      kick.play();
      break;
    case "p":
      var tom1 = new Audio('audio/grande fabione mi hai fatto emozionare.ogg');
      tom1.play();
      break;
    case "q":
      var tom3 = new Audio('audio/HAHAHA.ogg');
      tom3.play();
      break;
    case "r":
      var tom4 = new Audio('audio/ma che minghia dici.ogg');
      tom4.play();
      break;
    case "s":
      var snare = new Audio('audio/ma no è fattuale.ogg');
      snare.play();
      break;
    case "t":
      var crash = new Audio('audio/ma nonononono.ogg');
      crash.play();
      break;
    case "u":
      var crash = new Audio('audio/medio a 302 va beeeen.ogg');
      crash.play();
      break;
    case "v":
      var kick = new Audio('audio/mhhh nooooo.ogg');
      kick.play();
      break;
    case "z":
      var kick = new Audio('audio/negro.mpeg');
      kick.play();
      break;
    case "aa":
      var kick = new Audio('audio/non pianzeeer.ogg');
      kick.play();
      break;
    case "bb":
      var kick = new Audio('audio/o fa 2840 o fa 3 volte i 3000.ogg');
      kick.play();
      break;
    case "cc":
      var kick = new Audio('audio/o siiiiii.ogg');
      kick.play();
      break;
    case "dd":
      var kick = new Audio('audio/oh cazzo, oh cazzo.ogg');
      kick.play();
      break;
    case "ee":
      var kick = new Audio('audio/Pensa fare i 1500 piuttosto che i 600 va beeen.ogg');
      kick.play();
      break;
    case "ff":
      var crash = new Audio('audio/se rispondete a robi fatti i cazzi tuoi vi do un premio.ogg');
      crash.play();
      break;
    case "gg":
      var kick = new Audio('audio/sei proprio un coreon davide, adesso falli.ogg');
      kick.play();
      break;
    case "hh":
      var kick = new Audio('audio/te prego amore non pianzeeer.ogg');
      kick.play();
      break;
    case "ii":
      var kick = new Audio('audio/va beeeen (più moderato).ogg');
      kick.play();
      break;
    case "ll":
      var kick = new Audio('audio/Va beeeen.ogg');
      kick.play();
      break;
    case "mm":
      var kick = new Audio('audio/va beeen, più corto è piu forte.ogg');
      kick.play();
      break;
    case "nn":
      var kick = new Audio('audio/va ben.ogg');
      kick.play();
      break;

  }
}
