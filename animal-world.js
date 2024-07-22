import { Dog } from "./inheritence/Dog.js";
import { Cat } from "./inheritence/Cat.js";

const rexas = new Dog("Rex", 'aviganis');
console.log(rexas.intro());
console.log(rexas.voice());

const brisius = new Dog("Brisius", 'taksas');
console.log(brisius.intro());
console.log(brisius.voice());

const rainius = new Cat("Rainius", 'bengalas');
console.log(rainius.intro());
console.log(rainius.voice());
