

            
function _register(){
    var firstname = document.getElementById('_firstname').value;
    var lastname = document.getElementById('_lastname').value;
    var email = document.getElementById('_email').value;
    var mobile = document.getElementById('_mobile').value;
    var password = document.getElementById('_password').value;
    var confirm = document.getElementById('_confirm').value;
    // var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;

    var status=1;
    
    if(firstname == ""){
        firstname_error.innerHTML = "please enter your firstname";
        firstname_error.style.display = "block";
        firstname_error.style.color = "red";
        _firstname.style.borderColor = "red";
        // return false;
        status=0;
    }
    else{
        firstname_error.style.display = "none";
        _firstname.style.borderColor = "violet";
        status=1;
    }

    if(email == ""){
        email_error.innerHTML = "please enter email address";
        email_error.style.display = "block";
        email_error.style.color = "red";
        _email.style.borderColor = "red";
        // return false;
        status=0;
    }
    else{
        email_error.style.display = "none";
        _email.style.borderColor = "violet";
        status=1;
    }

    if(mobile == ""){
        mobile_error.innerHTML = "please enter mobile number";
        mobile_error.style.display = "block";
        mobile_error.style.color = "red";
        _mobile.style.borderColor = "red";
        // return false;
        status=0;
    }
   
         else if(document.getElementById('_mobile').value.length == 10){
             mobile_error.style.display = "none";
            _mobile.style.borderColor = "violet";
            status=1;
         }
         else{
            alert("mobile number should be 10 digits");
            status=0;
         }
  
    if(password == ""){
        password_error.innerHTML = "please enter password";
        password_error.style.display = "block";
        password_error.style.color = "red";
        _password.style.borderColor = "red";
        // return false;
        status=0;
        
    }
   

    //  else if((!pwd_expression)=test.password){

    //     alert("password must contain special characters");
    //     // return false;
    //     status=0;
    // }
    else if(( document.getElementById('_password').value.length) < 8){
        alert("password must contain 8 characters");
        status=0;}
    
    else {
        password_error.style.display = "none";
        _password.style.borderColor = "violet";
        status=1;
    }


    // if(password != confirm ){
    //     confirm_error.innerHTML = "should be match with password";
    //     confirm_error.style.color = "red";
    //     _confirm.style.borderColor = "red";
    //     confirm_error.style.display = "block";  
    //     // return false;
    //     status=0;

    //  }
    //  else{
    //     confirm_error.style.display = "none";
    //     _confirm.style.borderColor = "violet";
    //     status=1;
    //  }
     if(status == 0){
        return false;
     }
     else if(status == 1){
     
        localStorage.setItem("_password",password);   
         localStorage.setItem("_email",email);
        //  return true;
        // location.href = "login.html";
     }
    
     }
