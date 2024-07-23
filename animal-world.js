import { Dog } from "./inheritence/Dog.js";
import { Cat } from "./inheritence/Cat.js";
import { Shark } from "./inheritence/Shark.js";
import { GoldenFish } from "./inheritence/GoldenFish.js";


const rexas = new Dog("Rex", 'aviganis');
console.log(rexas.intro());
console.log(rexas.voice());

const rainius = new Cat("Rainius", 'bengalas');
console.log(rainius.intro());
console.log(rainius.voice());

const sharkis = new Shark('Sharkis');
console.log(sharkis.intro());
console.log(sharkis.voice());

const goldie = new GoldenFish('Goldie');
console.log(goldie.intro());
console.log(goldie.voice());
