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
    counter.style.setProperty('color', 'var(--decrease-color)');
  }
  if (count > 0) {
    counter.style.setProperty('color', 'var(--increase-color)');
  }
  if (count == 0) {
    counter.style.setProperty('color', 'var(--primary-color)');
  }
};
