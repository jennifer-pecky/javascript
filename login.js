let button = document.getElementById("button");

button.addEventListener("click", function (e) {
    e.preventDefault();
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let error = document.getElementById("error")

    let userEmail = localStorage.getItem("email");
    let userPassword = localStorage.getItem("password");

    if (userEmail !== email.value && userPassword !== password.value) {
        error.style.display = "block"
        password.style.border = "1px solid red";
        email.style.border = "1px solid red"
        setTimeout(() => {
            email.style.border = "1px solid black";
        }, 5000);
    } else {
        setTimeout(() => {
            window.location.replace("http://127.0.0.1:5501/index.html")
        }, 3000);
    }
})