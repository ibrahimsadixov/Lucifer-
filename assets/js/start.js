
  const btn = document.getElementById("btn");
  const form = document.getElementById("form");
  const starting = document.getElementById("starting");
  const img = document.getElementById("img");
  const text = document.getElementById('text');
  const message = 'Let The Light Guide You!';
  let index = 0;
  let userName = document.getElementById("name")

  btn.addEventListener("click", (event) => {
    event.preventDefault();
        if (userName.value == '') {
      return;
    }
    
    localStorage.setItem("nameLucifer", userName.value);
    form.style.display = "none";
    starting.style.display = "flex";
    animation();
    type();
    setTimeout(() => {
      form.submit(); 
    }, 11000);
  });
  
  

function animation() {
    setTimeout(() => {
        img.style.animation = "none"; 
        setTimeout(() => {
          window.location.href = "game.htm";
      }, 100);
      }, 9900);
    
}



function type() {
  if (index < message.length) {
    text.textContent += message.charAt(index) ;
    index++;
    setTimeout(type, 150);
  }
}






