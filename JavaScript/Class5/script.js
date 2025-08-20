//! User-Defined Function
//? Normal Function
// function functionName(){
//     //instruction
// }

function printSomething() {
    console.log("This is a normal function");
}

// printSomething()

//* Without Parameter
function sum() {
    return 10 + 20
}
let a = sum()
// console.log(a);

//* With Parameter
function add(a, b) {
    return a + b
}

let x = add(10, 20)
// console.log(x);
let y = add(100, 200)
// console.log(y);

// console.log(add(1));

//* Function With Default value
function sub(x = 0, y = 0) {
    console.log("X value is", x);
    console.log("Y value is", y);

    return x - y
}
// console.log(sub());


//? Arrow Function
// const functionName = () =>{
//     //instruction
// }

const sayHello = () => {
    console.log("Hello Eeryone");
}
// sayHello()

//? Anonymous Function
// const variable = function(){
//     //instruction
// }

const multiple = function () {
    console.log(10 * 2);
}
multiple()

//? Callback Function
// ()=>{

// }

//* forEach loop
// array.forEach(calbackFunction)

let arr = [8, 9, true, undefined, false, "Hi"]
arr.forEach((x, i) => {
    console.log("Value of X:", x)
    console.log("Value of I:", i);
}
)

//! map()
let marks = [50, 55, 45, 56, 76, 89]
// let newMarks = marks.forEach((mark) => {
//     return mark + 5
// })
// console.log(newMarks);

let updatedMarks = marks.map((mark, i) => {
    console.log(mark);
    console.log(i);

    return mark + 5
})

// console.log("Updated Marks", updatedMarks);

// let nmarks = marks.map((mark) => {
//     if (mark >= 55) {
//         console.log(mark);
//         return mark
//     }
// })

// console.log(nmarks);

//! filter()
const filterMarks = marks.filter((mark) => {
    return mark >= 55
})
console.log(filterMarks);

//! reduce()
let total = marks.reduce((sum, mark) => sum + mark, 0)
console.log(total);