export default function createKey(rus, eng) {
  const key = document.createElement("div");
  const keyRus = document.createElement("span");
  const keyEng = document.createElement("span");
  const caseDown = document.createElement("span");
  const caseUp = document.createElement("span");
  const caps = document.createElement("span");
  const shiftCaps = document.createElement("span");

  key.className = `keyboard__key key key${eng.toUpperCase()}`;
  keyRus.className = "rus";
  keyEng.className = "eng";
  caseDown.className = "caseDown";
  caseUp.className = "caseUp";
  caps.className = "caps";
  shiftCaps.className = "shiftCaps";

  caseDown.innerHTML = rus;
  caseUp.innerHTML = rus.toUpperCase();
  caps.innerHTML = rus.toUpperCase();
  shiftCaps.innerHTML = rus;
  keyRus.appendChild(caseDown);
  keyRus.appendChild(caseUp);
  keyRus.appendChild(caps);
  keyRus.appendChild(shiftCaps);
  key.appendChild(keyRus);

  caseDown.innerHTML = eng;
  caseUp.innerHTML = eng.toUpperCase();
  caps.innerHTML = eng.toUpperCase();
  shiftCaps.innerHTML = eng;
  keyEng.appendChild(caseDown);
  keyEng.appendChild(caseUp);
  keyEng.appendChild(caps);
  keyEng.appendChild(shiftCaps);
  key.appendChild(keyEng);
  console.log(key);
  return key;
}
