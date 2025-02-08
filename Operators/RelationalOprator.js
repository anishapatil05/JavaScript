// Relational / Comparsion Oprator

var a = 9;
var b = 10;

console.log(a > b);    // false

console.log(a < b);    //true

console.log(a >= b);  //false

var c = 10;
console.log(b <= c);    //true

var value = 200;
var value2 = "200";

console.log(value == value2);    //true

console.log(value === value2);    //false

console.log(value != value2);    // false

console.log(value !== value2)  //true



// Special Oprators : 1.delete

var productDetails = {
    name: "Laptop",
    price: 70000,
    warnty: "5 months",
    coolor: "sliver",
}

delete productDetails.warnty;
console.log(productDetails);

// typeOf
var arr = ["Anu", "Shauu", "Aapu", "Siddu", "Sanu"];

console.log(typeof arr)