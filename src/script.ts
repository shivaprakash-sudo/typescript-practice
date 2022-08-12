// implicit declaration of type
let add = (a: number, b: number) => {
  return a + b;
};

console.log(add(2, 2));

// explicit declaration of type
let func: Function;

func = () => {
  console.log("this is a function");
};

// function with an option value
let doMagic = (a: number, b: number, c?: number | string): void => {
  console.log(`${a} ${c} ${b}`);
};

doMagic(1, 4);

doMagic(1, 4, 3);
