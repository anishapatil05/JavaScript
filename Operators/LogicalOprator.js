// Logical Oprator
var details = [
    {
        brand: "MAC",
        model: "MAC 15",
        price: 80000
    },
    {
        brand: "HP",
        model: "Core 10",
        price: 40000,
    },
    {
        brand: "DELL",
        model: "Core11",
        price: 30000,
    },
    {
        brand: "HP",
        model: "Core 13",
        price: 70000,
    },
    {
        brand: "DELL",
        model: "Core 13",
        price: 50000,
    },
]

var filteredData = details.filter(function (e) {
    return ((e.brand == "DELL" || e.brand == "HP") && (e.model == "Core 13" && e.price >= 50000));
    // t || t = t && (t && t) = t ===> t && t = t
})
console.log(filteredData);