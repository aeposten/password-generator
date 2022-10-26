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
let filtered;

function generatePassword(element) {
  let passwordString = "";
  let selectedLength = parseInt(lengthsEl.value);

  if (isFiltered) {
    for (let i = 0; i <= selectedLength; i++) {
        let randomIndex = Math.floor(Math.random() * filtered.length);
        passwordString += filtered[randomIndex];
      }
      element.textContent = passwordString;
  } else {

  for (let i = 0; i <= selectedLength; i++) {
    let randomIndex = Math.floor(Math.random() * CHARACTERS.length);
    passwordString += CHARACTERS[randomIndex];
  }
  element.textContent = passwordString}
}

function copyPassword(element) {
  let copiedText = element.textContent;
  navigator.clipboard.writeText(copiedText);
  alert("Password copied to clipboard!");
}

function filterCharacters(characterType) {
  let regexNum = /\D/;
  let regexSym = /[^_\W]+/;

    console.log(characterType);
  if (characterType === 'num')
  {filtered = CHARACTERS.filter((character) => regexNum.test(character));} else {
    filtered = CHARACTERS.filter((character) => regexSym.test(character));
  }

  console.log(filtered);
  isFiltered = true;
  return filtered;

}
