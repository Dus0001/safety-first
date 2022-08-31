// Assignment Code
var generateBtn = document.querySelector("#generate");

//Prompt the user
function generatePassword() {
  var inputPasswordLength = window.prompt("Choose your length of password between 8 to 128 characters!")
  var passwordLength = parseInt(inputPasswordLength)

  if (isNaN(passwordLength) || passwordLength<8 || passwordLength > 128) {
    window.alert ("Enter a number between 8 and 128!")
    return
  } 

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);