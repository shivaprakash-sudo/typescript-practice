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
const userObj = {name: "Shiva", uid:"sdgnklsd"};
doSomeMagic(userObj)
doSomeMoreMagic(userObj)