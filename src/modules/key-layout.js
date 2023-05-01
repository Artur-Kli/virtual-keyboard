const keyLayout = { // KeyCode : {en: [NORMAL, SHIFT, CAPS] ru: [NORMAL, RIGHTSHIFT, CAPS]}
  Backquote: {
    en: ['`', '~', '`'], ru: ['ё', 'Ё', 'Ё'],
  },
  Digit1: {
    en: ['1', '!', '1'], ru: ['1', '!', '1'],
  },
  Digit2: {
    en: ['2', '@', '2'], ru: ['2', '"', '2'],
  },
  Digit3: {
    en: ['3', '#', '3'], ru: ['3', '№', '3'],
  },
  Digit4: {
    en: ['4', '$', '4'], ru: ['4', ';', '4'],
  },
  Digit5: {
    en: ['5', '%', '5'], ru: ['5', '%', '5'],
  },
  Digit6: {
    en: ['6', '^', '6'], ru: ['6', ':', '6'],
  },
  Digit7: {
    en: ['7', '&', '7'], ru: ['7', '?', '7'],
  },
  Digit8: {
    en: ['8', '*', '8'], ru: ['8', '*', '8'],
  },
  Digit9: {
    en: ['9', '(', '9'], ru: ['9', '(', '9'],
  },
  Digit0: {
    en: ['0', ')', '0'], ru: ['0', ')', '0'],
  },
  Minus: {
    en: ['-', '_', '-'], ru: ['-', '_', '-'],
  },
  Equal: {
    en: ['=', '+', '='], ru: ['=', '+', '='],
  },
  Backspace: {
    en: ['Backspace', 'Backspace', 'Backspace'], ru: ['Backspace', 'Backspace', 'Backspace'],
  },
  Tab: {
    en: ['Tab', 'Tab', 'Tab'], ru: ['Tab', 'Tab', 'Tab'],
  },
  KeyQ: {
    en: ['q', 'Q', 'Q'], ru: ['й', 'Й', 'Й'],
  },
  KeyW: {
    en: ['w', 'W', 'W'], ru: ['ц', 'Ц', 'Ц'],
  },
  KeyE: {
    en: ['e', 'E', 'E'], ru: ['у', 'У', 'У'],
  },
  KeyR: {
    en: ['r', 'R', 'R'], ru: ['к', 'К', 'К'],
  },
  KeyT: {
    en: ['t', 'T', 'T'], ru: ['е', 'Е', 'Е'],
  },
  KeyY: {
    en: ['y', 'Y', 'Y'], ru: ['н', 'Н', 'Н'],
  },
  KeyU: {
    en: ['u', 'U', 'U'], ru: ['г', 'Г', 'Г'],
  },
  KeyI: {
    en: ['i', 'I', 'I'], ru: ['ш', 'Ш', 'Ш'],
  },
  KeyO: {
    en: ['o', 'O', 'O'], ru: ['щ', 'Щ', 'Щ'],
  },
  KeyP: {
    en: ['p', 'P', 'P'], ru: ['з', 'З', 'З'],
  },
  BracketLeft: {
    en: ['[', '{', '['], ru: ['х', 'Х', 'Х'],
  },
  BracketRigth: {
    en: [']', '}', ']'], ru: ['ъ', 'Ъ', 'Ъ'],
  },
  Backslash: {
    en: ['&bsol;', '&bsol;', '&bsol;'], ru: ['&bsol;', '&bsol;', '&bsol;'],
  },
  Delete: {
    en: ['Delete', 'Delete', 'Delete'], ru: ['Delete', 'Delete', 'Delete'],
  },
  CapsLock: {
    en: ['CapsLock', 'CapsLock', 'CapsLock'], ru: ['CapsLock', 'CapsLock', 'CapsLock'],
  },
  KeyA: {
    en: ['a', 'A', 'A'], ru: ['ф', 'Ф', 'Ф'],
  },
  KeyS: {
    en: ['s', 'S', 'S'], ru: ['ы', 'Ы', 'Ы'],
  },
  KeyD: {
    en: ['d', 'D', 'D'], ru: ['в', 'В', 'В'],
  },
  KeyF: {
    en: ['f', 'F', 'F'], ru: ['а', 'А', 'А'],
  },
  KeyG: {
    en: ['g', 'G', 'G'], ru: ['п', 'П', 'П'],
  },
  KeyH: {
    en: ['h', 'H', 'H'], ru: ['р', 'Р', 'Р'],
  },
  KeyJ: {
    en: ['j', 'J', 'J'], ru: ['о', 'О', 'О'],
  },
  KeyK: {
    en: ['k', 'K', 'K'], ru: ['л', 'Л', 'Л'],
  },
  KeyL: {
    en: ['l', 'L', 'L'], ru: ['д', 'Д', 'Д'],
  },
  Semicolon: {
    en: [';', ':', ';'], ru: ['ж', 'Ж', 'Ж'],
  },
  Quote: {
    en: ['&apos;', '&quot;', '&apos;'], ru: ['э', 'Э', 'Э'],
  },
  Enter: {
    en: ['Enter', 'Enter', 'Enter'], ru: ['Enter', 'Enter', 'Enter'],
  },
  ShiftLeft: {
    en: ['Shift', 'Shift', 'Shift'], ru: ['Shift', 'Shift', 'Shift'],
  },
  KeyZ: {
    en: ['z', 'Z', 'Z'], ru: ['я', 'Я', 'Я'],
  },
  KeyX: {
    en: ['x', 'X', 'X'], ru: ['ч', 'Ч', 'Ч'],
  },
  KeyC: {
    en: ['c', 'C', 'C'], ru: ['с', 'С', 'С'],
  },
  KeyV: {
    en: ['v', 'V', 'V'], ru: ['м', 'М', 'М'],
  },
  KeyB: {
    en: ['b', 'B', 'B'], ru: ['и', 'И', 'И'],
  },
  KeyN: {
    en: ['n', 'N', 'N'], ru: ['т', 'Т', 'Т'],
  },
  KeyM: {
    en: ['m', 'M', 'M'], ru: ['ь', 'Ь', 'Ь'],
  },
  Comma: {
    en: [',', '<', ','], ru: ['б', 'Б', 'Б'],
  },
  Period: {
    en: ['.', '>', '.'], ru: ['ю', 'Ю', 'Ю'],
  },
  Shash: {
    en: ['/', '?', '/'], ru: ['.', ',', '.'],
  },
  ArrowUp: {
    en: ['&#8593;', '&#8593;', '&#8593;'], ru: ['&#8593;', '&#8593;', '&#8593;'],
  },
  ShiftRight: {
    en: ['Shift', 'Shift', 'Shift'], ru: ['Shift', 'Shift', 'Shift'],
  },
  ControlLeft: {
    en: ['Ctrl', 'Ctrl', 'Ctrl'], ru: ['Ctrl', 'Ctrl', 'Ctrl'],
  },
  MetaLeft: {
    en: ['Win', 'Win', 'Win'], ru: ['Win', 'Win', 'Win'],
  },
  AltLeft: {
    en: ['Alt', 'Alt', 'Alt'], ru: ['Alt', 'Alt', 'Alt'],
  },
  Space: {
    en: ['Space', 'Space', 'Space'], ru: ['Space', 'Space', 'Space'],
  },
  AltRight: {
    en: ['Alt', 'Alt', 'Alt'], ru: ['Alt', 'Alt', 'Alt'],
  },
  ArrowLeft: {
    en: ['&#8592;', '&#8592;', '&#8592;'], ru: ['&#8592;', '&#8592;', '&#8592;'],
  },
  ArrowDown: {
    en: ['&#8595;', '&#8595;', '&#8595;'], ru: ['&#8595;', '&#8595;', '&#8595;'],
  },
  ArrowRight: {
    en: ['&#8594;', '&#8594;', '&#8594;'], ru: ['&#8594;', '&#8594;', '&#8594;'],
  },
  ControlRight: {
    en: ['Ctrl', 'Ctrl', 'Ctrl'], ru: ['Ctrl', 'Ctrl', 'Ctrl'],
  },
};

export default keyLayout;
