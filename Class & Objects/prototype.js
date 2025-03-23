const Employee = {

    incomTax() {
        console.log("10% tax")
    }
}

// object1
const Employee1 = {
    salary: 5000,

}

const Employee2 = {
    salary: 60000,
    incomTax() {
        console.log("20% tax have to pay")
    }
}

const Employee3 = {
    salary: 20000,
}

// calling prototype

Employee1.__proto__ = Employee;
Employee2.__proto__ = Employee;
Employee3.__proto__ = Employee;