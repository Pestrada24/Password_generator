var characterLength = 12;
var coiceArr = [];

var specialCharArr = ['!','@','#','$','%','^','&','*','(',')','?',];
var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArr = ['1','2','3','4','5','6','7','8','9','0'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts(); //will return true or false
  var passwordText = document.querySelector("#password");

  if (correctPrompts){
  var newPassword = generatePassword();
  passwordText.value = newPassword;
  } else {
    passwordTest.value = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  //passwprd generation based on prompts
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;

}

function getPrompts(){
  choiceArr = [];

  characterLength = parseInt(prompt("How many characters do you want your password to be? (12 - 40 characters)"));

  if(isNaN(characterLength) || characterLength < 12 || characterLength > 40){
    alert("Character length has to be a number, 12 - 40 digits. Please try again.");
    return false;
  }

  if (confirm("Would you like to have lowercase letters in your password?")){
    choiceArr = choiceArr.concat(lowerCaseArr);
  }
  if (confirm("Would you like to have uppercase letters in your password?")){
    choiceArr = choiceArr.concat(upperCaseArr);
  }
  if(confirm("Would you like to have special characters in your password?")){
    choiceArr = choiceArr.concat(specialCharArr);
  }
  if(confirm("Would you like to have numbers in your password?")){
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;
}