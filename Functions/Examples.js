// Example 1
let marks = [12, 78, 90, 67, 98, 97, 95];

let newArray = marks.filter((val) => {
    return val > 90;
})
console.log(newArray);

// Example 2
function makingArray(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        arr[i - 1] = i;

    }
    console.log(arr);
}
makingArray(10);

// Example 3
let data = marks.reduce((res, curr) => {
    return res + curr;
})
console.log("Sum: " + data);


// Example 4
let mul = marks.reduce((res, curr) => {
    return res * curr;
})
console.log("Factorial: " + mul);