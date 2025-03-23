
// Asynochronous code is happen using setTimeOut() ;

let a =9, b=1;
console.log(a+b);

// It does not wait for the excution 
function hello(){
    console.log("heloo...");
}

setTimeout(hello,2000);
console.log(a-b);
console.log(a*b);