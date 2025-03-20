let newbtn = document.createElement("button");
newbtn.innerText = "click me!";
newbtn.style.backgroundColor="red";
newbtn.style.color="white";

let body = document.querySelector("body");
body.prepend(newbtn);

// Example 2
let para = document.querySelector("p");
// para.setAttribute("class","newClass");
para.classList.add("newClass");
para.classList.remove("newClass");
