
class Person {
    constructor(name) {
        this.name = name;
        console.log("homo sapiens");
    }
    eat() {
        console.log("eating");
    }
    sleep() {
        console.log("Sleeping")
    }
}

class Engineer extends Person {

    constructor(name) {
        super(name);

    }
    work() {
        super.eat();
        console.log("Sloving problems")
    }

}
class Doctor extends Person {

    work() {
        console.log("Cheking patits and givening mediciens... ")
    }
}

let obj = new Engineer("anisha");
obj.sleep();
obj.work();

let doctor = new Doctor();
doctor.sleep();
doctor.work();

