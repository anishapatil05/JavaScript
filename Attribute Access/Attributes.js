// Getting attribue 1.From div : class 
let div = document.querySelector("div");
console.log(div);      //<div class="box">box1</div>

let att = div.getAttribute("class");
console.log(att)    //box

// 1.From h2 : id 
let heading = document.querySelector("h2");
let head = heading.getAttribute("id");
console.log(head)     //head

// 2.From h2 : name 
let name = heading.getAttribute("name");
console.log(name);    //heading

//3.From para : class
let para = document.querySelector("p");
console.log(para.getAttribute("class"));

// Setting Attriubute

// set the para tag class name as new class
let newclass = document.querySelector("p");
console.log(newclass.setAttribute("class","newClass"));

let divv = document.querySelector("div");
divv.style.backgroundColor="red";
divv.style.fontSize="40px";
divv.innerText ="hello anisha";
divv.style.visibility="hidden";

