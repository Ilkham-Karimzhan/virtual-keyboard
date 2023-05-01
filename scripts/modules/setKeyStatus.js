export default function setKeyActiveStatus(keyboard, key) {
  keyboard.querySelector(`.key${key}`).classList.toggle("active");
}
