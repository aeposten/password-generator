// prettier-ignore
const CHARACTERS  = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
    'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
    'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2',
    '3', '4', '5', '6', '7', '8', '9', '~', '`', '!', '@',
    '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+',
    '=', '{', '[', '}', ']', ',', '|', ':', ';', '<', '>',
    '.', '?', '/'
  ]

let passwordOne = document.getElementById("password-1");
let passwordTwo = document.getElementById("password-2");
let lengthsEl = document.getElementById("password-lengths");
let isFiltered = false;
let passwordString;
let filtered;

function setTextContent(arr) {
  let selectedLength = parseInt(lengthsEl.value);
  passwordString = "";
  for (let i = 0; i <= selectedLength; i++) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    passwordString += arr[randomIndex];
  }
  return passwordString;
}

function generatePassword(element) {
  isFiltered ? setTextContent(filtered) : setTextContent(CHARACTERS);
  element.textContent = passwordString;
}

function copyPassword(element) {
  let copiedText = element.textContent;
  navigator.clipboard.writeText(copiedText);
  alert("Password copied to clipboard!");
}

function setRegex(reg) {
  filtered = CHARACTERS.filter((character) => reg.test(character));
  isFiltered = true;
  return filtered;
}

function filterCharacters() {
  let radioButtons = document.getElementsByClassName("radio-value");
  let regexNum = /\D/;
  let regexSym = /[^_\W]+/;
  let radioValue;

  for (button of radioButtons) {
    if (button.checked) {
      radioValue = button.value;
    }
  }
  radioValue === "num" ? setRegex(regexNum) : setRegex(regexSym);
}

