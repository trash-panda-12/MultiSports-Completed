
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

document.querySelector('.next').addEventListener('click', function(){

    let sportSelector = document.querySelector('.sports-selector')
    let mainCounter = sportSelector.getAttribute('data-button-counter');
    mainCounter++;
    document.querySelector('.sports-selector h2').innerHTML = changeSportTitle(mainCounter);
    // console.log(mainCounter)
    
    sportSelector.setAttribute('data-button-counter',mainCounter);
    if(mainCounter === 5) {
        document.querySelector('.next').style.visibility = "hidden"
    } else if(mainCounter !=5) {
         document.querySelector('.next').style.visibility = "visible";
         if (document.querySelector('.previous').style.visibility = "hidden") {
             document.querySelector('.previous').style.visibility = "visible";
         }
    }












    let thirdCard = document.getElementById('third-card');
    let thirdCounter = thirdCard.getAttribute('data-sport-counter');
    thirdCounter ++;
    let thirdCardSVG = thirdCard.querySelector('svg');

    gsap.to(thirdCardSVG, {duration:0.15, opacity:0});

    thirdCard.setAttribute('data-sport-counter',thirdCounter);

    setTimeout(() => {
        document.getElementById('tennis-svg-path').setAttribute('d', changeShadows(thirdCounter));
        gsap.to(thirdCardSVG, {duration:0.15, opacity:1});
    }, 150);
});









document.querySelector('.previous').addEventListener('click', function () {

    let sportSelector = document.querySelector('.sports-selector')
    let mainCounter = sportSelector.getAttribute('data-button-counter');
    mainCounter--;
    document.querySelector('.sports-selector h2').innerHTML = changeSportTitle(mainCounter);
    // console.log(mainCounter)

    sportSelector.setAttribute('data-button-counter', mainCounter);
    if (mainCounter === 1) {
        document.querySelector('.previous').style.visibility = "hidden"
    } else if (mainCounter != 1) {
        document.querySelector('.previous').style.visibility = "visible";
        if(document.querySelector('.next').style.visibility = "hidden") {
            document.querySelector('.next').style.visibility = "visible";
        }
    }
















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
});





















