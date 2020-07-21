// Assignment Code
var generateBtn = document.querySelector("#generate"); 

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector(“#password”);
  passwordText.value = password;
}




function generatePassword() {
  var length = prompt(‘choose a length of at least 8 characters and no more than 128 characters’);
  if (length < 8 || length > 128) {
    alert(‘Length does not meet the requirement.’);
    return;
  }
  var lowerCase = confirm(‘Do you want lowercase in your password ?’);
  if () {
    alert(‘’);
    return;
  }
  var upperCase = confirm(‘Do you want uppercase in you password ?’);
  if () {
    alert(‘’);
    return;
  }
  var specialCharacter = confirm(‘Would you like to include special characters ?’);
  if () {
    alert(‘’);
    return;
  }
  var numericValue = confirm(‘Would you like numbers in you password ?’)
  if () {
    alert(‘’);
    return;
  }
  var pw = createPW()
  return pw;
}



generateBtn.addEventListener(“click”, writePassword);