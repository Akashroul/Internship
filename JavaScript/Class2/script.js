//! Operators
//? Arithmetic Operator
let a = 20
let b = 2
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b);

//? Assignment Operator
a = 50
// console.log(a += 10) // a = a+ 10
// console.log(a -= 20);
// console.log(a *= 2);
// console.log(a /= 2);
// console.log(a **= 2);
// console.log(a %= 3);

//? Comparision Operator
let p = 10
let q = 20
let r = "10"
let s = 10
// console.log(p == q);
// console.log(p == r);
// console.log(p != q);
// console.log(p === q);
// console.log(p === r);
// console.log(p !== q);
// console.log(p < q);
// console.log(p > q);
// console.log(p > s);
// console.log(p >= s);
// console.log(p <= s);

//? Logical Operator
let x = true
let y = false
let z = true
//* AND(Multiply)
// console.log(x && y);
// console.log(x && z);
//* OR(Addition)
// console.log(x || y);
// console.log(x || z);
//* NOT(Reverse)
// console.log(!x);
// console.log(!y);

//? Unary Operator
a = 10
//* Increment
// console.log(++a); //pre-increment
// console.log(a++); //post-increment
// console.log(a);
// console.log(++a);
// console.log(--a);
// console.log(++a);
// console.log(a); //13
// console.log(++a);
// console.log(a++);
// console.log(a--);
// console.log(a); //16

//* Decrement
// console.log(--a);
// console.log(a--);
// console.log(a);

//! Data Types
//? Primitive Type
//* Number
let num1 = 10
let num2 = 10.5
let num3 = -50.3
// console.log(typeof num1);
// console.log(typeof num2);
// console.log(typeof num3)

//* String
let str1 = "Hello"
let str2 = "10"
let str3 = '234!@#$%#$%^tfdvbn'
// console.log(typeof str3);
// console.log(str1[0]);

//* Boolean
let bool1 = true
let bool2 = false
// console.log(typeof bool1);

//* Undefined
let un
// console.log(typeof un);
// console.log(un);

//* null
let n = null
// console.log(n);
// console.log(typeof n);

//* BigInt
let big = BigInt(12345678987654321)
// console.log(typeof big);

//* Symbol
let symb = Symbol(1234567)
// console.log(typeof symb);

//? Non-Primitive or Reference Type
//* Array
let marks = [90, 80, 70, 76, 98]
// console.log(marks);
// console.log(marks[1]);

//* Object
let obj = {
    name: "ABCD",
    age: 20,
    marks: marks,
    address: {
        city: "BBSR",
        state: "Odisha",
        pin: 751030
    }
}
// console.log(obj);
// console.log(obj.name);
// console.log(obj["age"]);
// console.log(obj.address.city);
// console.log(obj.marks[1]);
//? Insert a new Key
obj.cgpa = 9.0
// console.log(obj);
//? Update a key
obj.age = 25
// console.log(obj);
//? Delete a key
delete obj.address
// console.log(obj);

//* Function
function example() {
    console.log("This is a function");
}
example()
example()
example()
example()