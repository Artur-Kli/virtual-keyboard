import keyLayout from './modules/key-layout.js';
import Keyboard from './modules/keyboard.js';

const head = document.getElementsByTagName('head')[0];
const cssLink = document.createElement('link');
cssLink.rel = 'stylesheet';
cssLink.href = './app.css';
head.appendChild(cssLink);

const keyboard = new Keyboard();
keyboard.createKeys(keyLayout);
