/*Task : You are creating website for your college and create a class with 2 properties name and email. 
 it also has a method called viewData that allows to view website data */
let Data = "Secret Information";
class User {

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("Data ", Data);
    }
}
class Admin extends User {

    constructor(name, email) {
        super(name, email);
    }
    editData() {
        super.Data = "edited information";
    }
}
let stu1 = new User("anisha", "patilanisha55@gmail.com");
stu1.viewData();
let stu2 = new User("shreya", "shreyapati666@gmail.com");

let adminObj = new Admin("prema", "prmparit44@gmail.com");


