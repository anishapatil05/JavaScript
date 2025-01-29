// Functions in javascript 

// userdefined function : normal fun
function print() {
    var name = "Anisha"
    // predefined fuction : log()
    console.log(name)
}

function add() {
    var x = 7;
    var y = 9;
    var sum = x + y
    console.log(sum)
}
print();
add();

// parametrized fuction
function sub(a, b) {
    var sub = a - b;
    console.log(sub);
}
// function call
sub(7, 8)

// printing 2 values at a time
function printInfo(num, city) {
    console.log(num, city)
}
printInfo(9, "jaysingpur")

// Adding extra fun arguments passing to fuction
function fn(name,city,pin)
{
    console.log(name,city,pin)
}
fn("Anisha",'jaysingpur',9865,89)

// less function arguments passing to fuction
function fn(name,city,pin)
{
    console.log(name,city,pin)
}
fn("Anisha",'jaysingpur')