var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var passError = document.getElementById('password-error');
var mobileError = document.getElementById('mobile-error');
var desError = document.getElementById('des-error');
var submitError = document.getElementById('submit-error');


function validateName(){
    var name = document.getElementById("fname").value;
    if(name.length<5 || name.length>12){
        nameError.innerHTML = "Min 5 And Max 12 Char";
        return false;
    }
    
    if(!name.match(/^[A-Za-z]*\s{1}[A-za-z]*$/)){
        nameError.innerHTML = "Write A Valid Name";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateEmail(){
    var email = document.getElementById('femail').value;
    if(email.length == 0){
        emailError.innerHTML = "Can Not Empty"
        return false;
    }
    if(email.length<=15){
        emailError.innerHTML = "Email Should be less than 15 char"
        return false;
    }
    
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML = "Write A Valid Email"
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validatePass(){
    var pass = document.getElementById('fpass').value;
    var lowercase = /[a-z]/g;
    var uppercase = /[A-Z]/g;
    var number = /[0-9]/g;
    if(!pass.match(lowercase)|| !pass.match(uppercase) || !pass.match(number)  || pass.length<8){
        passError.innerHTML = "Password must contain alphabets in lower as well as uppercase, digits and more that 6"
      return false;
    }
    if(pass.length == 0){
        passError.innerHTML = "Required password"
        return false;
    }
    passError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateMobile(){
    var mobile = document.getElementById('fmobile').value;
    if(mobile.length == 0){
        mobileError.innerHTML = "Mobile Number Required"
        return false;
    }
    if(mobile.length !==10){
        mobileError.innerHTML = "Mobile no should be 10 digits"
        return false;
    }
    if(!mobile.match(/^[0-9]{10}$/)){
        mobileError.innerHTML = "Only digits please!"
        return false;
    }
    mobileError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateDes(){
    var des = document.getElementById('fdescription').value;
    var required = 40;
    var left = required - des.length;
    if(left>0){
        desError.innerHTML = left + "More characters required";
        return false;
    }
    desError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateForm(){
    if(!validateName() || !validateEmail() || !validatePass() || !validateMobile()){
        submitError.innerHTML = "Please fix error in submit"
        return false;
    }
    submitError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}