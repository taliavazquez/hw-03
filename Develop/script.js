function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector(“#password”);
  passwordText.value = password;
}

function generatePassword(){
  var length = prompt(‘choose a length of at least 8 characters and no more than 128 characters’);
  if(length < 8 || length > 128){
    //   alert(‘You must specify at least one character type’);
    alert(‘Length does not meet the requirement.’);
    return;
  }
//array qwertyuiopasdfghjklzxcvbnm
  var lowerCase = confirm(‘Do you want lowercase in your password?’);
//array QWERTYUIOPASDFGHJKLZXCVBNM
  var upperCase = confirm(‘Do you want uppercase in you password?’);
//ARRAY !@#$%^&*
  var specialCharacter = confirm(‘Would you like to include special characters?’);
// number 0123456789
  var numericValue = confirm(‘Would you like numbers in you password?’)


  //if all characters type is false (user click cancel) than jump our of the function generatePassword
  // if(lowercase === false && uppercase === false && specialCharacter === false && numericValue === false){
 
  var pw = createPW()
  return pw;
}
function createPW(){
  console.log(uppercase);
}

//boolean true false


// Add event listener to generate button
generateBtn.addEventListener(“click”, writePassword);