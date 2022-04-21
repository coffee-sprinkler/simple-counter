const resetBtn = document.querySelector('[data-reset]');
const decreaseBtn = document.querySelector('[data-decrease]');
const increaseBtn = document.querySelector('[data-increase]');
const counter = document.querySelector('.counter');

let count = 0;

resetBtn.addEventListener('click', () => {
  count = 0;
  counter.innerHTML = 0;
  counterColor(count);
});

increaseBtn.addEventListener('click', () => {
  count++;
  counter.innerHTML = count;
  counterColor(count);
});

decreaseBtn.addEventListener('click', () => {
  count--;
  counter.innerHTML = count;
  counterColor(count);
});

const counterColor = count => {
  if (count < 0) {
    counter.classList.add('decrease');
    counter.classList.remove('increase');
    counter.classList.remove('reset');
  }
  if (count > 0) {
    counter.classList.add('increase');
    counter.classList.remove('decrease');
    counter.classList.remove('reset');
  }
  if (count == 0) {
    counter.classList.add('reset');
    counter.classList.remove('decrease');
    counter.classList.remove('increase');
  }
};
