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

const radioButtons = document.getElementsByClassName("radio-value");
const passwordOne = document.getElementById("password-1");
const passwordTwo = document.getElementById("password-2");
const userInput = document.getElementById("user-input");
const clicked = document.getElementById("click");
let isFiltered = false;
let passwordString;
let filtered;

//Sets text content of the password string divs with generated password
function setTextContent(element) {
  isFiltered ? generatePassword(filtered) : generatePassword(CHARACTERS);
  element.textContent = passwordString;
}

//Generates password
function generatePassword(arr) {
  let selectedLength = parseInt(userInput.value);
  passwordString = "";
  for (let i = 0; i <= selectedLength; i++) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    passwordString += arr[randomIndex];
  }
  return passwordString;
}
//Sets filter based on selected options then uses filterCharacters to filter array based on selected option
function setFilter() {
  let regexNum = /\D/;
  let regexSym = /[^_\W]+/;
  let radioValue;

  for (button of radioButtons) {
    if (button.checked) {
      radioValue = button.value;
    }
  }
  radioValue === "numbers"
    ? filterCharacters(regexNum)
    : filterCharacters(regexSym);
}

//For use in setFilter, uses selected filtering option to filter and return array of characters
function filterCharacters(reg) {
  filtered = CHARACTERS.filter((character) => reg.test(character));
  isFiltered = true;
  return filtered;
}


//Copies password to clipboard
function copyPassword(element) {
  let copiedText = element.textContent;
  try {
    navigator.clipboard.writeText(copiedText).then(() => {
      clicked.textContent = "Password Copied to Clipboard";
    });
  } catch (error) {
    console.error(error);
  }
}

//resets password inputs and passwords
function resetPasswords() {
  passwordOne.textContent = "password appears here";
  passwordTwo.textContent = "password appears here";
  clicked.textContent = "Click password to copy to clipboard";
}
