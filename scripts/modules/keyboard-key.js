/* eslint-disable prefer-destructuring */
export default function createKey(ru, en) {
  const rus = ru; // key value in russian for left/right alt and ctrl check
  const eng = en; // key value in english for left/right alt and ctrl check

  const key = document.createElement("div");
  const keyRus = document.createElement("span");
  const keyEng = document.createElement("span");

  const caseDown = document.createElement("span");
  const caseUp = document.createElement("span");
  const caps = document.createElement("span");
  const shiftCaps = document.createElement("span");

  const caseDownEng = document.createElement("span");
  const caseUpEng = document.createElement("span");
  const capsEng = document.createElement("span");
  const shiftCapsEng = document.createElement("span");

  if (rus[1] === "▲") key.className = "keyboard__key key keyArrowUp";
  else if (rus[1] === "ShiftRight") {
    rus[1] = "Shift";
    key.className = "keyboard__key key keyShiftRight";
  } else if (rus[1] === "◄") {
    key.className = "keyboard__key key keyArrowLeft";
  } else if (rus[1] === "▼") {
    key.className = "keyboard__key key keyArrowDown";
  } else if (rus[1] === "►") {
    key.className = "keyboard__key key keyArrowRight";
  } else if (rus[1] === "Space") {
    key.className = "keyboard__key key keySpace";
    rus[1] = " ";
    eng[1] = " ";
  } else if (rus[1] === "CtrlLeft") {
    key.className = "keyboard__key key keyCtrlLeft";
    rus[1] = "Ctrl";
  } else if (rus[1] === "CtrlRight") {
    key.className = "keyboard__key key keyCtrlRight";
    rus[1] = "Ctrl";
  } else if (rus[1] === "AltLeft") {
    key.className = "keyboard__key key keyAltLeft";
    rus[1] = "Alt";
  } else if (rus[1] === "AltRight") {
    key.className = "keyboard__key key keyAltRight";
    rus[1] = "Alt";
  } else key.className = `keyboard__key key key${eng[1]} key${eng[2]}`;

  keyRus.className = "rus";
  caseDown.className = "caseDown";
  caseUp.className = "caseUp hidden";
  caps.className = "caps hidden";
  shiftCaps.className = "shiftCaps hidden";

  keyEng.className = "eng hidden";
  caseDownEng.className = "caseDown hidden";
  caseUpEng.className = "caseUp hidden";
  capsEng.className = "caps hidden";
  shiftCapsEng.className = "shiftCaps hidden";

  caseDown.innerHTML = rus[1];
  caseUp.innerHTML = rus[2];
  caps.innerHTML = rus[3];
  shiftCaps.innerHTML = rus[4];
  keyRus.appendChild(caseDown);
  keyRus.appendChild(caseUp);
  keyRus.appendChild(caps);
  keyRus.appendChild(shiftCaps);
  key.appendChild(keyRus);

  caseDownEng.innerHTML = eng[1];
  caseUpEng.innerHTML = eng[2];
  capsEng.innerHTML = eng[3];
  shiftCapsEng.innerHTML = eng[4];
  keyEng.appendChild(caseDownEng);
  keyEng.appendChild(caseUpEng);
  keyEng.appendChild(capsEng);
  keyEng.appendChild(shiftCapsEng);
  key.appendChild(keyEng);

  return key;
}
