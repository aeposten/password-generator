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
let passwordString;
let isFiltered = false;
let filtered;

function setTextContent(arr) {
  let selectedLength = parseInt(lengthsEl.value);
  passwordString = ""
  for (let i = 0; i <= selectedLength; i++) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    passwordString += arr[randomIndex];
  }
  return passwordString;
}

function generatePassword(element) {
  isFiltered ? setTextContent(filtered) : setTextContent(CHARACTERS);
  element.innerText = passwordString;
}

function copyPassword(element) {
  let copiedText = element.textContent;
  navigator.clipboard.writeText(copiedText);
  alert("Password copied to clipboard!");
}

function filterCharacters() {
  let regexNum = /\D/;
  let regexSym = /[^_\W]+/;
  let radioValue;
  let radioButtons = document.getElementsByClassName("radio-value");
  for (button of radioButtons) {
    if (button.checked) {
      radioValue = button.value;
    }
  }
  if (radioValue === "num") {
    filtered = CHARACTERS.filter((character) => regexNum.test(character));
  } else {
    filtered = CHARACTERS.filter((character) => regexSym.test(character));
  }

  console.log(filtered);
  isFiltered = true;
  return filtered;
}

function clearFields() {
    isFiltered = false;

}
