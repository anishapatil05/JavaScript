// Complex Object : 1.simple object , 2. String,boolean,number dataType, Anonymous Function

var product = {
  name: "Laptop",
  price: 78000,
  Company: {
    Company1: "Apple",
    Company2: "HP",
    Company3: "DELL",
  },
  versions: {
    version1: "Core 10",
    version2: "Core 11",
  },
  memroy: function () {
    var RAM = "500"
    return RAM;
  },

}
console.log(product.memroy());

// Print all details of Product
console.log(product)

// Pariticular detail : Laptop price
console.log(product.price)
console.log(product.Company.Company2)

// Updating Company3 as MAC
product.Company.Company3 = "MAC"
console.log(product)

// Deleting varsion1
delete product.versions.version1;
console.log(product)