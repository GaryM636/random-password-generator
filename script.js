// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

// Function to get password length
function getPasswordLength() {
  var length;
  for (;;) {
    length = Number(prompt("How many charecters would you like you password to be? (between 8-128 characters): "));
    if (!isNaN(length) && length >= 8 && length <= 128) {
      break;
    }
    alert("Password length must be a number (between 8-128 characters)");
  }
  return length;
}

// Function to select types of charecters in pasword
function confirmCharacterType(message) {
  var input;
  for (;;) {
    input = prompt(message).toLowerCase();
    if (input === "yes" || input === "no") {
      break;
    }
    alert("Please answer Yes or No");
  }
  return input === "yes";
}

// Function to generate Password
function generatePassword() {
  var length = getPasswordLength();
  var useUppercase = confirmCharacterType("Include uppercase letters in your password? (Yes or No)");
  var useNumbers = confirmCharacterType("Include numbers in your password? (Yes or No)");
  var useSpecialChars = confirmCharacterType("Include special characters in your password? (Yes or No)");

  var characters = lowerCasedCharacters;
  if (useUppercase) characters = characters.concat(upperCasedCharacters);
  if (useNumbers) characters = characters.concat(numericCharacters);
  if (useSpecialChars) characters = characters.concat(specialCharacters);

  var password = "";
  for (var i = 0; i < length; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
