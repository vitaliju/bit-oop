export class Dog {
  constructor(name) {
    this.name = name;
    this.legsCount = 4;
    this.animalType = "dog";
    this.sound = "au";
    this.emoji = "🐕";
    this.emojiCount = 4;
  }
  intro() {
    return `Hello, I am ${this.animalType} and my name is ${this.name}!`;
  }
  voice() {
    // return `${this.name}: Au, au!`;
    return `${this.name}: ${this.sound}!! ${this.emoji.repeat(
      this.emojiCount
    )}`;
  }
}
