import Invoice from './modules/Invoice.js';
import Payment from './modules/Payment.js';
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice("Shiva", "webdesign work", 400);
// docTwo = new Payment("Jay", "website development", 500);
const docs = [];
// docs.push(docOne);
// docs.push(docTwo);
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let newDoc;
    if (type.value === "invoice") {
        newDoc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
        // docs.push(newDoc);
        console.log(newDoc);
    }
    else if (type.value === "payment") {
        newDoc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
        // docs.push(newDoc);
        console.log(newDoc);
    }
});
console.log(docs);
