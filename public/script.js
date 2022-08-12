"use strict";
// implicit declaration of type
let add = (a, b) => {
    return a + b;
};
console.log(add(2, 2));
// explicit declaration of type
let func;
func = () => {
    console.log("this is a function");
};
// function with an option value
let doMagic = (a, b, c) => {
    console.log(`${a} ${c} ${b}`);
};
doMagic(1, 4);
doMagic(1, 4, 3);
