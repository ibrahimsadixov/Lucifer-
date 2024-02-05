const musicbg = document.querySelector(".musicbg");
const music = document.querySelector(".music");
const musicScare = document.querySelector(".music-scare");

let win = false
musicPLaying = true
musicbg.addEventListener("click", () => {
  if (!musicPLaying) {
    music.play();
    musicScare.play();
    musicPLaying=true
    musicbg.style.textDecoration="none";
  } else if(musicPLaying) {
    music.pause();
    musicScare.pause();
    musicPLaying=false
    musicbg.style.textDecoration="line-through";
  }
});


