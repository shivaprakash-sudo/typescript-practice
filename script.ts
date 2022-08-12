// explicit types
let username: string; // only string
let password: number; // only number

// username = 34;
// password = "Shiva"
username = "Shiva";
password = 12345;

// union types
let userName: string; // only string
let passWord: string | number; // string or number

userName = "Shiva";
passWord = 123;
passWord = "hello123" + 23;

// object

let myObj: object; // only object

// myObj = 25;     // can't change type once set
myObj = []; // array is an object too

myObj = {
  name: "Shiva",
  age: 90000,
};

let newObj: {
  name: string;
  age: number;
  alive: boolean;
};

newObj = {
  name: "Shiva",
  age: 90000,
  alive: true,
  // dead: false      // can't set new items to the object once initialized
};
