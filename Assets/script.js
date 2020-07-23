//declaration
const generateBtn = document.querySelector("#generate");
const number = '1234567890'.split("");
const special = '!"#$%&'.split("");
const lowerCase = 'qwertyuiopasdfghjklzxcvbnm'.split("");
const upperCase = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split("");
//function - To use a function, you must define it somewhere in the scope from which you wish to call it
function generatePassword() {
  //The 1st dialog box you see after pressing "Generate Password"
  let pwLength = parseInt(prompt("Choose a password length of at least 8 characters and no more than 128 characters\."));
  if (pwLength < 8 || pwLength > 128) {
    alert("Length did not meet the requirements\.")
    console.log(alert)
    return;
  }
  console.log('length chosen ' + '= ' + pwLength);
  const numericCharacter = confirm('Would you like numbers in you password?');
  console.log('numbers chosen ' + '= ' + numericCharacter);
  const specialCharacter = confirm('Would you like to include special characters?');
  console.log('special characters chosen ' + '= ' + specialCharacter);
  const lowerCaseCharacter = confirm('Do you want lowercase letters in your password?');
  console.log('lower case characters chosen ' + '= ' + lowerCaseCharacter);
  const upperCaseCharacter = confirm('Do you want uppercase letters in you password?');
  console.log('upper case characters chosen ' + '= ' + upperCaseCharacter);
  //call
  var input = []
  var password = ""
  if (numericCharacter) {
    input.push(number);
  }
  if (specialCharacter) {
    input.push(special);
  }
  if (lowerCaseCharacter) {
    input.push(lowerCase);
  }
  if (upperCaseCharacter) {
    input.push(upperCase);
  }
  console.log(input);
  var result = input.flat()

  console.log(result);
  for (var i = 0; i < pwLength; i++) {
    password = password +
      result[Math.floor(Math.random() * result.length)]
  }
  return password;
}
console.log(writePassword)
//definition            
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);