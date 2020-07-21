var generateBtn = document.querySelector('#generate');

//function - To use a function, you must define it somewhere in the scope from which you wish to call it
function writePassword() {
   //variables hold data value and it can be changed anytime
  var password = generatePassword();
  //create a password to the #password input
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

//function - To use a function, you must define it somewhere in the scope from which you wish to call it
function generatePassword(){
   //The first dialog box you see after pressing "Generate Password"
  var length = prompt('Choose a password length of at least 8 characters and no more than 128 characters\.');
     //user enters number and now the program runs an if statement
    if (length < 8 || length > 128) {
    //dialog box with alert    
    alert('Length does not meet the requirement\.');

    return;
  }
  //The second dialog box you see after pressing "Generate Password" if you answer within 8-128
  var lowercase = confirm('Do you want lowercase letters in your password?');
  //The third dialog box you see after pressing "Generate Password" if you answer within 8-128
  var uppercase = confirm('Do you want uppercase letters in you password?');
  //The fourth dialog box you see after pressing "Generate Password" if you answer within 8-128
  var specialCharacter = confirm('Would you like to include special characters?');
  //The fifth dialog box you see after pressing "Generate Password" if you answer within 8-128
  var numericValue = confirm('Would you like numbers in you password?')

//set possible password values

//Need generator function with loop to choose password characters

//double check that user selected all requirements

//Make sure characters are added to the password


  var pw = createPW()
  return pw;
}


function createPW(){
  console.log("uppercase");
}


generateBtn.addEventListener("click", writePassword);