// Arrays in Javascript 

// Declaration of array
var arr = ["Anisha", 31, 9850479043, "Patil", "Anisha"];

console.log("***Pre-defined Functions***")

//  1.unshift();     Add/inserting new element at initial.
arr.unshift("Anu");
console.log(arr);

//  2.push();      inserting at last position.  
arr.push("GitaAnjali", { village: "Kothali" })
console.log(arr);

//  3.shift();      removing at first position element.  
arr.shift();
console.log(arr);

//  4.pop();       removing last position element.
arr.pop();
console.log(arr);
arr.pop();

//  5.splice();       removing & adding elemtent at specific element at specific position.  
// Removing at idx 1 element.
arr.splice(1, 1);
console.log(arr);

// Adding at idx 3
arr.splice(2, 0, "Anu");
console.log(arr);

//  6.slice();     extract some part of the array
var newArray = arr.slice(0, 3);
console.log(newArray);

//  7.indexOf()   for 1st elemet Gives index Number of elemnt to identify that element
var idx = arr.indexOf("Anisha");
console.log(idx);

//  8.lastIndexOF()  it gives that duplicate element last index
var index = arr.lastIndexOf("Anisha");
console.log(index);

//  9.includes() It's only returns boolean value : true , false
var isPresentElement = arr.includes("Patil")
console.log(isPresentElement);

//  10.Access 1 st index element 
console.log(arr[1]);

//  11.length Property : return length of arr
console.log("Length of array is: " + arr.length);


var array = [10, 20, 30, 40, 50];
//  12. forEach();   Accessing all elements Present in the array. (Does not return callback() Any value)
array.forEach(function (e, i) {
    console.log(e, i);
});

// 13.map()   return always some value 
var newarray = array.map(function (e, i) {
    return e * 50;
})
console.log(newarray);

// 14.filter() filter the array or data based on some condition & it always return boolean value only
var newData = array.filter(function (e, i) {
    return e > 30;
})
console.log(newData);


// Accessing Particular data int array
var details = [

    { brand: "HP", Price: 50000 },
    { brand: "DELL", Price: 40000 },
    { brand: "MAC", Price: 90000 },
    { brand: "HP", Price: 90000 },
    { brand: "Samsang", Price: 80000, model: "Galxy15" },
    { brand: "realme", Price: 15000, model: "realme11" },
    { brand: "Apple", Price: 980000, model: "IPhone15" },
    { brand: "Apple", Price: 100000, model: "IPhone16" },

];

var filteredData = details.filter(function (e, i) {
    return e.Price > 40000;

});
console.log(filteredData);