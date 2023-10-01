const uname = document.querySelector("#uName");
const email = document.querySelector("#email");
const psw = document.querySelector("#psw");
const cnfPsw = document.querySelector("#cnfPsw");

function validate() {
    checkUname()
    checkEmail()
    checkPsw()
    checkCnfPsw()
}

function checkUname() {
    if (uname.value.length > 4) {
        uname.classList.add("success");
        uname.classList.replace("error", "success");
        document.querySelector("#uName_err").innerHTML = "";

    } else {
        uname.classList.add("error");
        document.querySelector("#uName_err").innerHTML = "user name must be 5 character";
    }
}

function checkEmail() {
    if (email.value.length > 5 && email.value.includes("@") && email.value.includes(".") ) {
        email.classList.add("success");
        email.classList.replace("error", "success");
        document.querySelector("#email_err").innerHTML = "";

    } else {
        email.classList.add("error");
        document.querySelector("#email_err").innerHTML = "enter valid email";
    }
}
function checkPsw() {
    if (psw.value.length > 7 ) {
        psw.classList.add("success");
        psw.classList.replace("error", "success");
        document.querySelector("#password_err").innerHTML = "";

    } else {
        psw.classList.add("error");
        document.querySelector("#password_err").innerHTML = "Password Should be 8 char";
    }
}
function checkCnfPsw() {
    if (cnfPsw.value === psw.value && cnfPsw.value!=="" ) {
        cnfPsw.classList.add("success");
        cnfPsw.classList.replace("error", "success");
        document.querySelector("#cnfPassword_err").innerHTML = "";

    } else {
        cnfPsw.classList.add("error");
        document.querySelector("#cnfPassword_err").innerHTML = "not matched";
    }
}