// Objects : Object is DT and Collection of Properties thst have key value pair
// Details of Student
var details ={
    name : "Anisha",
    id :31,
    emailId :"patilanisha55@gmail.com",
    address : "Kothali"
}
// Print all details at a time
console.log(details)

// insert/ write / add data on exisiting details
var obj1 = details.DOB = "5th july 2004";
console.log(details);

// Access only one detail : emailId
console.log(details.emailId);

// Update exsiting detils
 details.emailId = "anishapatil05@gmail.com";
 console.log(details);

//  delete id
delete details.id
console.log(details);
