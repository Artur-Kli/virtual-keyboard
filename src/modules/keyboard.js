import Key from './key.js';

class Keyboard {
  constructor() {
    this.wrapper = document.createElement('div');
    this.textareaDiv = document.createElement('div');
    this.textarea = document.createElement('textarea');
    this.keyboard = document.createElement('div');
    this.wrapper.classList.add('wrapper');
    this.textareaDiv.classList.add('textarea');
    this.keyboard.classList.add('keyboard');
    this.wrapper.append(this.textareaDiv);
    this.wrapper.append(this.keyboard);
    this.textareaDiv.append(this.textarea);
    document.body.prepend(this.wrapper);
    for (let i = 0; i < 5; i += 1) {
      this.row = document.createElement('div');
      this.row.classList.add('row');
      this.keyboard.append(this.row);
    }
    this.rows = document.querySelectorAll('.row');
  }

  createKeys(db) {
    Object.values(db).forEach((obj, index) => {
      const key = new Key();
      key.node.innerHTML = `${obj.en[0]}`;
      if (index < 14) {
        this.rows[0].appendChild(key.node);
      } else if (index < 29) {
        this.rows[1].appendChild(key.node);
      } else if (index < 42) {
        this.rows[2].appendChild(key.node);
      } else if (index < 55) {
        this.rows[3].appendChild(key.node);
      } else {
        this.rows[4].appendChild(key.node);
      }
    });
  }
}

export default Keyboard;
