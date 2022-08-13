// interfaces

interface IsPerson {
	name: string,
	age: number,
	speak(a:string) : void,
	walk(a:number) : number
}

const person: IsPerson = {
	name: "Shiva",
	age: 20,
	speak(text){
		console.log(`${this.name} says ${text}`)
	},
	walk(distance){
		console.log(`${this.name} walked ${distance}kms`);
		return distance;
	}
};

const greet = (person:IsPerson) => {
	console.log(`Hello ${person.name}!`);
}

greet(person);

person.speak("ooolaallaaa");
person.walk(10);