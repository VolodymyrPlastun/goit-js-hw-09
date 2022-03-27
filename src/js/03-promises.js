import Notiflix from 'notiflix';

const form = document.querySelector('.form');
form.addEventListener('submit', onBtnClick);

function onBtnClick(evt) {
  evt.preventDefault();
  const { delay, step, amount } = evt.currentTarget;
  
  let delayPromise = Number(delay.value);

  for (let i = 1; i <= amount.value; i++) {
    createPromise(i, delayPromise)
        .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
  });
    delayPromise += Number(step.value);
  };
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay})
      } else {
        reject({position, delay})
      }
    }, delay)
  })
}

 



