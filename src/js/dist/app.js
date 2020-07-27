"use strict";

//Grab all the pathing shadows
var footballShadowPath = document.getElementById('football-svg-path').getAttribute('d');
var basketballShadowPath = document.getElementById('basketball-svg-path').getAttribute('d');
var tennisShadowPath = document.getElementById('tennis-svg-path').getAttribute('d');
var balletShadowPath = document.getElementById('ballet-svg-path').getAttribute('d');
var karateShadowPath = document.getElementById('karate-svg-path').getAttribute('d');

var changeShadows = function changeShadows(sportCounter) {
  switch (sportCounter) {
    case 1:
      return footballShadowPath;
      break;

    case 2:
      return basketballShadowPath;
      break;

    case 3:
      return tennisShadowPath;
      break;

    case 4:
      return balletShadowPath;
      break;

    case 5:
      return karateShadowPath;
      break;

    default:
      return "";
  }

  ;
};

var changeSportTitle = function changeSportTitle(sportSelectorCounter) {
  switch (sportSelectorCounter) {
    case 1:
      return 'Football';

    case 2:
      return 'Basketball';

    case 3:
      return 'Tennis';

    case 4:
      return 'Ballet';

    case 5:
      return 'Karate';

    default:
      return 'Error';
  }
}; // Event listeners


document.querySelector('.next').addEventListener('click', function () {
  //This handles the button disappearing when the choices hit max
  var sportSelector = document.querySelector('.sports-selector');
  var mainCounter = sportSelector.getAttribute('data-button-counter');
  mainCounter++;
  var sportsWord = document.querySelector('.sports-selector h2');
  gsap.to(sportsWord, {
    duration: 0.15,
    opacity: 0
  });
  setTimeout(function () {
    sportsWord.innerHTML = changeSportTitle(mainCounter);
    gsap.to(sportsWord, {
      duration: 0.15,
      opacity: 1
    });
  }, 150);
  sportSelector.setAttribute('data-button-counter', mainCounter);

  if (mainCounter === 5) {
    document.querySelector('.next').style.visibility = "hidden";
  } else if (mainCounter != 5) {
    document.querySelector('.next').style.visibility = "visible";

    if (document.querySelector('.previous').style.visibility = "hidden") {
      document.querySelector('.previous').style.visibility = "visible";
    }
  } //**Everything else will handle the shadow movement. Code is pretty much the same but repeated for each of the 5 cards.**//
  //FIRST CARD


  var firstCard = document.getElementById('first-card');
  var firstCounter = firstCard.getAttribute('data-sport-counter');
  firstCounter++;
  var firstCardSVG = firstCard.querySelector('svg');
  gsap.to(firstCardSVG, {
    duration: 0.15,
    opacity: 0
  });
  firstCard.setAttribute('data-sport-counter', firstCounter);
  setTimeout(function () {
    document.getElementById('football-svg-path').setAttribute('d', changeShadows(firstCounter));
    gsap.to(firstCardSVG, {
      duration: 0.15,
      opacity: 1
    });
  }, 150); //SECOND CARD

  var secondCard = document.getElementById('second-card');
  var secondCounter = secondCard.getAttribute('data-sport-counter');
  secondCounter++;
  var secondCardSVG = secondCard.querySelector('svg');
  gsap.to(secondCardSVG, {
    duration: 0.15,
    opacity: 0
  });
  secondCard.setAttribute('data-sport-counter', secondCounter);
  setTimeout(function () {
    document.getElementById('basketball-svg-path').setAttribute('d', changeShadows(secondCounter));
    gsap.to(secondCardSVG, {
      duration: 0.15,
      opacity: 1
    });
  }, 150); //Third Card

  var thirdCard = document.getElementById('third-card');
  var thirdCounter = thirdCard.getAttribute('data-sport-counter');
  thirdCounter++;
  var thirdCardSVG = thirdCard.querySelector('svg');
  gsap.to(thirdCardSVG, {
    duration: 0.15,
    opacity: 0
  });
  thirdCard.setAttribute('data-sport-counter', thirdCounter);
  setTimeout(function () {
    document.getElementById('tennis-svg-path').setAttribute('d', changeShadows(thirdCounter));
    gsap.to(thirdCardSVG, {
      duration: 0.15,
      opacity: 1
    });
  }, 150); //FOURTH CARD

  var fourthCard = document.getElementById('fourth-card');
  var fourthCounter = fourthCard.getAttribute('data-sport-counter');
  fourthCounter++;
  var fourthCardSVG = fourthCard.querySelector('svg');
  gsap.to(fourthCardSVG, {
    duration: 0.15,
    opacity: 0
  });
  fourthCard.setAttribute('data-sport-counter', fourthCounter);
  setTimeout(function () {
    document.getElementById('ballet-svg-path').setAttribute('d', changeShadows(fourthCounter));
    gsap.to(fourthCardSVG, {
      duration: 0.15,
      opacity: 1
    });
  }, 150); //FIFTH CARD

  var fifthCard = document.getElementById('fifth-card');
  var fifthCounter = fifthCard.getAttribute('data-sport-counter');
  fifthCounter++;
  var fifthCardSVG = fifthCard.querySelector('svg');
  gsap.to(fifthCardSVG, {
    duration: 0.15,
    opacity: 0
  });
  fifthCard.setAttribute('data-sport-counter', fifthCounter);
  setTimeout(function () {
    document.getElementById('karate-svg-path').setAttribute('d', changeShadows(fifthCounter));
    gsap.to(fifthCardSVG, {
      duration: 0.15,
      opacity: 1
    });
  }, 150);
}); //THIS HANDLES THE MOVEMENT GOING BACKWARDS. EVERYTHING IS THE SAME AS THE NEXT BUTTON, BUT THE COUNTERS ARE SET TO -- INSTEAD OF ++

