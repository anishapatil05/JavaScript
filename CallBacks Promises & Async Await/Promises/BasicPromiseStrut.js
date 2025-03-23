
// let promise = new Promise((reslove, reject) =>{
//     console.log("I am promise");
//     reslove("success");
// })

function getData(getId, nextData) {

    return new Promise((reslove, reject) => {
        setTimeout(() => {
            console.log("data ", getId);
            reslove("success");
            // reject("errror")
            if (nextData) {
                nextData();
            }
        }, 5000)
    });

}
