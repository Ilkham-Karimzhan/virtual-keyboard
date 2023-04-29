// eslint-disable-next-line import/extensions
import keyboardWrapper from "./modules/keyboard.js";

// ! Add link to style.css
const head = document.querySelector("head");
const styleLink = document.createElement("link");
styleLink.setAttribute("rel", "stylesheet");
styleLink.setAttribute("href", "./style.css");
head.appendChild(styleLink);

const bodyPage = document.querySelector("body");
const textArea = document.createElement("textarea");

textArea.className = "body__textarea textarea";
textArea.setAttribute("rows", 5);
textArea.setAttribute("cols", 50);

bodyPage.appendChild(textArea);
bodyPage.appendChild(keyboardWrapper);
