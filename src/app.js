const head = document.getElementsByTagName('head')[0];
const cssLink = document.createElement('link');
cssLink.rel = 'stylesheet';
cssLink.href = './app.css';
head.appendChild(cssLink);
