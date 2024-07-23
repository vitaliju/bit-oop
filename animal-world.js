import { Dog } from "./inheritence/Dog.js";
import { Cat } from "./inheritence/Cat.js";
import { Shark } from "./inheritence/Shark.js";
import { GoldenFish } from "./inheritence/GoldenFish.js";
import { Raven } from "./inheritence/Raven.js";
import { Pigeon } from "./inheritence/Pigeon.js";


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

const rangie = new Raven('Rangie');
console.log(rangie.intro());
console.log(rangie.voice());

const bulba = new Pigeon('Bulba');
console.log(bulba.intro());
console.log(bulba.voice());