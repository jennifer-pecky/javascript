let button = document.getElementById("button");

button.addEventListener("click", function (e) {
    e.preventDefault()
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("conPassword");
    let smallEmail = document.getElementById("smallEmail");
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let smallPassword = document.getElementById("smallPassword")
    let EmailErr = document.getElementById("EmailErr");


    localStorage.setItem("password", password.value);
    let userEmail = localStorage.getItem("email");

    if (!email.value.match(emailPattern)) {
        smallEmail.style.display = "block"
        smallEmail.innerText = "invalid email address";
        email.style.border = "1px solid red"
        setTimeout(() => {
            smallEmail.style.display = "none";
            email.style.border = "1px solid black";
        }, 5000);
    } else if (userEmail !== email.value) {
        smallEmail.innerText = "Email is incorrect";
        smallEmail.style.display = "block";
        email.style.border = "1px solid red";
        setTimeout(() => {
            smallEmail.style.display = "none";
            email.style.border = "1px solid black";
        }, 3000);
    } else if (password.value !== confirmPassword.value) {
        confirmPass.innerHTML = "Password dose not tally";
        confirmPass.style.display = "block";
        conPassword.style.border = "1px solid red";
        setTimeout(() => {
            confirmPass.style.display = "none";
            conPassword.style.border = "1px solid black";
        }, 3000);
    }

});