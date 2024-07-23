import { Fish } from "./Fish.js";

export class Shark extends Fish {
    constructor(name) {
        super(name);
        this.animalType = 'shark';
        this.sound = 'shark';
        this.emoji = '🦈';
    }
}