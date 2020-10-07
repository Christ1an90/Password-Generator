var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUppercase;
var confirmLowercase;

function generatePassword() {
    var confirmLength = (prompt("How many characters would you like this password to contian?"));
  }

while(confirmLength <= 7 || confirmLength >=129) {
    (alert("Password length must be between 8-128 characters Try again"));
    var confirmLength = (prompt("How many characters would you like your password to contain?"));
  }
    
    alert('Your password will have ${confirmLength} characters');



    var confirmSpecialCharacter = confirm("Press Okay to confirm you would like to include special characters");
    var confirmNumericCharacter = confirm("Press Okay to confirm if you'd like to include numeric characters");
    var confirmLowercase  = confirm("Press okay to confirm if you'd like to include lowercase characters");
    var confirmUppercase = confirm("Press of to confirm if you'd like to include uppercase characters");
    








// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatepassword() {
  var num = Math.random();
  return num;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
