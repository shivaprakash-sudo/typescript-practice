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
    if (type.value === "invoice") {
        newDoc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else if (type.value === "payment") {
        newDoc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    li.render(newDoc, type.value, "start");
});
