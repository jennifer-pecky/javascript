"use strict"



// FUNCTION DECLARATION

// function functionName () {
//     funtionbody
// }

// function showMessage(message) {
//     name("jjjjj")
//     calNum(10)
// }
// showMessage();

// function name(names) {
//     console.log(`my name is ${names}`);
// }

// name("jennifer")

// function calNum(sum) {
//     for (let i = 0; i < sum; i++) {
//         for (let j = 0; j < sum; j++) {
//             if (i + j == sum) {
//                 console.log(`${i} + ${j}`);
//             }
//         }
//     }
// }

// calNum(5)


// function checkAge(userAge) {
//     const Age = 18

//     if (userAge >= Age) {
//         console.log("you are eligible");
//     } else {
//         console.log("your are not welcome");
//     }
// }

// checkAge(20)








// function name(dateOfBirth, monthOfBirth, yearOfBirth) {
//     const date = new Date()
//     let year = date.getFullYear()
//     console.log(year);
//     let month = date.getMonth() + 1
//     console.log(month);
//     let day = date.getDate()
//     console.log(day);

//     if (year - yearOfBirth < 18) {
//         console.log("your not qualified");
//     } else if (year - yearOfBirth == 18 && monthOfBirth > month) {
//         console.log("your still not welcomed")
//     } else if (year - yearOfBirth == 18 && monthOfBirth == month && dateOfBirth > day) {
//         console.log("you are not eligible");
//     } else {
//         console.log("your are eligible");
//     }
// }

// name(15, 6, 1998)


// Question: write a function that accepts a number as a parameter and check whether it is a prime number or not a prime number 

// function isPrime(num) {
//     if (num < 2) {
//         return `is not a function`;
//     }

//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return `${false} is not a prime number`;
//         }
//     }
//     return `${true} it's a prime number`;
// }



// console.log(isPrime(18))


// question: Create a function that returns true if a number is an integer and false if a number is a float conditio


// function isInteger(num) {
//     return Number.isInteger(num);
// }


// console.log(isInteger(9));


// Question: using an Array of questions, create a function that returns a question from the Array based on their index


// let array = ["what are you doing now?", "where are you going to day?", "what is the name of your school", "what is your mother's name?"];

// function checkArr() {
//     console.log(array[2]);

// }

// checkArr();


// const date = new Date()

// let time = date.getHours()
// let message

// switch (true) {
//     case time >= 0 && time < 12:
//         message = "good morning to you"
//         break;

//     case time >= 12 || time < 24:
//         message = "good afternoon"
//         break;

//     default:
//         message = 'its late go and sleep';
//         break;
// }



// console.log(message);


// let age = prompt("What is your age?", 18);

// let welcome;

// if (age < 18) {

//     welcome = function () {
//         alert("Hello!");
//     };

// } else {

//     welcome = function () {
//         alert("Greetings!");
//     };

// }


// welcome()

// let checkInteger = (int) => {
//     if (Number.isInteger(int)) {
//         return true;
//     } else {
//         return false;
//     }
// };
// console.log(checkInteger(7));


// let postiveNum = 3.1;
// let negativeNum = -3.1;

// let random = 6;

// console.log(Math.random(random));

// console.log(Math.ceil(postiveNum));
// console.log(Math.ceil(negativeNum));

// let randomNum = 100;
// let random = Math.floor(Math.random() * randomNum)
// console.log(random);


// const minMax = (min,max) =>{
//   let maximum = Math.floor(Math.random() * max)
//   let minimum = Math.ceil(Math.random)

// };


// let str = "string"

// console.log(str.length);

// let Str = "string ones"

// console.log(Str.toUpperCase());
// console.log(Str.indexOf("r"));
// console.log(Str.lastIndexOf("i"));


let str = "string";

console.log(str.split(""));

// let str = "string"
// let str1 = "method"

// console.log(str.concat(" ", str1));
// console.log(str.replace(str1));


// let fruits = ["Apple", "Orange", "Plum"];
// console.log(fruilet Str = "string ones"

// console.log(Str.toUpperCase());
// console.log(Str.indexOf("r"));
// console.log(Str.lastIndexOf("i"));ts);
// fruits.push("pecky");
// console.log(fruits);
// fruits.shift("Apple")
// console.log(fruits);
// fruits.pop("james")
// console.log(fruits);
// fruits.unshift("james")
// console.log(fruits);

// fruits.splice(0, 2)
// console.log(fruits);

let fruit = ["Apple", "Orange", "Pear"];


for (let index = 0; index < fruit.length; index++) {
    console.log(fruit[index]);

}

let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
];

let user = users.find(item => item.id == 1);

console.log(user.name);


// let arr = [1, 7, 18, 15]

// arr.sort((a, b) => a - b)

// console.log(arr);

// console.log(arr.join("").split(""));



// Function to check if a word is palindrome or not//
function isPalindrome(word) {
    let reversedWord = word.split("").reverse().join("");
    return word.localeCompare(reversedWord) === 0;
}
let answer = isPalindrome("madam");
console.log(answer);


// Create a function that checks if a value exists more than once in an array.

// Example: [1, 1, 2, 2, 3, 4]

// The above array should return [1, 2] because they exist more than once.

// let arr = [1, 1, 2, 3, 3, 4, "fav", "fav"];

// function Duplicates(arr) {
//     let count = {};
//     let duplicates = [];

//     for (let i = 0; i < arr.length; i++) {
//         let value = arr[i];
//         count[value] = (count[value] || 0) + 1;
//               hasVowels.push()   if (count[value] === 2) {
//             duplicates.push(value);
//         }
//     }

//     return duplicates;
// }


// let duplicates = Duplicates(arr);
// console.log(duplicates);


// function checkDuplicates(arr) {
//     return arr.filter((value, index) => arr.indexOf(value) !== index);
// }
// let array = [1, 2, 2, 3, 4, 4, "fav", "fav", 0];

// console.log(checkDuplicates(array));


function isSum(sum) {

    for (let i = 0; i < sum; i++) {
        for (let j = 0; j < sum; j++) {
            if (j + i == sum) {
                let arr = []
                arr.push(i, j)
                console.log(arr);
            }



        }
    }
}

isSum(10)


// Using the arrow function, write a function that checks if the first character in a string is a vowel or consonant.
// If the first character is a vowel, the function will return the string + well.
// If the first character is a consonant, the function will return the string + nant.


const hasVowels = (word) => {
    let vowels = word.charAt(0).toLowerCase();

    if (["a", "e", "i", "o", "u"].includes(vowels)) {
        console.log(word + "well")
    } else {
        console.log(word + "nant");
    }

}

hasVowels("Apple")

function name(params) {

}


const maxNum = () => {
    const arr = [6, 7, 10, 20];
    let max = Math.max(...arr);
    return `${max}`
}
console.log(maxNum());