document.querySelector('.previous').addEventListener('click', function () {
  var sportSelector = document.querySelector('.sports-selector');
  var mainCounter = sportSelector.getAttribute('data-button-counter');
  mainCounter--;
  var sportsWord = document.querySelector('.sports-selector h2');
  gsap.to(sportsWord, {
    duration: 0.15,
    opacity: 0
  });
  setTimeout(function () {
    sportsWord.innerHTML = changeSportTitle(mainCounter);
    gsap.to(sportsWord, {
      duration: 0.15,
      opacity: 1
    });
  }, 150);
  sportSelector.setAttribute('data-button-counter', mainCounter);

  if (mainCounter === 1) {
    document.querySelector('.previous').style.visibility = "hidden";
  } else if (mainCounter != 1) {
    document.querySelector('.previous').style.visibility = "visible";

    if (document.querySelector('.next').style.visibility = "hidden") {
      document.querySelector('.next').style.visibility = "visible";
    }
  } //FIRST CARD


  var firstCard = document.getElementById('first-card');
  var firstCounter = firstCard.getAttribute('data-sport-counter');
  firstCounter--;
  var firstCardSVG = firstCard.querySelector('svg');
  gsap.to(firstCardSVG, {
    duration: 0.15,
    opacity: 0
  });
  firstCard.setAttribute('data-sport-counter', firstCounter);
  setTimeout(function () {
    document.getElementById('football-svg-path').setAttribute('d', changeShadows(firstCounter));
    gsap.to(firstCardSVG, {
      duration: 0.15,
      opacity: 1
    });
  }, 150); //SECOND CARD

  var secondCard = document.getElementById('second-card');
  var secondCounter = secondCard.getAttribute('data-sport-counter');
  secondCounter--;
  var secondCardSVG = secondCard.querySelector('svg');
  gsap.to(secondCardSVG, {
    duration: 0.15,
    opacity: 0
  });
  secondCard.setAttribute('data-sport-counter', secondCounter);
  setTimeout(function () {
    document.getElementById('basketball-svg-path').setAttribute('d', changeShadows(secondCounter));
    gsap.to(secondCardSVG, {
      duration: 0.15,
      opacity: 1
    });
  }, 150); //Third Card

  var thirdCard = document.getElementById('third-card');
  var thirdCounter = thirdCard.getAttribute('data-sport-counter');
  thirdCounter--;
  var thirdCardSVG = thirdCard.querySelector('svg');
  gsap.to(thirdCardSVG, {
    duration: 0.15,
    opacity: 0
  });
  thirdCard.setAttribute('data-sport-counter', thirdCounter);
  setTimeout(function () {
    document.getElementById('tennis-svg-path').setAttribute('d', changeShadows(thirdCounter));
    gsap.to(thirdCardSVG, {
      duration: 0.15,
      opacity: 1
    });
  }, 150); //FOURTH CARD

  var fourthCard = document.getElementById('fourth-card');
  var fourthCounter = fourthCard.getAttribute('data-sport-counter');
  fourthCounter--;
  var fourthCardSVG = fourthCard.querySelector('svg');
  gsap.to(fourthCardSVG, {
    duration: 0.15,
    opacity: 0
  });
  fourthCard.setAttribute('data-sport-counter', fourthCounter);
  setTimeout(function () {
    document.getElementById('ballet-svg-path').setAttribute('d', changeShadows(fourthCounter));
    gsap.to(fourthCardSVG, {
      duration: 0.15,
      opacity: 1
    });
  }, 150); //FIFTH CARD

  var fifthCard = document.getElementById('fifth-card');
  var fifthCounter = fifthCard.getAttribute('data-sport-counter');
  fifthCounter--;
  var fifthCardSVG = fifthCard.querySelector('svg');
  gsap.to(fifthCardSVG, {
    duration: 0.15,
    opacity: 0
  });
  fifthCard.setAttribute('data-sport-counter', fifthCounter);
  setTimeout(function () {
    document.getElementById('karate-svg-path').setAttribute('d', changeShadows(fifthCounter));
    gsap.to(fifthCardSVG, {
      duration: 0.15,
      opacity: 1
    });
  }, 150);
});