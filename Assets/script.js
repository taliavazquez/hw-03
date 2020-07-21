//declaration
var generateBtn = document.querySelector("#generate"); 
var number = '1234567890'.split('');
var special = '!"#$%&'.split('');
var lowerCase = 'qwertyuiopasdfghjklzxcvbnm'.split('');
var upperCase = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('');
//function - To use a function, you must define it somewhere in the scope from which you wish to call it
    function generatePassword() {
//The 1st dialog box you see after pressing "Generate Password"
      let length = parseInt(prompt("Choose a password length of at least 8 characters and no more than 128 characters\."));
      if(length <= 8 || length >= 128) {
        length = alert("Length did not meet the requirements\.")
        return;
      }
//console.log('pw' + ' ' + length);
//The 2nd dialog box
      var numericCharacter = confirm('Would you like numbers in you password?');
//console.log('pw' + ' ' + numericCharacter);
//The 3rd dialog box  
      var specialCharacter = confirm('Would you like to include special characters?');
//console.log('pw' + ' ' + specialCharacter);
//The 4th dialog box    
      var lowerCase = confirm('Do you want lowercase letters in your password?');
        //console.log('pw' + ' ' + lowerCase);
        
      var upperCase = confirm('Do you want uppercase letters in you password?');
//console.log('pw' + ' ' + upperCase);
//call
          var input = []
          var password = ''
          if (lowerCase) {
             input.push(lowerCase);
          }
          if (upperCase) {
            input.push( upperCase);
          }
          if (numericCharacter) {
              input.push(number);
          }
          if (specialCharacter) {
              input.push(special);
          }
            let result = input.flat()
          for (var i= 0; i < length; i++) {
            password = password + 
            result[Math.floor(Math.random() * result.length)]
          }
            return password;
          }
//definition            
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);