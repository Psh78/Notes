
// let and const won't refer to the window object directly
let a = 5;
console.log(a);
console.log(window.a);
console.log(this.a);
console.log('');

// var refers to the window object directly
var c = 5;
console.log(c);
console.log(window.c);
console.log(this.c);
console.log('');

// Here b also refers to the window object directly
b = 3;
console.log(b);
console.log(window.b);
console.log(this.b);

// In the above cases this refers to the global contex.
/*  In the global execution context (outside of any function), this refers to the global
    object whether in strict mode or not.
*/

