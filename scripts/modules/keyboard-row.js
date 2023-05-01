// eslint-disable-next-line import/extensions
import createKey from "./keyboard-key.js";

export default function createRow(rus, eng) {
  const keyboardRow = document.createElement("div");
  keyboardRow.className = "keyboard__row row";
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < rus.length; i++) {
    const key = createKey(rus[i], eng[i]);
    keyboardRow.appendChild(key);
  }
  return keyboardRow;
}
