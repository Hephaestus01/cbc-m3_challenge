// Assignment code here
var lettersLower = 'abcdefghijklmnopqrstuvwxyz';
var lettersUpper = lettersLower.toUpperCase();
var specialChars = '!@#$%^&*()';
var numbers = '0123456789';

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // removed >> var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // user inputs for character types
  charString = "";
  var chooseLength = parseInt(window.prompt("How long do you want your password to be? Choose a value between 8 and 128."));
  if (chooseLength < 8 || chooseLength > 128 || isNaN(chooseLength)) {
    return generatePassword();
  }
  var useLowerLetters = window.confirm("Do you want to use lowercase letters?");
  var useUpperLetters = window.confirm("Do you want to use uppercase letters?");
  var useSpecialChars = window.confirm("Do you want to use special characters?");
  var useNumbers = window.confirm("Do you want to use numbers?");

  // building the string of characters list
  if (useLowerLetters) {
    charString = charString + lettersLower;
  }
  if (useUpperLetters) {
    charString = charString + lettersUpper;
  }
  if (useSpecialChars) {
    charString = charString + specialChars;
  }
  if (useNumbers) {
    charString = charString + numbers;
  }

  // using iterative process to take random index value in charString until chooseLength is met
  password = "";
  while (password.length < chooseLength) {
    password = password + charString[Math.floor(Math.random() * (charString.length ))];
  }
  return password;
}