// anonymoues , hof,callback fun , reterned fun , function expression

// Anonymous Function & Function Expression
console.log("Anonymous Function & Function Expression")
var name = function () {
    console.log("Anisha");
}

// calling 
name();

// Higher Order Function And Callback Function
console.log("Higher Order Function And Callback Function")
function hof(x) {
    console.log("Higher Order Function")
    x();
}

hof(name);       //hof : Higher Order Function   && name : Callback Function.

// Returned Function
console.log("Returned Function")
function myFunction(x, y) {
    var res = x + y;
    return res;
}
console.log(myFunction(8, 9));


// Returend as Anonymous function
function add() {
    var x = 45;
    var y = 56;

    return function () {
        console.log(x + y)
    }
}

var result = add();
result();


