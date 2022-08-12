// type aliases
type StringOrNum = string | number;
type objWithName = {
  name: string,
  uid: StringOrNum
}

const doMagic = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`)
}

const doSomeMagic = (user: objWithName) => {
  console.log(`${user.name} wants to play some games`);
}
const doSomeMoreMagic = (user: objWithName) => {
  console.log(`${user.name} has an uid of ${user.uid}`);
}

doMagic(1234, "Banana")
const userObj = { name: "Shiva", uid: "sdgnklsd" };
doSomeMagic(userObj);
doSomeMoreMagic(userObj);


// function signature
let calc: (a: number, b: number, operation?: string) => string | number

calc = (a, b, operation) => {
  if (operation === "add" || operation === "addition") {
    return a + b;
  } 
  if (operation === "subtract" || operation === "subtraction") {
    return a - b;
  }
  if (operation === "multiply" || operation === "multiplication") {
    return a * b;
  } 
  if (operation === "divide" || operation === "division") {
    return a / b;
  }
  return "Please provide an operation to perform the calculation";
}

console.log(calc(3, 0, "divide"));