const getRandomSpecialChar = () => {
  return String.fromCharCode(Math.floor(Math.random() * (38 - 33) + 33));
};

const getRandomNumber = () => {
  return Math.trunc(Math.random() * 10);
};

const getRandomUpper = () => {
  return String.fromCharCode(Math.floor(Math.random() * (90 - 65) + 65));
};

const getRandomLower = () => {
  return String.fromCharCode(Math.floor(Math.random() * (122 - 97) + 97));
};

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export const generatePass = function (params) {
  let password = [];
  let counter = 0;

  if (params.incChar) {
    password.push(getRandomSpecialChar());
    counter++;
  }
  if (params.incNum) {
    password.push(getRandomNumber());
    counter++;
  }
  if (params.incLow) {
    password.push(getRandomLower());
    counter++;
  }
  if (params.incUpp) {
    password.push(getRandomUpper());
    counter++;
  }

  for (let i = 0; i < params.len - counter; i++) {
    const rand = Math.floor(Math.random() * 4);
    if (rand == 0 && params.incChar) {
      password.push(getRandomSpecialChar());
    } else if (rand == 1 && params.incNum) {
      password.push(getRandomNumber());
    } else if (rand == 2 && params.incLow) {
      password.push(getRandomLower());
    } else if (rand == 3 && params.incUpp) {
      password.push(getRandomUpper());
    } else {
      i--;
    }
  }

  shuffleArray(password);
  shuffleArray(password);
  shuffleArray(password);

  return password.join("");
};
