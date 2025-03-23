// Classes in Js
class Employee {

    constructor()
    {
        console.log("creating new object");
    }
    work() {
        console.log("Devlopment");
    }

    salary(sal) {
        console.log("salary ", sal);
    }

}

//  Employee 1
let emp1 = new Employee();
emp1.work();
emp1.salary(4000);

// Employee 2
let emp2 = new Employee()
emp2.salary(48999);



