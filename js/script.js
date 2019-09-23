
const overlay = document.getElementById("overlay");
const buttonReset = document.querySelector(".btn_reset");
const buttonBacktoMenu = document.querySelector(".btn_back_to_menu");
const overlayTitle = document.querySelector("h2");
const levelSelect = document.querySelector(".choose-level");
let card = document.getElementsByClassName(".card");
let reset = false;

// sound variables
let choooseLevel = new Audio('sounds/choose-level.mp3');
let levelSelected = new Audio('sounds/level-selected.mp3');
let isPlaying = false;



//function for allowing the user to pause the background music when the a element is clicked
function togglePlay(){
    if (isPlaying) {
        chooseLevel.play()
    }   else {
        chooseLevel.pause();
    }
};


   // when player clicks on 'start game' hide the overlay and play obnoxious music
   buttonReset.addEventListener("click", () => {
    overlay.style.display = "none";
    chooseLevel.play();

    

 });

    // when player selects a level, play obnoxious sound
    levelSelect.addEventListener("click", () => {
    levelSelected.play();
  
   });

   /*
    // when player selects a level, play obnoxious sound
    levelSelect.addEventListener("mouseover", () => {
        levelSelected.play();
        chooseLevel.togglePlay();
      
       });
    */

       // function for la
       function delay (URL) {
        setTimeout( function() { window.location = URL }, 1500 );
    }


    //animsition jquery plugin settings

    $(document).ready(function() {
        $(".animsition").animsition({
          inClass: 'fade-in',
          outClass: 'zoom-in-lg',
          inDuration: 1500,
          outDuration: 2000,
          linkElement: '.animsition-link',
          // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
          loading: true,
          loadingParentElement: 'body', //animsition wrapper element
          loadingClass: 'animsition-loading',
          unSupportCss: [],
          loadingInner: '', // e.g '<img src="loading.svg" />'
          timeout: false,
          timeoutCountdown: 5000,
          onLoadEvent: true,
          browser: [ 'animation-duration', '-webkit-animation-duration'],
          // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
          // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
          overlay : false,
          overlayClass : 'animsition-overlay-slide',
          overlayParentElement : 'body',
          transition: function(url){ window.location.href = url; }
        });
      });