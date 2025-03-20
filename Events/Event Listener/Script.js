// Event Listner
let newbtn = document.querySelector("#btn");

newbtn.addEventListener("click", () => {
    console.log("handler1")
});

newbtn.addEventListener("click", () => {
    console.log("Handler2")
})

const Handler3 = () => {
    console.log("Handler3")
}
newbtn.removeEventListener("click", Handler3)


// Event Handling using : EVENET LISTNER AND EVENT OBJECT
let para = document.querySelector("#para");

para.addEventListener("click", (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
})

