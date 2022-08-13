import Invoice from './modules/Invoice.js';
import Payment from './modules/Payment.js';
import HasFormatter from './interfaces/HasFormatter.js';

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice("Shiva", "webdesign work", 400);
// docTwo = new Payment("Jay", "website development", 500);

const docs: HasFormatter[] = [];

// docs.push(docOne);
// docs.push(docTwo);



const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let newDoc: HasFormatter;
  if (type.value === "invoice") {
	newDoc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
	// docs.push(newDoc);
	console.log(newDoc);
  } else if (type.value === "payment") {
	newDoc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
	// docs.push(newDoc);
	console.log(newDoc);
  }
}) 

console.log(docs);
