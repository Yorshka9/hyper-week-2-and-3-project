

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

    // take a random phrase and split that phrase into an array of letters
    function getRandomDogBreedsAsArray(arr) {
        let randomPhrase = Math.floor(Math.random() * arr.length);
        return arr[randomPhrase].split("");
    }

    /* loop through the array of letter and create a list item for each character
    and store it in the ul. assign letters wit the class 'letter' and space with the class 'space' */
    function addBreedToDisplay(arr) {
        for (let i = 0; i < arr.length; i += 1) {
            const createLi = document.createElement('li');
            createLi.textContent = arr[i];
            ul.appendChild(createLi);
            if (arr[i].match(/^[A-Za-z]+$/)) {
                createLi.className = 'letter';
            }   else {
                createLi.className = 'space';
            }
        }
    }

    // variable for calling the two functions

    const dogBreedArray = getRandomDogBreedsAsArray(dogBreeds);
    addBreedToDisplay(phraseArray);

    /* checkLetter cheks if the selected letter matches with any letter in the phrase.
        if there is a match, assign the selected letter with class 'show' */
    
    function checkLetter(btn) {
        let guessed = false; 
        for (let i = 0; i < letters.length; i += 1) {
            if (btn.target.textContent === letters[i].textContent.toLocaleLowerCase()) {
                letters[i].className += ' show';
                guessed = true;
            }
        }
        return guessed;
    }

    // resetGame resets the game back to default values. it is called when the reset button is pressed
    function resetGame() {
        if (reset === true) {
            missed = 0;
            for (let i = 0; i < lifeBar.length; i += 1) {
                lifeBar[i].src = "images/liveHeart.png";
            }
            for (let i = 0; i < letters.length; i += 1) {
                letters[i].className = 'letter';
            }
            for (let i = 0; i < buttons.length; i += 1) {
                buttons[i].classname = '';
                buttons[i].disabled = false;
            }
            const li = document.querySelectorAll('.letter, .space');
            for (let i =0; i <li.length; i += 1) {
                ul.removeChild(li[i]);
            }
            const newBreedArray = getRandomDogBreedsAsArray(dogBreeds);
            addBreedToDisplay(newBreedArray);
        }
    }

    // display the two screens depending on whether the player wins or loses
    function checkWin() {
        if (letters.length === shownLetters.length) {
            overlay.style.display = '';
            overlay.classname = 'win';
            overlayTitle.innerHTML = 'Congratulations, you won!!';
            buttonReset.textContent = 'Play again';
            reset = true;
        }   else if (missed === 5) {
            overlay.style.display = '';
            overlay.className = 'lose';
            overlayTitle.innerHTML = 'Oh, no! Game over :^((';
            buttonReset.textContent = 'Try again!';
            reset = true;
        }
    }

    /* when a letter is selected, assign it with the class 'chosen' and disable it.
    if the checked letter is wrong, increment the value of 'missed' and replace liveHeart with a lostHeart.png */
    qwerty.addEventListener('click', event => {
        const letterFound = checkLetter(event);
        if (event.target.tagName === 'BUTTON') {
            event.target.className = 'chosen';
            event.target.disabled = true;
            if (letterFound === false && missed < 5) {
                lifeBar[missed].setAttribute('src', 'images/lostHeart.png');
                missed++;
            }
        }
        checkWin();
    });

    // when the player clicks 'start game', hide the overlay. when player wins or loses the resetGame function is called
    buttonReset.addEventListener('click', () => {
        overlay.style.display = 'none';
        if (reset === true & missed === 5) {
            resetGame();
        } else {
            resetGame();
        }
    });
