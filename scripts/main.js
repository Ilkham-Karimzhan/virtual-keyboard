/* eslint-disable import/extensions */
/* eslint-disable no-restricted-syntax */
import changeRegister from "./modules/changeKeyRegister.js";
import keyboardWrapper from "./modules/keyboard.js";
import setKeyStatus from "./modules/setKeyStatus.js";

// ! Add link to style.css
const head = document.querySelector("head");
const styleLink = document.createElement("link");
styleLink.setAttribute("rel", "stylesheet");
styleLink.setAttribute("href", "./style.css");
head.appendChild(styleLink);

const bodyPage = document.querySelector("body");
const textArea = document.createElement("textarea");
let language = "rus";

textArea.className = "body__textarea textarea";
textArea.setAttribute("rows", 5);
textArea.setAttribute("cols", 50);

bodyPage.appendChild(textArea);
bodyPage.appendChild(keyboardWrapper);

keyboardWrapper.addEventListener("mousedown", (event) => {
  if (event.target.innerHTML === "Shift") {
    changeRegister(language, keyboardWrapper);
  }
});
keyboardWrapper.addEventListener("mouseup", (event) => {
  if (event.target.innerHTML === "Shift") {
    changeRegister(language, keyboardWrapper);
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "CapsLock") {
    // CapsLock - Register
    changeRegister(language, keyboardWrapper);
  } else if (event.altKey && event.ctrlKey) {
    //   Alt + Ctrl - Language
    language = language === "eng" ? "rus" : "eng";
    for (const row of keyboardWrapper.children) {
      for (const key of row.children) {
        key.querySelector(".rus").classList.toggle("hidden");
        key.querySelector(".eng").classList.toggle("hidden");
        key
          .querySelector(".eng")
          .querySelector(".caseDown")
          .classList.toggle("hidden");
      }
    }
  } else if (event.key === " ") {
    textArea.innerHTML += " ";
  } else if (event.key === "Backspace") {
    textArea.innerHTML = textArea.innerHTML.slice(
      0,
      textArea.innerHTML.length - 1,
    );
  } else if (event.key === "Tab") {
    event.preventDefault();
    textArea.innerHTML += "   ";
  } else if (event.key === "Enter") {
    textArea.innerHTML += "\n";
  } else if (event.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
    setKeyStatus(keyboardWrapper, "CtrlLeft");
    return;
  } else if (event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
    setKeyStatus(keyboardWrapper, "CtrlRight");
    return;
  } else if (event.key === "Space") {
    setKeyStatus(keyboardWrapper, "Space");
    return;
  } else {
    if (
      event.key === "ArrowLeft"
      || event.key === "ArrowDown"
      || event.key === "ArrowUp"
      || event.key === "ArrowRight"
    ) {
      textArea.innerHTML += keyboardWrapper
        .querySelector(`.key${event.key}`)
        .querySelector(`.${language} span:not(.hidden)`).innerHTML;
    }
    textArea.innerHTML += keyboardWrapper
      .querySelector(`.key${event.key.toLocaleLowerCase()}`)
      .querySelector(`.${language} span:not(.hidden)`).innerHTML;
  }
  setKeyStatus(keyboardWrapper, event.key);
});

window.addEventListener("keydown", (event) => {
  if (event.shiftKey) {
    if (event.shiftKey && event.key !== "Shift") {
      changeRegister(language, keyboardWrapper);
    }
    changeRegister(language, keyboardWrapper);
    keyboardWrapper
      .querySelector(`.key${event.key}`)
      .classList.toggle("active");
  }
});
window.addEventListener("keyup", (event) => {
  if (event.key === "Shift") {
    changeRegister(language, keyboardWrapper);
    setKeyStatus(keyboardWrapper, event.key);
  } else if (event.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
    setKeyStatus(keyboardWrapper, "CtrlLeft");
    return;
  } else if (event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
    setKeyStatus(keyboardWrapper, "CtrlRight");
    return;
  }
  setKeyStatus(keyboardWrapper, event.key);
});

keyboardWrapper.addEventListener("click", (event) => {
   console.log(event.target);
  if (
    event.target.classList.contains("keyboard")
    || event.target.classList.contains("keyboard__row")
  ) {
    return;
  }
  if (event.target.innerHTML === "CapsLock") {
    changeRegister(language, keyboardWrapper);
  } else if (event.target.innerHTML === "Ctrl") {
    textArea.innerHTML += "";
  } else if (event.target.innerHTML === "Enter") {
    textArea.innerHTML += "\n";
  } else if (event.target.innerHTML === "Backspace") {
    textArea.innerHTML = textArea.innerHTML.slice(
      0,
      textArea.innerHTML.length - 1,
    );
  } else if (event.target.querySelector(".caseDown").innerHTML === "Shift") {
    textArea.innerHTML += "";
  } else {
    textArea.innerHTML += event.target.innerHTML;
  }
});
