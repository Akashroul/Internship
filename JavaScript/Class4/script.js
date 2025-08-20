//! Conditional Statements
//? if statement
// if(condition){
//     statement
// }

// let age = 100
// if (age >= 18) {
//     console.log("You're adult");
// }

//? if-else
// if(condition){
//     statement
// }else{
//     statement
// }

// if (age >= 18) {
//     console.log("You're an adult");
// } else {
//     console.log("You're a minor");
// }

// if (age > 0 && age < 18) {
//     console.log("You're a minor");
// } else {
//     console.log("You're an adult");
// }

//? else-if
// if(condition){
//     statement
// }else if(condition){
//     statement
// }else{
//     statement
// }

// if (age >= 18) {
//     console.log("You're an adult");
// } else if (age > 0 && age < 18) {
//     console.log("You're a minor");
// } else {
//     console.log("Invalid age");
// }

// let time = 23
// if (time > 0 && time < 12) {
//     console.log("Morning");
// } else if (time >= 12 && time <= 16) {
//     console.log("Afternoon");
// } else if (time > 16 && time <= 22) {
//     console.log("Evening");
// } else if (time > 22 && time <= 24) {
//     console.log("Night");
// } else {
//     console.log("Invalid Time");
// }

//? Switch case
// switch (expression) {
//     case value1:
//         statement
//         break
//     case value2:
//         statement
//         break
//     case value3:
//         statement
//         break
//     default:
//         statement
// }

let val = 2
// switch (val) {
//     case 1:
//         console.log("Case One")
//         break
//     case 2:
//         console.log("Case Two")
//         break
//     case 3:
//         console.log("Case Three")
//         break
//     case 4:
//         console.log("Case Four")
//         break
//     default:
//         console.log("Default case")
// }


//! Array Inbuilt Methods
let arr = [0, 1, 2, 3, 4, 5, 6, true, null, undefined, 7, 8, 9, 10]
// console.log("Original Array", arr);

//? splice()
// array.splice(startIndex, deleteCount, newElements)

// arr.splice(2, 0, "Hi", "Hello", true) //add new element
// console.log(arr);

// arr.splice(1, 2, "Hi", "Hello", true) //replace element
// console.log(arr);

// arr.splice(3, 3,) //delete element
// console.log(arr);

//? slice()
// array.slice(startIndex, endIndex)

let subArr = arr.slice(2, 8)
// console.log(subArr);

//? includes()
// array.includes(searchValue)

// console.log(arr.includes(1));

//? reverse()
// array.reverse()

// arr.reverse()
// console.log(arr);

//? toString()
array.toString()

let strArr = arr.toString()
// console.log(strArr);

//! String and It's Inbuilt methods
let name = "Ankit"
let age = 22
// console.log("My name is", name, "and my age is", age);

//? Template String
// console.log(`Hello Everyone`);

//? Template Literals
// console.log(`My name is ${name}, and my age is ${age}`);

//! Inbuilt Methods
let str = "    Lorem ipsum, dolor ipsum sit amet consectetur adipisicing elit. Deserunt numquam possimus officiis ipsum minima cum asperiores quae veritatis, ipsum quidem, unde ratione facilis perspiciatis a molestias. Incidunt dignissimos recusandae commodi doloribus perspiciatis?   "

//? toUpperCase()
// console.log(str.toUpperCase());

//? toLowerCase()
// console.log(str.toLowerCase());

//? indexOf()
// console.log(str.indexOf("ipsum"));

//? lastIndexOf()
// console.log(str.lastIndexOf("ipsum"));

//? charAt()
// console.log(str.charAt(10));

//? slice()
// console.log(str.slice(1, 10));

//? replace()
let subStr = str.replace("ipsum", "a")
// console.log(subStr);

//? replaceAll()
let rplcStr = str.replaceAll("ipsum", "b")
// console.log(rplcStr);

// let s = str.replaceAll(" ", "")
// console.log(s);


//? trim()
// console.log(str.trim());

//? length
// console.log(str.length);

//? split()
let arrStr = str.split("")
console.log(arrStr);