var nameValid = false;
var nameWidget = document.getElementById("name");
nameWidget.addEventListener("input", checkName);
validColor = "#a3ed90";
invalidColor = "#e25151";

function checkName() {
    var val = nameWidget.value;
    var regEx = /(\w.+\s.).+/;
    if (val.length > 3 && regEx.test(val)) {
        nameValid = true;
        nameWidget.style.backgroundColor = validColor;
    }
    else {
        nameWidget.style.backgroundColor = invalidColor;
    }
}

var emailValid = false;
var emailWidget = document.getElementById("mail");
emailWidget.addEventListener("input", checkEmail);

function checkEmail() {
    var val = emailWidget.value;
    var regEx = /^\S+@\S+$/;
    if(regEx.test(val)){
        emailValid = true;
        emailWidget.style.backgroundColor = validColor;
    }
    else {
        emailWidget.style.backgroundColor = invalidColor;
    }
}

var formWidget = document.querySelector("#contactForm");
formWidget.addEventListener("submit", checkForm);

function checkForm(event) {

    if(!nameValid) {
        alert("Please enter your first and last name.");
        event.preventDefault();
    }
    
    if(!emailValid) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    }
}

/*setTimeout (function() {
    alert("Your submission time has ended.");
    location.reload();
}, 30000);*/






