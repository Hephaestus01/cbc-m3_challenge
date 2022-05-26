// Assignment code here
var lettersLower = 'abcdefghijklmnopqrstuvwxyz';
var lettersUpper = lettersLower.toUpperCase();
var specialChars = '!@#$%^&*()';
var numbers = '0123456789';

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var resetBtn = document.querySelector("#reset");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = generatePassword();
  console.log(passwordText);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
resetBtn.addEventListener("click", resetField);

// main function for random password generation based on user criteria
function generatePassword() {
  // user inputs for character types
  var charString = "";
  var chooseLength = parseInt(window.prompt("How long do you want your password to be? Choose a value between 8 and 128."));
  if (chooseLength < 8 || chooseLength > 128 || isNaN(chooseLength)) {
    window.alert("You must choose a character length between 8 and 128.");
    return generatePassword();
  }
  var useLowerLetters = window.confirm("Do you want to use lowercase letters?");
  var useUpperLetters = window.confirm("Do you want to use uppercase letters?");
  var useSpecialChars = window.confirm("Do you want to use special characters?");
  var useNumbers = window.confirm("Do you want to use numbers?");

  // If user does not choose any character type set, user will be prompted to start again
  if (!useLowerLetters && !useUpperLetters && !useSpecialChars && !useNumbers) {
    window.confirm("You must select at least one type of character set. Please try again.");
    return generatePassword();
  }

  // building the string of characters list
  if (useLowerLetters) {
    charString += lettersLower;
  }
  if (useUpperLetters) {
    charString += lettersUpper;
  }
  if (useSpecialChars) {
    charString += specialChars;
  }
  if (useNumbers) {
    charString += numbers;
  }

  // using iterative process to take random index value in charString until chooseLength is met
  var password = "";
  while (password.length < chooseLength) {
    password += charString[Math.floor(Math.random() * (charString.length))];
  }
  return password;
}

function resetField() {
  document.getElementById("password").value = "";
  } 