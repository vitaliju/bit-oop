export class Pet {
  constructor(name, bread) {
    this.name = name;
    this.bread = bread;
    this.legsCount = 4;
    this.animalType = "";
    this.sound = "";
    this.emoji = "";
    this.emojiCount = 1;
  }
  intro() {
    return `Hello, I am ${this.animalType} and my name is ${this.name}, my bread is ${this.bread}!`;
  }
  voice() {
    return `${this.name}: ${this.sound}!! ${this.emoji.repeat(this.emojiCount)}`;
  }
}
