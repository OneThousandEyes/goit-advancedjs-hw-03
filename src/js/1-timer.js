import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  dateInput: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let userSelectedDate = null;
let timerId = null;

refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (!selectedDate || selectedDate <= new Date()) {
      userSelectedDate = null;
      refs.startBtn.disabled = true;

      iziToast.error({
        message: 'Please choose a date in the future',
        position: 'topCenter',
      });

      return;
    }

    userSelectedDate = selectedDate;
    refs.startBtn.disabled = false;
  },
};

flatpickr(refs.dateInput, options);

refs.startBtn.addEventListener('click', onStartBtnClick);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function onStartBtnClick() {
  refs.startBtn.disabled = true;
  refs.dateInput.disabled = true;

  updateTimer();
  timerId = setInterval(updateTimer, 1000);
}

function updateTimer() {
  const timeLeft = userSelectedDate - new Date();

  if (timeLeft <= 0) {
    clearInterval(timerId);
    refs.dateInput.disabled = false;
    renderTimer(0);
    return;
  }

  renderTimer(timeLeft);
}

function renderTimer(ms) {
  const { days, hours, minutes, seconds } = convertMs(ms);

  refs.days.textContent = addLeadingZero(days);
  refs.hours.textContent = addLeadingZero(hours);
  refs.minutes.textContent = addLeadingZero(minutes);
  refs.seconds.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
