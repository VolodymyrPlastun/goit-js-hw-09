const refs = {
    start: document.querySelector('button[data-start]'),
    stop: document.querySelector('button[data-stop]'),
};
let timerId = null;
refs.start.addEventListener('click', OnBtnStartClick);
refs.stop.addEventListener('click', OnBtnStopClick);
refs.stop.setAttribute('disabled', 'disabled');

function OnBtnStartClick(evt) {
    refs.start.setAttribute('disabled', 'disabled'),
     refs.stop.removeAttribute('disabled', 'disabled')   
    timerId = setInterval(() => {
document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    
}
function OnBtnStopClick(evt) {
    refs.stop.setAttribute('disabled', 'disabled'),
      refs.start.removeAttribute('disabled', 'disabled'),  
    clearInterval(timerId);
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
