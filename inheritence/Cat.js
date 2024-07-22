export class Cat {
  constructor(name) {
    this.name = name;
    this.legsCount = 4;
    this.animalType = "cat";
    this.sound = "miau";
    this.emoji = "🐈‍";
    this.emojiCount = 3;
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
