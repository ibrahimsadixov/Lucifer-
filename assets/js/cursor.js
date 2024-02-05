
const rootElement = document.documentElement;
rootElement.style.setProperty('--customBackgroundColor1', 'rgba(0,0,0,0.1)');
rootElement.style.setProperty('--customBackgroundColor2', 'rgba(0,0,0,0.4)');
rootElement.style.setProperty('--customBackgroundColor3', 'black');

function update(e){
 var x = e.clientX || e.touches[0].clientX
 var y = e.clientY || e.touches[0].clientY

 document.documentElement.style.setProperty('--cursorX', x + 'px')
 document.documentElement.style.setProperty('--cursorY', y + 'px')
}

document.addEventListener('mousemove', update)
document.addEventListener('touchmove', update)


