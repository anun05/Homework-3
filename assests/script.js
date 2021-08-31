let theseNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let bigCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let specialCase = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '/', '\\', ':', ';', '<', '>', ',', '.', '?'];

// this is the dictionary that will contain the var's that generate the password
var pick = {
  length: 0,
  specialCase: false,
  bigCase: false,
  lowCase: false,
  theseNumbers: false,
}

function prompts() {
  pick.length = prompt("Please enter the length between 8 and 128");
  while (isNaN(pick.length) || pick.length < 8 || pick.length > 128) {
    alert("Number was not selected, please select a number or invalid size");
    pick.length = prompt("Please enter the length between 8 and 128");
  }
  pick.lowCase = confirm("Would you like a lower case letter");
  pick.bigCase = confirm("Would you like a upper case letter");
  pick.specialCase = confirm("Would you like a special case letter");
  pick.theseNumbers = confirm("Would you like a number");
  while (!pick.lowCase && !pick.bigCase && !pick.specialCase && !pick.theseNumbers) {
    alert("At least select one character set");
    pick.lowCase = confirm("Would you like a lower case letter");
    pick.bigCase = confirm("Would you like a upper case letter");
    pick.specialCase = confirm("Would you like a special case letter");
    pick.theseNumbers = confirm("Would you like a number");
  }
  console.log(pick)
}

function randomNum(array) {
  var rIndex = Math.floor(Math.random() * array.length);
  var rElement = array[rIndex];
  return rElement
}

function generatePassword() {
  var possibleChara = [];
  var guaranteedChara = [];
  var result = [];

  prompts();
  if (pick.specialCase) {
    possibleChara = possibleChara.concat(specialCase);
    guaranteedChara.push(randomNum(specialCase));
  }
  if (pick.bigCase) {
    possibleChara = possibleChara.concat(bigCase);
    guaranteedChara.push(randomNum(bigCase));
  }
  if (pick.lowCase) {
    possibleChara = possibleChara.concat(lowCase);
    guaranteedChara.push(randomNum(lowCase));
  }
  if (pick.theseNumbers) {
    possibleChara = possibleChara.concat(theseNumbers);
    guaranteedChara.push(randomNum(theseNumbers));
  }
  for (var i = 0; i < pick.length; i++) {
    var characters = randomNum(possibleChara);
    result.push(characters);
  } 
  for (var i = 0; i < guaranteedChara.length; i++) {
    result[i] = guaranteedChara[i]
  }
  console.log('result: '+ result);
  console.log('possible characters '+ possibleChara);
  console.log('guranteed characters '+ guaranteedChara);
  return result.join("");
}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
