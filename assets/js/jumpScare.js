const jumpScare = document.getElementById('jumpScare');
const jumpScareSound = document.getElementById('jumpScare-sound');

function showJumpScare() {
  const random = Math.floor(Math.random() * 2);
  console.log(random)

  if (random === 1) {
    jumpScare.style.display = 'flex';
    jumpScareSound.play();

    setTimeout(() => {
      jumpScare.style.display = 'none';
    }, 1000);
  }
}

function randomizeInterval() {
  const minInterval = 10000;
  const maxInterval = 40000;
  return Math.floor(Math.random() * (maxInterval - minInterval + 1)) + minInterval;
}

function checkAndRunJumpScare() {
  if (!win) {
    showJumpScare();
  }
}

let intervalId = setInterval(checkAndRunJumpScare, randomizeInterval());
