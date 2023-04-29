export default function createKey(ru, en) {
  let rus = ru; // key value in russian for left/right alt and ctrl check
  let eng = en; // key value in english for left/right alt and ctrl check

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

  if (rus === "▲") key.className = "keyboard__key key keyARROWUP";
  else if (rus === "ShiftRight") {
    rus = "Shift";
    key.className = "keyboard__key key keySHIFTRIGHT";
  } else if (rus === "◄") {
    key.className = "keyboard__key key keyARROWLEFT";
  } else if (rus === "▼") {
    key.className = "keyboard__key key keyARROWDOWN";
  } else if (rus === "►") {
    key.className = "keyboard__key key keyARROWRIGHT";
  } else if (rus === "Space") {
    key.className = "keyboard__key key keySPACE";
    rus = " ";
    eng = " ";
  } else if (rus === "CtrlLeft") {
    key.className = "keyboard__key key keyCTRLLEFT";
    rus = "Ctrl";
  } else if (rus === "CtrlRight") {
    key.className = "keyboard__key key keyCTRLRIGHT";
    rus = "Ctrl";
  } else if (rus === "AltLeft") {
    key.className = "keyboard__key key keyALTLEFT";
    rus = "Alt";
  } else if (rus === "AltRight") {
    key.className = "keyboard__key key keyALTRIGHT";
    rus = "Alt";
  } else key.className = `keyboard__key key key${eng.toUpperCase()}`;

  keyRus.className = "rus";
  caseDown.className = "caseDown";
  caseUp.className = "caseUp hidden";
  caps.className = "caps hidden";
  shiftCaps.className = "shiftCaps hidden";
  keyEng.className = "eng";
  caseDownEng.className = "caseDown hidden";
  caseUpEng.className = "caseUp hidden";
  capsEng.className = "caps hidden";
  shiftCapsEng.className = "shiftCaps hidden";

  caseDown.innerHTML = rus;
  caseUp.innerHTML = rus.toUpperCase();
  caps.innerHTML = rus.toUpperCase();
  shiftCaps.innerHTML = rus;
  keyRus.appendChild(caseDown);
  keyRus.appendChild(caseUp);
  keyRus.appendChild(caps);
  keyRus.appendChild(shiftCaps);
  key.appendChild(keyRus);

  caseDownEng.innerHTML = eng;
  caseUpEng.innerHTML = eng.toUpperCase();
  capsEng.innerHTML = eng.toUpperCase();
  shiftCapsEng.innerHTML = eng;
  keyEng.appendChild(caseDownEng);
  keyEng.appendChild(caseUpEng);
  keyEng.appendChild(capsEng);
  keyEng.appendChild(shiftCapsEng);
  key.appendChild(keyEng);
  return key;
}
