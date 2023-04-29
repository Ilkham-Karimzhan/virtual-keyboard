// eslint-disable-next-line import/extensions
import createRow from "./modules/keyboard-row.js";

const head = document.querySelector("head");
const styleLink = document.createElement("link");
styleLink.setAttribute("rel", "stylesheet");
styleLink.setAttribute("href", "./style.css");
head.appendChild(styleLink);

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
];

const bodyPage = document.querySelector("body");
const keyboardWrapper = document.createElement("div");
const keyboardRow = createRow(keyboardCharsRu[0], keyboardCharsEn[0]);

keyboardWrapper.className = "body__keyboard keyboard";

keyboardWrapper.appendChild(keyboardRow);
bodyPage.appendChild(keyboardWrapper);
