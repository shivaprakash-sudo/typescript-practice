"use strict";
const doMagic = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const doSomeMagic = (user) => {
    console.log(`${user.name} wants to play some games`);
};
const doSomeMoreMagic = (user) => {
    console.log(`${user.name} has an uid of ${user.uid}`);
};
doMagic(1234, "Banana");
const userObj = { name: "Shiva", uid: "sdgnklsd" };
doSomeMagic(userObj);
doSomeMoreMagic(userObj);
