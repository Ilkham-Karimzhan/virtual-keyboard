export default function createKey(rus, eng) {
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

  key.className = `keyboard__key key key${eng.toUpperCase()}`;
  keyRus.className = "rus";
  keyEng.className = "eng";
  caseDown.className = "caseDown";
  caseUp.className = "caseUp hidden";
  caps.className = "caps hidden";
  shiftCaps.className = "shiftCaps hidden";

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
