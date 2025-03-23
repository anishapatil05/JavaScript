
// callback using asynchronous code
function hello(a,b)
{
    setTimeout( () => {
         console.log(a+b);
    } , 3000)
}
hello(1,2);

// OR

function sum(a,b){
    console.log(a+b);
}
function calaculator(a,b,sumCallBack){
    sumCallBack(a,b);
}
calaculator(1,2,sum);