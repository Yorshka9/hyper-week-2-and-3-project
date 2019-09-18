let missed = 0;
const qwerty = document.getElementById("qwerty");
const letters = document.getElementsByClassName("letter");
const shownLetters = document.getElementsByClassName("show");
const overlay = document.getElementById("overlay");
const ul = document.getElementsByTagName("ul")[0];
const buttons = document.getElementsByTagName("button");
const lifeBar = document.getElementsByTagName("img");
const buttonReset = document.querySelector(".btn_reset");
const buttonBacktoMenu = document.querySelector(".btn_back_to_menu");
const button_level_2 = document.querySelector(".btn_level_2")
const overlayTitle = document.querySelector("h2");
let reset = false;

 function gabeQueenAudio() {
   let gabeQueenAudio = document.getElementById("GabeAudio").autoplay;
 }


const dogBreeds = [
    "Labrador Retriever",
    "Pug",
    "Siberian Husky",
    "French Bulldog",
    "Pumi",
    "Beagle",
    "Pomeranian",
    "Poodle",
    "Chihuahua",
    "Boxer",
    "German Sheperd",
    "Pitbull",
    "Shiba Inu",
    "Dobermann",
    "Border Collie"];

// get a random breed and split that phrase into array of letters
function getRandomDogBreedAsArray(arr) {
    let randomBreed = Math.floor(Math.random() * arr.length);
    return arr[randomBreed].split("");
 }
 
 /* loop through the array of letters and create a list item for each character and store it in the ul.
    assign letters with the class 'letter' and space with the class 'space' */
 function addBreedToDisplay(arr) {
    for (let i = 0; i < arr.length; i += 1) {
       const createLi = document.createElement("li");
       createLi.textContent = arr[i];
       ul.appendChild(createLi);
       if (arr[i].match(/^[A-Za-z]+$/)) {
          createLi.className = "letter";
       } else {
          createLi.className = "space";
       }
    }
 }
 
 // variable for calling the two functions
 const breedArray = getRandomDogBreedAsArray(dogBreeds);
 addBreedToDisplay(breedArray);
 
 /* checkLetter checks if the selected letter matches with any letter in the phrase.
    if there's a match, assign the selected letter with class "show" */
 function checkLetter(btn) {
    let guessed = false;
    for (let i = 0; i < letters.length; i += 1) {
       if (btn.target.textContent === letters[i].textContent.toLowerCase()) {
          letters[i].className += " show";
          guessed = true;
       }
    }
    return guessed;
 }


  // function for resetting the game back to default values. it is called when the reset button is clicked
  function resetGame() {
    if (reset === true) {
       missed = 0;
       // reset heart default value back to lifebar.length after every game
       for (let i = 0; i < lifeBar.length; i += 1) {
          lifeBar[i].src = "images/liveHeart.png";
       }
   /*  for (let i = 0; i < letters.length; i += 1) {
          letters[i].className = "letter";
       } 
      */
       // reset every pressed button back to default state(remove disabled state) and color
       for (let i = 0; i < buttons.length; i += 1) {
          buttons[i].className = "";
          buttons[i].disabled = false;
       }
       // reset button will remove the li in the ul
       const li = document.querySelectorAll(".letter, .space");
       for (let i = 0; i < li.length; i += 1) {
          ul.removeChild(li[i]);
       }
       // create a new random array and add it to the ul
       const newDogBreedArray = getRandomDogBreedAsArray(dogBreeds);
       addBreedToDisplay(newDogBreedArray);
    }
 }


  // display the two screens depending on whether the player wins or loses
  // if the number of letters matches with the displayed letters
  function checkWin() {
    if (letters.length === shownLetters.length) {
       overlay.style.display = "";
       overlay.className = "win";
       overlayTitle.innerHTML = "Congratulations, you won!! :^)";
       buttonReset.textContent = "Play again";
       button_level_2.style.display = 'none';
       buttonBacktoMenu.className = 'btn_back_to_menu';
       reset = true;
   // if missed = 5 (lifebar depleted) display lose
    } else if (missed === 5) {
       overlay.style.display = "";
       overlay.className = "lose";
       overlayTitle.innerHTML = "Oh, no! Game Over :^(";
       buttonReset.textContent = "Try again!";
       button_level_2.style.display = 'none';
       buttonBacktoMenu.className = 'btn_back_to_menu';
       document.createElement
       reset = true;
    }
 }


 
  // when a letter button is selected, assign it with the class "chosen" and disable it.
   
    qwerty.addEventListener("click", event => {
        const letterFound = checkLetter(event);
         if (event.target.tagName === "BUTTON") {
            event.target.className = "chosen";
            event.target.disabled = true;
   // if the checked letter is wrong, increment the value of 'missed' (++) and replace a liveHeart.png with a lostHeart.png 
            if (letterFound === false && missed < 5) {
              lifeBar[missed].setAttribute('src', 'images/lostHeart.png');
              missed++;
            }
         }
         checkWin();
      });

   // when the player click 'start game', hide the overlay. when player wins or loses the resetGame function is called 
   buttonReset.addEventListener("click", () => {
    overlay.style.display = "none";
    if (reset === true && missed === 5) {
       resetGame();
    } else {
       resetGame();

    }
 });
