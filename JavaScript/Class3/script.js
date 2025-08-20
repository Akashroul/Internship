//! Loops in JS
//? for loop
// for(initialization; condition; iteration/updation){
//     //instruction
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 20; i > 0; i--) {
//     console.log(i);
// }

// let marks = [90, 98, 70, 10, 21, 34, 56, 76, 80]
// for (let i = 0; i < marks.length; i++) {
//     console.log(marks[i]);
// }

//? while loop
// initialization
// while(condition){
//     //instruction
//     updation
// }

// let i = 0
// while (i < 10) {
//     console.log(i);
//     i++
// }

// while(true){
//     console.log("Hello"); //infinite loop
// }

//? do-while loop
// for (let i = 0; i > 20; i++) {
//     console.log(i);
// }

// initialization
// do{
//     //instruction
//     updation
// }while(condition)

// let j = 0
// do {
//     console.log(j);
//     j++
// } while (j > 20)

//? for-of
// for (iterator of collection) {
//     //instruction
// }

// let str = "Hello"
// for (let s of str) {
//     console.log(s);
// }

// let marks = [90, 98, 70, 10, 21, 34, 56, 76, 80]
// for (let m of marks) {
//     console.log(m);
// }

//? for-in
// for(iterator in Object){
//     //instruction
// }
let obj = {
    name: "ABCD",
    age: 20,
    mark: 90,
    address: "BBSR"
}

// for (let key in obj) {
//     console.log(key);
//     console.log(obj[key]);
// }

//! Array Inbuilt Methods
let arr = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arr);

//? push()
// array.push(newElements)

// arr.push(9, 10, true)
// console.log(arr);

//? pop()
// array.pop()

// arr.pop()
// console.log(arr);

//? unshift()
// array.unshift(newElements)

// arr.unshift("Hi", undefined, null)
// console.log(arr);

//? shift()
// array.shift()

arr.shift()
console.log(arr);