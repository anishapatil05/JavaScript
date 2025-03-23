function getData(DataId) {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            console.log("data ", DataId);
            reslove("success");
        }, 2000)
    })
}

    (async function getFinalData() {
        console.log("fetching data1...");
        await getData(1);
        console.log("fetching data2...");
        await getData(2);
        console.log("fetching data3...");
        await getData(3);
        console.log("fetching data4...");
        await getData(4);
    })();
