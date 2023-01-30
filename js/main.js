
var username = "harris";
var password = "bomberguy";

function myValidator() {
    if (this.document.login.name.value == username && this.document.login.pass.value == password) {
        window.alert("succes")
        console.log("login")
        window.location.href = "correct.html";
    }
    else {
        window.alert("failure")
        console.log("you are a failure")
    }
}