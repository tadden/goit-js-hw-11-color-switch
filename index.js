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
};

let intervalId = null;

function startClick() {
   intervalId = setInterval(() => {
    refs.start.disabled = true;
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    refs.body.style.backgroundColor = randomColor
  }, 1000)
};

function stopClick() {
  clearInterval(intervalId)
  refs.start.disabled = false;
}


refs.start.addEventListener('click', startClick);
refs.stop.addEventListener('click', stopClick)