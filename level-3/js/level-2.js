let missed = 0;
const qwerty = document.getElementById("qwerty");
const letters = document.getElementsByClassName("letter");
const shownLetters = document.getElementsByClassName("show");
const overlay = document.getElementById("overlay");
const ul = document.getElementsByTagName("ul")[0];
const buttons = document.getElementsByTagName("button");
const lifeBar = document.getElementsByTagName("img");
const buttonReset = document.querySelector(".btn_reset");
const overlayTitle = document.querySelector("h2");
let reset = false;

const phrases = [
"Man of Few Words", 
"Keep Your Eyes Peeled", 
"Raining Cats and Dogs", 
"Elephant in the Room",
"Let There Be Light",
"Head Over Heels",
"As cool as a cucumber",
"Take with a grain of salt",
"Spill The Beans", 
"Throw In the Towel",
"You Are Not Prepared"];




// get a random phrase and split that phrase into array of letters
function getRandomPhraseAsArray(arr) {
    let randomPhrase = Math.floor(Math.random() * arr.length);
    return arr[randomPhrase].split("");
 }
 
 /* loop through the array of letters and create a list item for each character and store it in the ul.
    assign letters with the class 'letter' and space with the class 'space' */
 function addPhraseToDisplay(arr) {
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
 const phraseArray = getRandomPhraseAsArray(phrases);
 addPhraseToDisplay(phraseArray);
 
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
       for (let i = 0; i < lifeBar.length; i += 1) {
          lifeBar[i].src = "images/liveHeart.png";
       }
       for (let i = 0; i < letters.length; i += 1) {
          letters[i].className = "letter";
       }
       for (let i = 0; i < buttons.length; i += 1) {
          buttons[i].className = "";
          buttons[i].disabled = false;
       }
       const li = document.querySelectorAll(".letter, .space");
       for (let i = 0; i < li.length; i += 1) {
          ul.removeChild(li[i]);
       }
       const newPhraseArray = getRandomPhraseAsArray(phrases);
       addPhraseToDisplay(newPhraseArray);
    }
 }

  // display the two screens depending on whether the player wins or loses
  function checkWin() {
    if (letters.length === shownLetters.length) {
       overlay.style.display = "";
       overlay.className = "win";
       overlayTitle.innerHTML = "Congratulations, you won!! :^)";
       buttonReset.textContent = "Play again";
       reset = true;
    } else if (missed === 3) {
       overlay.style.display = "";
       overlay.className = "lose";
       overlayTitle.innerHTML = "Oh, no! Game Over :^(";
       buttonReset.textContent = "Try again!";
       reset = true;
    }
 }

    // hide back-to-meny button when already on the menu
    function hide() {
        document.querySelector('.btn_back_to_menu').className = 'hide'; 
    }

    hide();

 
  /* when a letter is selected, assign it with the class "chosen" and disable it.
    if the checked letter is wrong, increment the value of 'missed' and replace a liveHeart.png with a lostHeart.png */
    qwerty.addEventListener("click", event => {
        const letterFound = checkLetter(event);
         if (event.target.tagName === "BUTTON") {
            event.target.className = "chosen";
            event.target.disabled = true;
            if (letterFound === false && missed < 3) {
              lifeBar[missed].setAttribute('src', 'images/lostHeart.png');
              missed++;
            }
         }
         checkWin();
      });

   // when the player click 'start game', hide the overlay. when player wins or loses the resetGame function is called 
   buttonReset.addEventListener("click", () => {
    overlay.style.display = "none";
    if (reset === true && missed === 3) {
       resetGame();
    } else {
       resetGame();

    }
 });
 

