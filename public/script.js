"use strict";
// interfaces
const person = {
    name: "Shiva",
    age: 20,
    speak(text) {
        console.log(`${this.name} says ${text}`);
    },
    walk(distance) {
        console.log(`${this.name} walked ${distance}kms`);
        return distance;
    }
};
const greet = (person) => {
    console.log(`Hello ${person.name}!`);
};
greet(person);
person.speak("ooolaallaaa");
person.walk(10);
