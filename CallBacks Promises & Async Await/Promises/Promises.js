
const getPromise = () => {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            console.log("I am Promise");
            // reslove("success");
            reject("error");
        }, 2000)
    })
}

let p1 = getPromise();

p1.then((res) => {
    console.log(res);
})

p1.catch((err) => {
    console.log(err);
})