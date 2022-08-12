// explicit types
var username; // only string
var password; // only number
// username = 34;
// password = "Shiva"
username = "Shiva";
password = 12345;
// union types
var userName; // only string
var passWord; // string or number
userName = "Shiva";
passWord = 123;
passWord = "hello123" + 23;
// object
var myObj; // only object
// myObj = 25;     // can't change type once set
myObj = []; // array is an object too
myObj = {
    name: "Shiva",
    age: 90000
};
var newObj;
newObj = {
    name: "Shiva",
    age: 90000,
    alive: true
};
