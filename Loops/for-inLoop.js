// for-in loop in javascript

// Object

const studentDetails = {
    name : "Anisha",
    id : 31,
    city : "jaysingpur",
    cgpa : 7.4
};

for(let keys in studentDetails){
    console.log(keys +":"+studentDetails[keys]);
}
console.log("\n");

// object 2 
const product ={
    name : "Laptop",
    price : 450000,
    model : "Windows 10",
}

for(let values in product){
    console.log(values+":"+product[values]);
}

