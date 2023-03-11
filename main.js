function printError(Id,Msg){
    document.getElementById(Id).innerHTML= Msg;
}
function validateForm(){
    var name = document.Form.name.value;
    var email = document.Form.email.value;
    var mobile = document.Form.mobile.value;
    var country = document.Form.country.value;
    var gender = document.Form.gender.value;
    
    var nameErr = emailErr = mobileErr = countryErr = genderErr = true;

    if(name == ""){
        printError("nameErr", "Please enter your Name");
        var elem = document.getElementById("name");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    }
    else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(name)=== false){
            printError("nameErr", "Please enter a valid name");
            var elem = document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1"); 
        }
        else{
            printError("nameErr", "");
            nameErr = false;
            var elem = document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1"); 

        }
    }

 if(email == ""){
     printError("emailErr", "Please enter your Email Address");
     var elem = document.getElementById("email");
     elem.classList.add("input-2");
     elem.classList.remove("input-1");
 }
 else{
     var regex = /^\S+@\S+\.\S+$/;
     if(regex.test(email)=== false){
         printError("emailErr", "Please enter a valid Email Address");
         var elem = document.getElementById("email");
         elem.classList.add("input-2");
         elem.classList.remove("input-1"); 
     }
     else{
         printError("emailErr", "");
         emailErr = false;
         var elem = document.getElementById("email");
         elem.classList.add("input-2");
         elem.classList.remove("input-1"); 
     }
 }

if(mobile == ""){
     printError("mobileErr", "Please enter your mobile number");
     var elem = document.getElementById("mobile");
     elem.classList.add("input-2");
     elem.classList.remove("input-1");
 }
 else{
     var regex = /^[0-10]\d{10}$/;
     if(regex.test(mobile)=== false){
         printError("mobileErr", "Please enter a valid mobile number");
         var elem = document.getElementById("mobile");
         elem.classList.add("input-2");
         elem.classList.remove("input-1"); 
     }
     else{
         printError("mobileErr", "");
         nameErr = false;
         var elem = document.getElementById("mobile");
         elem.classList.add("input-2");
         elem.classList.remove("input-1"); 
     }
 }
if(country == "Select"){
     printError("countryErr", "Please select your country");
     var elem = document.getElementById("country");
     elem.classList.add("input-4");
     elem.classList.remove("input-3");
 }
 else{
    printError("countryErr", "");
    countryErr = false;
    var elem = document.getElementById("country");
    elem.classList.add("input-3");
    elem.classList.remove("input-4");
    }
if(gender == ""){
     printError("genderErr", "Please select your gender");
     var elem = document.getElementById("gender");
     elem.classList.add("input-4");
     elem.classList.remove("input-3");
 }
 else{
    printError("genderErr", "");
    genderErr = false;
    var elem = document.getElementById("gender");
    elem.classList.add("input-3");
    elem.classList.remove("input-4");
    }
if((nameErr || emailErr || mobileErr || countryErr || genderErr) == true){

    return false;
}
};