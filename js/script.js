
const overlay = document.getElementById("overlay");
const buttonReset = document.querySelector(".btn_reset");
const buttonBacktoMenu = document.querySelector(".btn_back_to_menu");
const overlayTitle = document.querySelector("h2");
const levelSelect = document.querySelector(".choose-level");
let reset = false;

// sound variables
let chooseLevel = new Audio('sounds/choose-level.mp3');
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
    chooseLevel.pause();
  
   });

   // function for 
   function play_single_sound(target) {
   document.getElementById(target).play();
}

function newPage(url) {
    location.href = url;
}

function playThenRedirectTo(audioTarget, url) {
    var time = 0;

    play_single_sound(audioTarget);

    setInterval(function () {
        var end = document.getElementById(audioTarget).played.end(0);
        if (end > time) {
            time = end;
        } else {
            newPage(url);
        }
    }, 250);
}