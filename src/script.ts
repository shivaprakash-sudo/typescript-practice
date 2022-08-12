// classes
class Invoice {
  client:string;
  details:string;
  amount:number;

  constructor(c:string, d:string, a:number){
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format ():string {
    return `${this.client} owes ${this.amount} for ${this.details}`;
  }
}

const invoiceOne = new Invoice("Shiva", "web design work", 400);
const invoiceTwo = new Invoice("Jay", "booze", 1000);

// console.log(typeof invoiceOne);
// console.log(invoiceOne.format());

let invoices: Invoice[] = [];

invoices.push(invoiceOne);
invoices.push(invoiceTwo);

console.log(invoices);

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