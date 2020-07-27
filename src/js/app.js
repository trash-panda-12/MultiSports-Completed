
//Grab all the pathing shadows
let footballShadowPath = document.getElementById('football-svg-path').getAttribute('d');

let basketballShadowPath = document.getElementById('basketball-svg-path').getAttribute('d');

let tennisShadowPath = document.getElementById('tennis-svg-path').getAttribute('d');

let balletShadowPath = document.getElementById('ballet-svg-path').getAttribute('d');

let karateShadowPath = document.getElementById('karate-svg-path').getAttribute('d');

let changeShadows = function (sportCounter) {
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

    };
};

let changeSportTitle = function(sportSelectorCounter) {
    switch (sportSelectorCounter) {
        case 1: 
            return 'Football';
        case 2:
            return 'Basketball';
        case 3:
            return 'Tennis';
        case 4:
            return 'Ballet'
        case 5: 
            return 'Karate'
        default :
            return 'Error'
    }
};







// Event listeners

let nextButtonHandler = function() {
    document.querySelector('.next').addEventListener('click', function () {

        //This handles the button disappearing when the choices hit max

        let sportSelector = document.querySelector('.sports-selector')
        let mainCounter = sportSelector.getAttribute('data-button-counter');
        mainCounter++;
        let sportsWord = document.querySelector('.sports-selector h2')
        gsap.to(sportsWord, {
            duration: 0.15,
            opacity: 0
        });

        setTimeout(() => {
            sportsWord.innerHTML = changeSportTitle(mainCounter);
            gsap.to(sportsWord, {
                duration: 0.15,
                opacity: 1
            });
        }, 150);


        sportSelector.setAttribute('data-button-counter', mainCounter);
        if (mainCounter === 5) {
            document.querySelector('.next').style.visibility = "hidden"
        } else if (mainCounter != 5) {
            document.querySelector('.next').style.visibility = "visible";
            if (document.querySelector('.previous').style.visibility = "hidden") {
                document.querySelector('.previous').style.visibility = "visible";
            }
        }




        //**Everything else will handle the shadow movement. Code is pretty much the same but repeated for each of the 5 cards.**//





        //FIRST CARD

        let firstCard = document.getElementById('first-card');
        let firstCounter = firstCard.getAttribute('data-sport-counter');
        firstCounter++;
        let firstCardSVG = firstCard.querySelector('svg');

        gsap.to(firstCardSVG, {
            duration: 0.15,
            opacity: 0
        });

        firstCard.setAttribute('data-sport-counter', firstCounter);

        setTimeout(() => {
            document.getElementById('football-svg-path').setAttribute('d', changeShadows(firstCounter));
            gsap.to(firstCardSVG, {
                duration: 0.15,
                opacity: 1
            });
        }, 150);







        //SECOND CARD

        let secondCard = document.getElementById('second-card');
        let secondCounter = secondCard.getAttribute('data-sport-counter');
        secondCounter++;
        let secondCardSVG = secondCard.querySelector('svg');

        gsap.to(secondCardSVG, {
            duration: 0.15,
            opacity: 0
        });

        secondCard.setAttribute('data-sport-counter', secondCounter);

        setTimeout(() => {
            document.getElementById('basketball-svg-path').setAttribute('d', changeShadows(secondCounter));
            gsap.to(secondCardSVG, {
                duration: 0.15,
                opacity: 1
            });
        }, 150);




        //Third Card
        let thirdCard = document.getElementById('third-card');
        let thirdCounter = thirdCard.getAttribute('data-sport-counter');
        thirdCounter++;
        let thirdCardSVG = thirdCard.querySelector('svg');

        gsap.to(thirdCardSVG, {
            duration: 0.15,
            opacity: 0
        });

        thirdCard.setAttribute('data-sport-counter', thirdCounter);

        setTimeout(() => {
            document.getElementById('tennis-svg-path').setAttribute('d', changeShadows(thirdCounter));
            gsap.to(thirdCardSVG, {
                duration: 0.15,
                opacity: 1
            });
        }, 150);





        //FOURTH CARD


        let fourthCard = document.getElementById('fourth-card');
        let fourthCounter = fourthCard.getAttribute('data-sport-counter');
        fourthCounter++;
        let fourthCardSVG = fourthCard.querySelector('svg');

        gsap.to(fourthCardSVG, {
            duration: 0.15,
            opacity: 0
        });

        fourthCard.setAttribute('data-sport-counter', fourthCounter);

        setTimeout(() => {
            document.getElementById('ballet-svg-path').setAttribute('d', changeShadows(fourthCounter));
            gsap.to(fourthCardSVG, {
                duration: 0.15,
                opacity: 1
            });
        }, 150);






        //FIFTH CARD


        let fifthCard = document.getElementById('fifth-card');
        let fifthCounter = fifthCard.getAttribute('data-sport-counter');
        fifthCounter++;
        let fifthCardSVG = fifthCard.querySelector('svg');

        gsap.to(fifthCardSVG, {
            duration: 0.15,
            opacity: 0
        });

        fifthCard.setAttribute('data-sport-counter', fifthCounter);

        setTimeout(() => {
            document.getElementById('karate-svg-path').setAttribute('d', changeShadows(fifthCounter));
            gsap.to(fifthCardSVG, {
                duration: 0.15,
                opacity: 1
            });
        }, 150);





    });
}








