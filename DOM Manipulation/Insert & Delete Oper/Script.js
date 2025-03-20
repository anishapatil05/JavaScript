let newbtn = document.createElement("button");
newbtn.innerText = "click me!";
console.log(newbtn);

let div = document.querySelector("div");
// At First
div.prepend(newbtn);

// AtLast
div.append(newbtn)

// before div
div.before(newbtn)

// After div
div.after(newbtn)

// Adding one Heading
let h1 = document.createElement("h1");
 h1.innerHTML ="<i>JAVASCRIPT</i>"
console.log(h1);

let body = document.querySelector("body");
 body.prepend(h1)

//  To remove node 
newbtn.remove();
let para = document.querySelector("p");
para.remove();

// appendChild()
let body2 = document.querySelector("body");
let para2 = document.createElement("p");
para2.innerText="heloo anisha";
body2.appendChild(para2);

// removeChild()
body.removeChild(para2)
