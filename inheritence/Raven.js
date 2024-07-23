import { Bird } from './Bird.js';

export class Raven extends Bird {
    constructor(name) {
        super(name);
        this.animalType = 'raven';
        this.sound = 'kar';
        this.emoji = '🐦‍';
        this.emojiCount = 3;
    }
}
