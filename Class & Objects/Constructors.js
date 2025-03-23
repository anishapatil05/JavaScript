
class Stuednt {
    constructor(id) {
        console.log("creating const");
        this.id = id;
    }
    stuInfo(name, mark) {
        console.log("Student name ", name, " mark is ", mark);
    }
}

let stu1 = new Stuednt(111);
stu1.stuInfo("anisha", 78);

let stu2 = new Stuednt(222);
stu1.stuInfo("nisha", 789);