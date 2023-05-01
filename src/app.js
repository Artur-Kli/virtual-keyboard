import keyLayout from './modules/key-layout.js';
import Keyboard from './modules/keyboard.js';

const head = document.getElementsByTagName('head')[0];
const normalizeLink = document.createElement('link');
const cssLink = document.createElement('link');
normalizeLink.rel = 'stylesheet';
cssLink.rel = 'stylesheet';
normalizeLink.href = './normalize.css';
cssLink.href = './app.css';
head.append(normalizeLink);
head.append(cssLink);

const keyboard = new Keyboard();
keyboard.createKeys(keyLayout);

const keys = document.querySelectorAll('.key');
keys.forEach((key, index) => {
  key.setAttribute('id', `${Object.keys(keyLayout)[index]}`);
});

const textarea = document.querySelector('textarea');
textarea.addEventListener('click', () => {
  textarea.focus();
});

keyboard.keyboard.addEventListener('mousedown', (event) => {
  const { target } = event;
  if (target.classList.contains('key')) {
    target.classList.add('active');
    textarea.value += event.target.textContent;
  }
});

keyboard.keyboard.addEventListener('mouseup', (event) => {
  const { target } = event;
  if (target.classList.contains('key')) {
    target.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (document.getElementById(event.code)) {
    document.getElementById(event.code).classList.add('active');
  }
});

document.addEventListener('keyup', (event) => {
  if (document.getElementById(event.code)) {
    document.getElementById(event.code).classList.remove('active');
  }
});
