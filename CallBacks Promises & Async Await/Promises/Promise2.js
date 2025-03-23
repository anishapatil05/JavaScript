// Promise Example
function asyncfun1() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            console.log("data1");
            reslove("success");
        }, 3000)
    });
}
function asyncfun2() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            console.log("data2");
            reslove("success");
        }, 3000)
    });
}

//   IT PRINTS BOTH PARALLAY SO IT RESLOVED TO BE FOLLWED EXAMPLE
// console.log("fetching data1...")
// asyncfun1().then((res) =>{
//     console.log(res);
// })

// console.log("fetching data2....")
// asyncfun2().then((res) =>{
//     console.log(res);
// })

// RESLOVED SOLUTION
console.log("fetching data1...")
asyncfun1().then((res) => {
    console.log("fetching data2....");
    asyncfun2().then((res) => {
        console.log(res);
    })
})

