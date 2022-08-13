import Invoice from './modules/Invoice.js';
import Payment from './modules/Payment.js';
import HasFormatter from './interfaces/HasFormatter.js';
import ListTemplate from './modules/ListTemplate.js';

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector(".item-list") as HTMLUListElement;
const li = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let newDoc!: HasFormatter;
  if (type.value === "invoice") {
	newDoc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else if (type.value === "payment") {
	newDoc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }
  li.render(newDoc, type.value, "start");
}) 