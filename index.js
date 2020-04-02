$('document').ready(function(){
$('button').click(function() {  
    $(".error").hide(); 
    var hasError = false;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var emailaddressVal = $("#exampleInputEmail").val();

    if(emailaddressVal === "" || !emailReg.test(emailaddressVal)) {
      $("button").after('<img src="images/icon-error.svg" class="error-pic">',' <p class="error">Please provide a valid email.</p>');
      hasError = true;
    } 
    if(hasError == false){alert("Valid email!");}
    if(hasError == true) { return false; }
 
});
});