let button = document.getElementById("button");

button.addEventListener("click", function (e) {
    e.preventDefault();
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let error = document.getElementById("error")
    let EmailErr = document.getElementById("EmailErr")
    let passwordErr = document.getElementById("passwordErr")
    let emailErr = document.getElementById("emailErr")

    let userEmail = localStorage.getItem("email");
    let userPassword = localStorage.getItem("password");

    if (userEmail !== email.value && userPassword !== password.value) {
        error.style.display = "block";
        password.style.border = "1px solid red";
        email.style.border = "1px solid red";
        setTimeout(() => {
            email.style.border = "1px solid black";
            password.style.border = "1px solid black";
            error.style.border = "none";
        }, 5000);
    } else if (userEmail !== email.value) {
        emailErr.style.display = "block";
        email.style.border = "1px solid red";
        setTimeout(() => {
            email.style.border = "1px solid black";
            emailErr.style.display = "none";
        }, 5000);
    } else if (!email.value.match(emailPattern)) {
        EmailErr.style.display = "block";
        email.display.border = "1px solid red";
        setTimeout(() => {
            email.style.border = "1px solid black";
            EmailErr.style.display = "none";
        }, 5000);

    } else if (userPassword !== password.value) {
        passwordErr.style.display = "block";
        password.style.border = "ipx solid green";
        setTimeout(() => {
            password.style.border = "1px solid black";
            passwordErr.style.display = "none";

        }, 1000);
    } else {
        setTimeout(() => {
            window.location.replace("http://127.0.0.1:5501/index.html")
        }, 3000);
    }

})