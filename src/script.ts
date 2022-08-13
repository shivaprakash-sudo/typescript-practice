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
  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber];

  if (type.value === "invoice") {
	newDoc = new Invoice(...values);
  } else if (type.value === "payment") {
	newDoc = new Payment(...values);
  }
  li.render(newDoc, type.value, "start");
}) 

// Tuples		// can't change type positions in an array once defined

let tup: [string, number] = ["Shiva", 30];
// tup[0] = 35		// throws error because we're trying to reassing a string type
tup[0] = "Jay";		// no error, because we're not changing the type