import Invoice from './modules/Invoice.js';

const invoiceOne = new Invoice("Shiva", "web design work", 400);
const invoiceTwo = new Invoice("Jay", "booze", 1000);

// console.log(typeof invoiceOne);
// console.log(invoiceOne.format());

let invoices: Invoice[] = [];

invoices.push(invoiceOne);
invoices.push(invoiceTwo);

invoices.forEach(invoice=>{
  console.log(
    invoice.client, 
    // invoice.details,
    invoice.amount,
    invoice.format());
});

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// console.log(form?.children);

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber);
})