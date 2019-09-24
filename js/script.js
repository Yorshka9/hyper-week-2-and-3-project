
const overlay = document.getElementById("overlay");
const buttonReset = document.querySelector(".btn_reset");
const buttonBacktoMenu = document.querySelector(".btn_back_to_menu");
const overlayTitle = document.querySelector("h2");
let card = document.getElementsByClassName(".card");
let reset = false;



    // when player clicks on 'start game' hide the overlay 
    buttonReset.addEventListener("click", () => {
        overlay.style.display = "none";

    });


       // function for delaying hyperlinks in order for sounds to play its full duration (red flag, i know)
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