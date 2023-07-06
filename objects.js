// let users = {
//     name: "james",
//     0: 50,
//     favourite: {
//         car: "benz",
//         language: "igbo",
//         colour: ["white", "black", "green", { whiteShade: "offwhite", orangeShade: "burntOrange", blackShade: "black" },],
//         sports: "football",
//     },
// };

// let favourite = users.favourite;



// let favouritecolor = favourite.colour;
// for (let color of favouritecolor) {
//     console.log(color);
// }

// console.log(favouritecolor[3]);

let obj = {
    name: "first",
};

let obj2 = {
    age: 30,
};

let obj3 = {
    gender: "male",
};

Object.assign(obj, obj2, obj3);
console.log(obj);


let nameObj = {
    name: "pecky",
    checkName() {
        console.log(this.name);
    }
}
let newObj = nameObj

// console.log(nameObj);
newObj.checkName()

let prices = {
    banana: 1,
    orange: 2,
    meat: 4.
}


// let entries = Object.entries(prices)
// let double = entries.map((item) => [item[0], item[1] * 2])
// let doublePrices = Object.fromEntries(double)
// console.log(doublePrices);

// console.log(Object.entries(prices));

// let entries;

let entries = 4;

let users = {
    name: "Kingsley",
    age: 0,
    gender: "male",
    register: 0,
};
let arrUsers = Object.entries(users);

// let date = new Date();
// let year = date.getFullYear();
// let month = date.getMonth() + 1;
// let day = date.getDate();

// let D_O_B = [2000, 6, 27];
// let age = year - D_O_B[0];
// function checkUser() {
//     if (year - D_O_B[0] === age && month < D_O_B[1]) {
//         age = age - 1;
//     } else if (year - D_O_B[0] == age && month == D_O_B[1] && D_O_B[2] > day) {
//         age = age - 1;
//     } else {
//         age = age;
//         console.log(age);
//     }
//     arrUsers.splice(1, 1, ["age", age]);
//     arrUsers.splice(3, 1, ["register", entries]);
//     let newObj = Object.fromEntries(arrUsers);
//     console.log(newObj);

//     if (month === D_O_B[1] && day === D_O_B[2]) {
//         console.log(`Happy Birthday ${newObj.name}`);
//     }
// }
// checkUser();





let user = new Map();

user.set("name", "Jones");
user.set(1, 30);
user.set(true, "Aba");
// user.clear();
console.log(user);
console.log(user.has("age"));
console.log(user.size);
console.log(user.values());

let set = new Set();

set.add("name");
set.add("name");
set.add("age");
set.add("color");

set.forEach((item, set) => {
    console.log(item);
});
console.log(set);


// array destrstructure


let arr = [
    "john", "peter", "march", "love", "true", "learn"
]

let [firstname, secondname, ...rest] = arr
console.log(rest[0]);


// nested destructuring

let use = {
    age: 39,
    favourite: {
        car: "lexus",
        food: "beans",
        color: [
            "black",
            "white",
            "orange",

            {
                whiteShade: "offwhite",
                orangeshade: "burnOrange",
                blackShade: "black"
            },
        ],
        sports: "football",
    },
};

let { age, favourite: { car, food, color: [...all], sports, } } = use;

console.log(sports);