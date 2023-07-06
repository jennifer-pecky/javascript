// alert('hello world')


let num = 35;

console.log(typeof num);

let str = "hello jenny"

console.log(typeof str);

let number = 'KNOW'

let boo = true

console.log(typeof boo);

let age


let obj = {
    name: 'John',
    user: "man",
    age: 10
}
console.log(obj);

let arr = ["jennifer", "chima", 12, "alerm"]

console.log(arr);

// prompt("how are you doing")

let isStr = 23
let isNum = String(isStr)
console.log(typeof isNum);



let reminder = 10 % 3

console.log(reminder);


let str1 = "chima"
let str2 = "David"
let str3 = `${str1}  ${str2}`

console.log(str3);



// comparism opre/ator

// let grt = 10 === 2
// console.log(grt);

// let ages = 40;

// if (ages > 17 & ages < 41) {
//     console.log("congrats you are eligible");
// } else if (ages > 40){
//     console.log("your too small");
// }

let num1 = 12
let num2 = 12

if (num1 % num2 == 0) {
    console.log("true");
} else {
    console.log("false");
}


let male = 30;
let female = 30

if (male > female) {
    console.log("male to the world");
} else if (female > male) {
    console.log("female to the world");
} else {
    console.log("male and female to the world");
}


// let names = ["jimmy", "peace", "john", "pecky"]

// if (isNum names[0]) {
//     console.log("invalid name");
// } else {
//     console.log("valid");
// }

let letter = 3 + 2 * 5 / 4 % 2 - (1 + 1)

console.log(letter);


let currentYear = 2023;

let yearOfBirth = 2007;

let res = currentYear - yearOfBirth

console.log(res);

// if (res >= 18) {
//     console.log("we need you");
// } else {
//     console.log("you too small");
// }

let checkAge = res >= 18 ? "we need you" : "your too small";

console.log(checkAge);

// let i = 0

// while (i < 3) {
//     console.log(i);

//     i++;
// }

// let fuel = 250
// let Tinubu = "president"

// while (Tinubu === "president" && fuel < 1000) {
//     console.log(fuel);
//     fuel++
// }



let evenNum = 0

while (evenNum <= 30) {
    evenNum++;

    if (evenNum % 2 === 0) {
        console.log(evenNum);
    }
}

do {
    evenNum++
    if (evenNum % 1 === 0) {
        console.log(evenNum);
    }

} while (evenNum <= 30);

for (let i = 1; i <= 10; i++) {

    console.log(`${i}  = ${i + i}`);
}

let i = 1

while (i <= 10) {
    console.log(`${i}  = ${i + i}`);
    i++
}


let mun = 20;
while (mun < 60) {
    mun++

    if (mun == 30) {
        mun = 41
    } if (mun == 60) {
        mun = "completed"
    } console.log(mun);
}

for (let mun = 20; mun <= 60; mun++) {
    if ((mun > 30) && (mun < 41)) continue;

    if (mun == 60) {
        mun = "completed"
    }
    console.log(mun);

}

let sum = 40;

for (let i = 0; i < sum; i++) {
    for (let j = 0; j < sum; j++) {

        for (let q = 0; q < sum; q++) {
            if (j + i + q == sum) {
                console.log(`${i} + ${j} + ${q}`);
            }

        }

    }
}


// function


