

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var pwd = '';

var lowerSelection = false;
var upperSelection = false;
var specialSelection = false;
var numberSelection = false;


function generate() {
  var confirmLength = '';

  while (isNaN(confirmLength) || confirmLength < 8 || confirmLength > 128) {
    confirmLength = prompt("Choose a password length between 8 and 128 characters)");
    if (confirmLength === null) {
        break;
    }
}

if (confirmLength) {
  if (confirm("Would you like to use lowercase characters?") == true) {
      lowerSelection = true
  } 

  if (confirm("Would you like to use uppercase characters?") == true) {
      upperSelection = true
  }

  if (confirm("Would you like to use special characters?") == true) {
      specialSelection = true
  }

  if (confirm("Would you like to use numerical characters?") == true) {
      numberSelection = true
  }


  if (lowerSelection === false && upperSelection === false && specialSelection === false && numberSelection === false) {
    alert("At least one character type must be selected")
}
}


var characters = '';
    characters += (lowerSelection ? lower : '');
    characters += (upperSelection ? upper : '');
    characters += (specialSelection ? special : '');
    characters += (numberSelection ? numbers : '');

    pwd = password(confirmLength, characters);

    document.getElementById("password").innerHTML = pwd;

}

function password(l, characters) {
  var pwd = '';
  for (var i = 0; i < l; ++i) {
      pwd += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return pwd;
}

let randomPasswordGenerator = document.querySelector("#generateBtn");
randomPasswordGenerator.addEventListener("click", generatePassword);
  








    
 







