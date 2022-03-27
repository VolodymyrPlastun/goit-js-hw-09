import Notiflix from 'notiflix';
const form = document.querySelector('.form');
const runBtn = document.querySelector('button');
const amountInput = document.querySelector('input[name="amount"]');
const firstDelay = document.querySelector('input[name="delay"]');
const delayStep = document.querySelector('input[name="step"]');


form.addEventListener('submit', onBtnClick);

let position = amountInput.textContent;
 let delay = firstDelay.textContent;
 let step = delayStep.textContent;
function onBtnClick(evt) {
  evt.preventDefault();
 
  for (let position = 0; position < evt.length; delay += step) {
    // const element = evt[position];
    console.log(evt);
  }
  createPromise(`${position}`, `${delay}`)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
  });

}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    let step = delayStep.textContent;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay})
      } else {
        reject({position, delay})
      }
    }, step)
  })
}

 



