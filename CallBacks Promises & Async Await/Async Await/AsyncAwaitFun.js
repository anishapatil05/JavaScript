// Asynchronous Function
function api() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            console.log("weather data...");
            reslove("success");
        }, 2000)
    })
};

(async function getWetherData() {
    await api();
})();
