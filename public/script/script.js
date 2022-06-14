const lenBox = document.querySelector(".len");
const charBox = document.querySelector(".cha");
const numBox = document.querySelector(".num");
const lowerBox = document.querySelector(".low");
const upperBox = document.querySelector(".upp");
const genPass = document.querySelector(".generated--password");
const genBtn = document.querySelector(".btn");

import { generatePass } from "./generatinPass";

genBtn.addEventListener("click", (e) => {
  const len = lenBox.value;
  const incChar = charBox.checked;
  const incNum = numBox.checked;
  const incLow = lowerBox.checked;
  const incUpp = upperBox.checked;

  if (len < 4 || len >= 30) {
    genPass.textContent = "Length must be betweeb 5 and 100!";
    return;
  }

  if (!incChar && !incNum && !incLow && !incUpp) {
    genPass.textContent = "You have to pick at least one option!";
    return;
  }

  const params = { len, incChar, incNum, incLow, incUpp };
  const pass = generatePass(params);

  genPass.textContent = pass;
});
