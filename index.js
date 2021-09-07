const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  start: document.querySelector('[data-action="start"]'),
  stop: document.querySelector('[data-action="stop"]'),
  reset: document.querySelector('[data-action="reset"]'),
};

let intervalId = null;

function startClick() {
   intervalId = setInterval(() => {
    refs.start.disabled = true;
    refs.reset.disabled = true;
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    refs.body.style.backgroundColor = randomColor
  }, 1000)
};

function stopClick() {
  clearInterval(intervalId)
  refs.start.disabled = false;
  refs.reset.disabled = false;

}

// Доп функционал

function resetClick() {
    clearInterval(intervalId)
  refs.body.style.backgroundColor = '#FFFFFF';
}


refs.start.addEventListener('click', startClick);
refs.stop.addEventListener('click', stopClick)
refs.reset.addEventListener('click', resetClick)