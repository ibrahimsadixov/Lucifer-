const time = document.getElementById("time");
let secondsLeft = 600;
let isOver = false

function timer() {

    setInterval(() => {
        secondsLeft--;
        const minutes = Math.floor(secondsLeft / 60);
        const seconds = secondsLeft % 60;
        time.textContent ="Time: "+ `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
        if (secondsLeft === 0) {
          clearInterval(intervalId);
          document.body.innerHTML = `<div id="game-over"><p>YOU LITTLE DUMB!</p><h2>Game Over!</h2> 
          <audio class="music" src="https://rr2---sn-p5qlsn7d.googlevideo.com/videoplayback?expire=1707051965&ei=XDe_ZdH8OKColu8PsYWE2AI&ip=181.41.206.48&id=o-AKI6iOd-hpBEJ6ECgsU1_PPbdHgNp3C-g7xm5K1Drgvr&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&vprv=1&svpuc=1&mime=audio%2Fmp4&gir=yes&clen=177014&dur=10.890&lmt=1626455175542291&keepalive=yes&fexp=24007246&c=ANDROID&txp=5311222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIhAJYLP2kABY8l0cHj0YUNOvhl5PXgb0aqtqS8rHBgskrOAiAbHYNqeWIDGg1Fjztb760VXYBF-V9FLLJOSJj-uKM8DQ%3D%3D&redirect_counter=1&rm=sn-q4felk7e&req_id=5525a1cfee64a3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=GN&mip=38.44.29.219&mm=31&mn=sn-p5qlsn7d&ms=au&mt=1707029340&mv=u&mvi=2&pl=21&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AAO5W4owRAIgZL3Prx843H01oojDFlFRb6bTsfXYSSSml7r_6BrQIiECIDXoajEO0OzQL0JnM1MFABskWcLzTov9uy3AMG_Go9yV" autoplay ></audio>
          <a class="restart" href="index.htm"> RESTART </a>
          </div>`;
          document.body.style.height="100vh"
        }
      }, 1000);
      if (isOver) {
        return;
      }
}


timer()

