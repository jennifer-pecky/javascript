let input = document.getElementById("input");
let paragraph = document.getElementById("para");
let button = document.getElementById("button");
let events = document.getElementById("events");
let todo = document.getElementById("todo");
let undo = document.getElementById("undo");
let clear = document.getElementById("clear");
let menu = document.getElementById("menu");
let sidebar = document.getElementById("sidebar");
let cancel = document.getElementById("cancel");
let modal = document.querySelector(".modal")

function displayModal() {
    modal.style.display = "flex";
}

function removeModal() {
    modal.style.display = "none";
}

const deleteUser = () => {
    localStorage.clear();
    setTimeout(() => {
        window.location.replace("http://127.0.0.1:5501/signin.html")
    }, 3000);
}

window.addEventListener("scroll", function () {
    let nav = document.querySelector(".nav");
    let winpix = window.scrollY;
    if (winpix > 200) {
        nav.classList.add("fixed")
    } else {
        nav.classList.remove("fixed")
    }
})

function logout() {
    setTimeout(() => {
        window.location.replace("http://127.0.0.1:5501/login.html");
    }, 3000);
}

function enter() {
    menu.innerText = "☰";
}

function out() {
    menu.innerText = "|||";
}

function opened() {
    sidebar.style.width = "300px";
}

function cancelled() {
    sidebar.style.width = "0px";
}

let todoArr = [];

button.addEventListener("click", function (e) {
    e.preventDefault();
    let todoDiv = document.createElement("div");
    let heading = document.createElement("h1");
    let cancelBtn = document.createElement("button");
    todoDiv.appendChild(heading);
    todoDiv.appendChild(cancelBtn);
    heading.innerText = input.value;
    cancelBtn.innerText = "X";
    console.log(todoArr);

    if (input.value !== "") {
        todoArr.push(todoDiv);
        input.style.border = "none";
        todoArr.map((item, index) => {
            todo.appendChild(item);

            cancelBtn.onclick = function () {
                item.style.display = "none";
                let indexes = todoArr[index];
                console.log(index);
                undo.onclick = function () {
                    if (undo.innerText === "Undo") {
                        undo.innerText = "Redo";
                    } else {
                        undo.innerText = "Undo";
                    }
                    if (indexes.style.display === "flex") {
                        todoArr.splice(index, 0, indexes);
                        indexes.style.display = "flex";
                    } else {
                        indexes.style.display = "flex";
                    }
                };
            };
        });
    } else {
        input.style.border = "1px solid red";
        alert("Input must have a value");
    }

    input.value = "";
});

clear.onclick = function () {
    location.reload();
};