//THIS HANDLES THE MOVEMENT GOING BACKWARDS. EVERYTHING IS THE SAME AS THE NEXT BUTTON, BUT THE COUNTERS ARE SET TO -- INSTEAD OF ++

let previousButtonHandler = function() {
    document.querySelector('.previous').addEventListener('click', function () {

        let sportSelector = document.querySelector('.sports-selector')
        let mainCounter = sportSelector.getAttribute('data-button-counter');
        mainCounter--;
        let sportsWord = document.querySelector('.sports-selector h2')
        gsap.to(sportsWord, {
            duration: 0.15,
            opacity: 0
        });

        setTimeout(() => {
            sportsWord.innerHTML = changeSportTitle(mainCounter);
            gsap.to(sportsWord, {
                duration: 0.15,
                opacity: 1
            });
        }, 150);


        sportSelector.setAttribute('data-button-counter', mainCounter);
        if (mainCounter === 1) {
            document.querySelector('.previous').style.visibility = "hidden"
        } else if (mainCounter != 1) {
            document.querySelector('.previous').style.visibility = "visible";
            if (document.querySelector('.next').style.visibility = "hidden") {
                document.querySelector('.next').style.visibility = "visible";
            }
        }
















        //FIRST CARD

        let firstCard = document.getElementById('first-card');
        let firstCounter = firstCard.getAttribute('data-sport-counter');
        firstCounter--;
        let firstCardSVG = firstCard.querySelector('svg');

        gsap.to(firstCardSVG, {
            duration: 0.15,
            opacity: 0
        });

        firstCard.setAttribute('data-sport-counter', firstCounter);

        setTimeout(() => {
            document.getElementById('football-svg-path').setAttribute('d', changeShadows(firstCounter));
            gsap.to(firstCardSVG, {
                duration: 0.15,
                opacity: 1
            });
        }, 150);







        //SECOND CARD

        let secondCard = document.getElementById('second-card');
        let secondCounter = secondCard.getAttribute('data-sport-counter');
        secondCounter--;
        let secondCardSVG = secondCard.querySelector('svg');

        gsap.to(secondCardSVG, {
            duration: 0.15,
            opacity: 0
        });

        secondCard.setAttribute('data-sport-counter', secondCounter);

        setTimeout(() => {
            document.getElementById('basketball-svg-path').setAttribute('d', changeShadows(secondCounter));
            gsap.to(secondCardSVG, {
                duration: 0.15,
                opacity: 1
            });
        }, 150);




        //Third Card
        let thirdCard = document.getElementById('third-card');
        let thirdCounter = thirdCard.getAttribute('data-sport-counter');
        thirdCounter--;
        let thirdCardSVG = thirdCard.querySelector('svg');

        gsap.to(thirdCardSVG, {
            duration: 0.15,
            opacity: 0
        });

        thirdCard.setAttribute('data-sport-counter', thirdCounter);

        setTimeout(() => {
            document.getElementById('tennis-svg-path').setAttribute('d', changeShadows(thirdCounter));
            gsap.to(thirdCardSVG, {
                duration: 0.15,
                opacity: 1
            });
        }, 150);





        //FOURTH CARD


        let fourthCard = document.getElementById('fourth-card');
        let fourthCounter = fourthCard.getAttribute('data-sport-counter');
        fourthCounter--;
        let fourthCardSVG = fourthCard.querySelector('svg');

        gsap.to(fourthCardSVG, {
            duration: 0.15,
            opacity: 0
        });

        fourthCard.setAttribute('data-sport-counter', fourthCounter);

        setTimeout(() => {
            document.getElementById('ballet-svg-path').setAttribute('d', changeShadows(fourthCounter));
            gsap.to(fourthCardSVG, {
                duration: 0.15,
                opacity: 1
            });
        }, 150);






        //FIFTH CARD


        let fifthCard = document.getElementById('fifth-card');
        let fifthCounter = fifthCard.getAttribute('data-sport-counter');
        fifthCounter--;
        let fifthCardSVG = fifthCard.querySelector('svg');

        gsap.to(fifthCardSVG, {
            duration: 0.15,
            opacity: 0
        });

        fifthCard.setAttribute('data-sport-counter', fifthCounter);

        setTimeout(() => {
            document.getElementById('karate-svg-path').setAttribute('d', changeShadows(fifthCounter));
            gsap.to(fifthCardSVG, {
                duration: 0.15,
                opacity: 1
            });
        }, 150);
    });
}










//Handles the Overlapping Image movement from on screen

let overlappingImage = document.querySelector('.overlapping-image');
let screenWidth = window.innerWidth;

//Landscape detector 
let isLandscape = window.matchMedia("(orientation: landscape)").matches;



let overlapListener = function() {
    window.addEventListener('resize', function(){
        screenWidth = window.innerWidth;
        screenHeight = window.innerHeight;
        

        if(isLandscape) {
            overlappingImage.style.margin = 0;
        }

        
                
    })
    document.addEventListener('scroll', function(event){
        if(window.scrollY > 73 && screenWidth > 700 && !isLandscape) {
            gsap.to('.overlapping-image', {duration:0.25, marginTop:-32,marginBottom:-32})
        }else if (window.scrollY < 73 && screenWidth > 700 && !isLandscape) {
             gsap.to('.overlapping-image', {duration:0.25, marginTop:0,marginBottom:0})
        }

    })

}




//Start it all

let app = function(){
    overlapListener();
    nextButtonHandler();
    previousButtonHandler();
}

app();






