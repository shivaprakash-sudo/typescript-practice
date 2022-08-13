import Invoice from './modules/Invoice.js';
const invoiceOne = new Invoice("Shiva", "web design work", 400);
const invoiceTwo = new Invoice("Jay", "booze", 1000);
// console.log(typeof invoiceOne);
// console.log(invoiceOne.format());
let invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
invoices.forEach(invoice => {
    console.log(invoice.client, 
    // invoice.details,
    invoice.amount, invoice.format());
});
const form = document.querySelector(".new-item-form");
// console.log(form?.children);
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
