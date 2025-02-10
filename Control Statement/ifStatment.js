// Control Statment   : 1. if & if-else
function isEvenNum(num) {
    if (num % 2 == 0) {
        console.log(num, "Number is Even");
    } else {
        console.log(num, "Number is Odd");
    }
}

isEvenNum(8);
isEvenNum(7);

// 2. else-if

function marksGrade(marks) {
    if (marks >= 80 && marks <= 100) {
        console.log("A Greade");
    } else if (marks >= 70 && marks <= 90) {
        console.log("B Grade");
    } else if (marks >= 60 && marks <= 69) {
        console.log("D Grade");
    } else {
        console.log("E grade")
    }

}
marksGrade(67);

