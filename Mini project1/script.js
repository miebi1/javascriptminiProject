// object to store details

let userDetailsDatabase = {}



function getUserDetails(){

// Username    
let username = prompt("Enter your Username:")

if (username == null){
    return
}


function ValidateUserName(username){
    if(username.length < 10 && username.length > 0){
        return true
    }else{
        return false
    }
}

while (ValidateUserName(username) == false){
    username = prompt("username must be less than 10 and reater than 0")
}

userDetailsDatabase["username"] = username

// Email Address
let email = prompt("Enter your Email Address")

if (email == null){
    return
}
function ValidateEmail(email){
    const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    emailCheckResult = emailCheck.test(email);
    if (emailCheckResult == true)
  {
    return (true)
  }else{   
    return (false)
}}

while(ValidateEmail(email) == false){
    email = prompt("Enter a Valid Email")
}

userDetailsDatabase["email"] = email

// Phone Number
let phoneNumber = prompt("Enter your Phone Number")
if (phoneNumber == null){
    return
}
function ValidatePhoneNumber(phoneNumber){
   if (phoneNumber.length == 11){
    return true
   }else{
    return false
   }}

   while (ValidatePhoneNumber(phoneNumber) == false){
    phoneNumber = prompt("Phone Number must be 11 digits, try again!")
   }
   userDetailsDatabase["phoneNumber"] = phoneNumber

//    password
let password = prompt("Enter your Password")
if (password == null){
    return
}
function ValidatePassword(password){
    if(password.length < 6){
        return false
    }else{
        return true
    }
}
while(ValidatePassword(password) == false ){
    password == prompt("Paasword must not be less than 6 digits")
}

userDetailsDatabase["Password"] = password


// confirmPassword

let confirmPassword = prompt("Confirm your Password")
if (confirmPassword == null){
    return
}
function ValidateconfirmPassword(confirmPassword){
    if(confirmPassword != password){
        return false
    }else{
        return true
    }
}

while(ValidateconfirmPassword(confirmPassword) == false){
    confirmPassword = prompt("Confirm Password those not match Password, try again!")
}

userDetailsDatabase["confirmPassword"] = confirmPassword
}




function displayUserDetails(){
    alert(`Your Details\n\nUser name: ${userDetailsDatabase.username}\nPhone Number: ${userDetailsDatabase.phoneNumber}\nEmail: ${userDetailsDatabase.email}`)
}
