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
