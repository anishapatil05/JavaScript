// 3.switch statment
function notification(message) {
    console.log("Choose 1.GM , 2.GA, 3.GE");
    switch (message) {
        case "GM": {
            console.log("Good Morning");
        }
            break;
        case "GA": {
            console.log("Good Afternoon");
        }
            break;
        case "GE": {
            console.log("Good Evining");
        }
            break;
        default: {
            console.log("Choose correct choise")
        }
    }
}
notification("i");