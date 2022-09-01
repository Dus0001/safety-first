// Assignment Code
var generateBtn = document.querySelector("#generate");

var randomInt = function(min,max) {
  if (!max) {
    max - min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1-rand) + rand * max)
};

function getRandomItem(list) {
  return list[randomInt(0, list.length)]
}

//Prompt the user
function generatePassword() {
  
  
  var numbersArray = ["0","1","2","3","4","5","6","7","8","9"]
  var symbolsArray = ["!","@","#","$","%","&","*","?"]
  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var passwordInfo = []

  var inputPasswordLength = window.prompt("Choose your length of password between 8 to 128 characters!")
  var passwordLength = parseInt(inputPasswordLength)

  //Password length prompt
  if (isNaN(passwordLength) || passwordLength<8 || passwordLength > 128) {
    window.alert ("Enter a number between 8 and 128!")
    return
  }
  //Lower case option
  var inputLowerCase = window.confirm("Do you want lower case letters?")
  if (inputLowerCase === true) {
    passwordInfo.push(lowerCase)
  }

  //Upper case option 
  var inputUpperCase = window.confirm("Do you want UPPER case letters?")
  if (inputUpperCase === true) {
    passwordInfo.push(upperCase)
  }
  
  //numbers option
  var inputNumbers = window.confirm("Do you want to add numbers?")
  if (inputNumbers === true) {
    passwordInfo.push(numbersArray)
  }

  //Character options
  var inputSymbols = window.confirm("Do you want to add symbols?")
  if (inputSymbols === true) {
    passwordInfo.push(symbolsArray)
  };

  //connect Formulated password to the button
  var formulatedPassword = ""

  for (i = 0; i < passwordLength; i++) {
  var desiredOptions = getRandomItem(passwordInfo)
  var randomScript = getRandomItem(desiredOptions)
    formulatedPassword += randomScript
  }

  return formulatedPassword
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value += password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);