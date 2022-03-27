import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const timeTable = document.querySelectorAll('.value');
const startBtn = document.querySelector('button[data-start');
const timeInput = document.querySelector('#datetime-picker');
startBtn.setAttribute('disabled', 'disabled');



const options = {
    intervalId: null,
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] - Date.now() < 0) {
            Notiflix.Notify.failure(`Please choose a date in the future`)
            return;
      }
        startBtn.removeAttribute('disabled', 'disabled');
    },
    

};

flatpickr('#datetime-picker', options);

startBtn.addEventListener('click', () => {
    let intervalId = null;
    intervalId = setInterval(() => {

                const startTime = Date.now();
                const curretTime = new Date(timeInput.value);
        const finalTime = curretTime - startTime;
        console.log(finalTime);
                const time = convertMs(finalTime);

        // останавливается на -1
                 if (finalTime < 0) {
                     clearInterval(intervalId);
                     return;
        }
        updateTime(time);
    }, 1000);
   
        // }
})

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function updateTime({ days, hours, minutes, seconds }) {
    timeTable[0].textContent = `${days}`;
    timeTable[1].textContent = `${hours}`;
    timeTable[2].textContent = `${minutes}`;
    timeTable[3].textContent = `${seconds}`;
};