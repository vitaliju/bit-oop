export class Bird {
    constructor(name) {
        this.name = name;
        this.animalType = 'bird';
        this.wingCount = 2;
        this.sound = '';
        this.emoji = '';
        this.emojiCount = 1;
    }
    intro() {
        return `Hello I am a ${this.animalType} and my name is ${this.name}!`;
    }
    voice() {
        return `${this.name}: ${this.sound}!! ${this.emoji.repeat(this.emojiCount)}`;
    }
}