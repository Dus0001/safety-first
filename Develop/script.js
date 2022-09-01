// Assignment Code
var generateBtn = document.querySelector("#generate");

var randomInt = function(min,max) {
  var value =cMath.floor(Math.random() * (max - min) + min)
  
  return value;
};

//Prompt the user
function generatePassword() {
  
  
  var numbersArray = ["0","1","2","3","4","5","6","7","8","9"]
  var charactersArray = ["!","@","#","$","%","&","*","?"]
  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var lowerCase = []
  var passwordInfo = [];
  for (var i = 0; i < upperCase.length; i++ ) {
    lowerCase[i] = upperCase[i].toLowerCase()
  }
  var inputPasswordLength = window.prompt("Choose your length of password between 8 to 128 characters!")
  var passwordLength = parseInt(inputPasswordLength)

  //Password length prompt
  if (isNaN(passwordLength) || passwordLength<8 || passwordLength > 128) {
    window.alert ("Enter a number between 8 and 128!")
    return
  }
  //Lower case option
  var inputLowerCase = window.confirm("Do you want lower case letters?")
  if (inputLowerCase) {
    passwordInfo.push(inputLowerCase)
  }

  //Upper case option 
  var inputUpperCase = window.confirm("Do you want UPPER case letters?")
  if (inputUpperCase) {
    passwordInfo.push(upperCase)
  }
  
  //numbers option
  var inputNumbers = window.confirm("Do you want to add numbers?")
  if (inputNumbers) {
    passwordInfo.push(numbersArray)
  }

  //Character options
  var inputCharacters = window.confirm("Do you want to add characters?")
  if (inputCharacters) {
    passwordInfo.push(charactersArray)
  }

  //connect


};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);