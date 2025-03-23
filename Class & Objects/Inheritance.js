class Parent {
    method() {
        console.log("Parent class method");
    }
    car()
    {
        console.log("Parent car")
    }
}
class child extends Parent {
   car()
   {
    console.log("Child car");
   }
}

let obj = new child();
obj.method();

let obj2 = new child();
obj2.car();