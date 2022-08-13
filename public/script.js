import Invoice from './modules/Invoice.js';
import Payment from './modules/Payment.js';
import ListTemplate from './modules/ListTemplate.js';
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector(".item-list");
const li = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let newDoc;
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    if (type.value === "invoice") {
        newDoc = new Invoice(...values);
    }
    else if (type.value === "payment") {
        newDoc = new Payment(...values);
    }
    li.render(newDoc, type.value, "start");
});
// Tuples		// can't change type positions in an array once defined
let tup = ["Shiva", 30];
// tup[0] = 35		// throws error because we're trying to reassing a string type
tup[0] = "Jay"; // no error, because we're not changing the type
