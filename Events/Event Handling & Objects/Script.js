
//  Event handling in Javascript
let newbtn = document.querySelector("#btn");

newbtn.onclick = () => {

    console.log("welcome!");
    let a = 23;
    a++;
    console.log(a);
}

let div = document.querySelector("div");

div.onmouseover = () => {
    div.style.backgroundColor = "pink";
}

// Event Object

let para = document.querySelector("#para");

para.onmouseover = (evt) => {
    console.log("New Content this is....");
    console.log(evt);     //MouseEvent
    console.log(evt.type);     //mouseover
    console.log(evt.target);      //<p id="para">Heloo anisha , how are you</p>
    console.log(evt.clientX, evt.clientY);   //82 153
}