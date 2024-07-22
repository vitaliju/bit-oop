export class Pet {
  constructor(name) {
    this.name = name;
    this.legsCount = 4;
    this.animalType = "";
    this.sound = "";
    this.emoji = "";
    this.emojiCount = 0;
  }
  intro() {
    return `Hello, I am ${this.animalType} and my name is ${this.name}!`;
  }
  voice() {
    //return `${this.name}: Miau miau!!`;
    return `${this.name}: ${this.sound}!! ${this.emoji.repeat(
      this.emojiCount
    )}`;
  }
}
