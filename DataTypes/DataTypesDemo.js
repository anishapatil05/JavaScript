// Data Types 
const product = {
    name: "Ball Pen",
    rating: 7.0002,
    deal: "Deal of the pay",
    price: 270,
    offer: "5%",
};

console.log(product);
console.log(typeof product);

product.name = "Blue pen";
console.log(product);

delete product.offer;
console.log(product);

console.log(product["deal"]);  //  deal :"Deal of the pay",
console.log(typeof product["deal"])   //String

const profile = {
    username: "@anishapatil_05",
    isFollow: true,
    posts: 0,
    followers: 150,
    following: 125,
    name: 'Anisha Patil',
    metaTag: "@anishapatil",
};

console.log(profile);
console.log(profile["followers"]);     // followers : 150,

console.log(typeof profile["metaTag"]);  // String

// updating 
profile.following = 130;
console.log(profile);

//  adding
profile.message = "Hello";
console.log(profile);

// deleting
delete profile.message;
console.log(profile);

