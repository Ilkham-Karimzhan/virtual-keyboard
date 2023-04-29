import createKey from "./keyboard-key";

const bodyPage = document.querySelector("body");
const keyboardWrapper = document.createElement("div");
const keyboardRow = document.createElement("div");
// const keyboardKey = document.createElement("div");

// const keyboardCharsRu = [
//   [
//     "ё",
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "0",
//     "-",
//     "=",
//     "Backspace",
//   ],
// ];
// const keyboardCharsEn = [
//   [
//     "`",
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "0",
//     "-",
//     "=",
//     "Backspace",
//   ],
// ];

// keyboardWrapper.className = "body__keyboard keyboard";
// keyboardRow.className = "keyboard__row row";
// keyboardKey.className = "keyboard__key key";

const keyboardKey = createKey("й", "q");
keyboardRow.appendChild(keyboardKey);
keyboardWrapper.appendChild(keyboardRow);
bodyPage.appendChild(keyboardWrapper);
