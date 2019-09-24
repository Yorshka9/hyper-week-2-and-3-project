// sound variables

const levelSelect1 = document.querySelector(".choose-level-1");
const levelSelect2 = document.querySelector(".choose-level-2");
const levelSelect3 = document.querySelector(".choose-level-3");
const levelSelect4 = document.querySelector(".choose-level-4");
let levelSelected = new Audio('sounds/level-selected.mp3');
let chooseLevel = document.getElementById("chooseLevel");
let isPlaying = false;


    // when player selects a level, play obnoxious sound
        levelSelect1.addEventListener("click", () => {
        if (isPlaying === true) {
            levelSelected.play();
        }
      
       });

        // when player selects a level, play obnoxious sound
        levelSelect2.addEventListener("click", () => {
            if (isPlaying === true) {
                levelSelected.play();
            }
          
           });
    
        // when player selects a level, play obnoxious sound
        levelSelect3.addEventListener("click", () => {
            if (isPlaying === true) {
                levelSelected.play();
            }
          
           });

        // when player selects a level, play obnoxious sound
        levelSelect4.addEventListener("click", () => {
            if (isPlaying === true) {
                levelSelected.play();
            }
          
           });

function togglePlay(){
    if (isPlaying) {
        chooseLevel.pause()
    }   else {
        chooseLevel.play();
    }
};

chooseLevel.onplaying = function() {
    isPlaying = true;
};
chooseLevel.onpause = function() {
    isPlaying = false;
};
