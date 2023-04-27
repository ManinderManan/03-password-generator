// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passLength = parseInt(prompt("Enter password length (8-128 Characters"))
  if (passLength < 8 || passLength > 128 || isNaN(passLength)) { //this creates an or statement
    return "Enter valid password length"
  }
  var upperCase = confirm("Would you like uppercase letters in your password?")
  var lowerCase = confirm("Would you like lovercase letters in your password?")
  var numbers = confirm("Would you like numbers in your password?")
  var symbols = confirm("Would you like symbols in your password?")
  if(!upperCase && !lowerCase && !numbers && !symbols){
    return "Please choose a valid option. Include, uppercase, lowercase, numbers, and symbols."
  }

  var choices = ""
  if(upperCase){
    choices += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if(lowerCase){
    choices += "abcdefghijklmnopqrstuvwxyz"
  }
  if(numbers){
    choices += "0123456789"
  }
  if(symbols){
    choices += "!@#$%^&*()=+[]{},."
  }

  if (choices.length===0){
    alert("At least one character type must be selected")
  }
  else{
    let pass="";
    let index=0;
    let randomcharacter;
    for(let i=0; i<passLength; i++){
      index=Math.floor(Math.random() * choices.length);
      randomcharacter=choices[index];
      pass += randomcharacter;
    }
    return pass;
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
