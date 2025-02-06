// Opraters in Javascript
// Arithimatic Oprators : +,-,*,/,%;

var a = 8;
var b = 2;

// Addition
var result = a+b;
console.log("Addition: "+result);

// Subtraction
result = a-b;
console.log("Subtraction "+result);

// Multiplication
result = a*b;
console.log("Multiplication "+result);

// Division : Quitent
result = a/b;
console.log("Division "+result);

// Module : Reminder
result = a % b;
console.log(" Module "+result);

// Unary Oprator
var x = 4;
++x;  //Pre-increment
console.log(x); //5

x++; //Post-increment
console.log(x) // 6

var y = 6;
--y; //Pre-decrement
console.log(y);  //5

y--;  //post-decrement
console.log(y) // 4


var value1 = 100;
var value2 = 200;

var res = ++value1 + value2++;  //Expression
console.log(res); // 101 + 200 = 301
console.log(value2) // 201;

res = --value1 + value2--; //Expreesion
console.log(res);  // 100+201 = 301;
console.log(value2) // 200;

res = --value2 - value1--;
console.log(res);  //199 - 100 = 99;
console.log(value1); // 99



   