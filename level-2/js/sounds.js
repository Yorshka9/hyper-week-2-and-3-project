
let gabeAudio = document.getElementById("gabeAudio");
let isPlaying = false;

function togglePlay(){
    if (isPlaying) {
        gabeAudio.pause()
    }   else {
        gabeAudio.play();
    }
};

gabeAudio.onplaying = function() {
    isPlaying = true;
};
gabeAudio.onpause = function() {
    isPlaying = false;
};