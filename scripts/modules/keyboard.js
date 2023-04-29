// eslint-disable-next-line import/extensions
import createRow from "./keyboard-row.js";

// ! Keys Table
const keyboardCharsRu = [
  [
    "ё",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "Backspace",
  ],
  [
    "Tab",
    "й",
    "ц",
    "у",
    "к",
    "е",
    "н",
    "г",
    "ш",
    "щ",
    "з",
    "х",
    "ъ",
    "\\",
    "Del",
  ],
  ["CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter"],
  ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "▲", "Shift"],
  [
    "CtrlLeft",
    "Win",
    "AltLeft",
    "Space",
    "AltRight",
    "◄",
    "▼",
    "►",
    "CtrlRight",
  ],
];
const keyboardCharsEn = [
  [
    "`",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "Backspace",
  ],
  [
    "Tab",
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "[",
    "]",
    "\\",
    "Del",
  ],
  ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
  [
    "Shift",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    ",",
    ".",
    "/",
    "▲",
    "ShiftRight",
  ],
  ["Ctrl", "Win", "Alt", "Space", "Alt", "◄", "▼", "►", "Ctrl"],
];

const keyboardWrapper = document.createElement("div");

// ! Create Keyboard Rows
// eslint-disable-next-line no-plusplus
for (let i = 0; i < keyboardCharsEn.length; i++) {
  const keyboardRow = createRow(keyboardCharsRu[i], keyboardCharsEn[i]);
  keyboardWrapper.appendChild(keyboardRow);
}

keyboardWrapper.className = "body__keyboard keyboard";

export default keyboardWrapper;
