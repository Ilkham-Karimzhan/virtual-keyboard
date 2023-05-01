/* eslint-disable no-restricted-syntax */
export default function changeRegister(language, keyboardWrapper) {
  for (const row of keyboardWrapper.children) {
    for (const key of row.children) {
      if (language === "rus") {
        key
          .querySelector(".rus")
          .querySelector(".caseDown")
          .classList.toggle("hidden");
        key
          .querySelector(".rus")
          .querySelector(".caseUp")
          .classList.toggle("hidden");
      } else {
        key
          .querySelector(".eng")
          .querySelector(".caseDown")
          .classList.toggle("hidden");
        key
          .querySelector(".eng")
          .querySelector(".caseUp")
          .classList.toggle("hidden");
      }
    }
  }
}
