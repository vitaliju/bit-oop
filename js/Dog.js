export class Dog {
  constructor(name, color, age) {
    this.name = name;
    this.furcolor = color;
    this.age = age;
    this.legsCount = 4;
    this.hasTail = true;
  }

  birthday() {
    this.age++;
    return `Suns ${this.age} gimtadienis! 🥳`;
  }

  lostLeg() {
    if (this.legsCount === 0) {
      return "Suo jau turi 0 (nuli) koju... daugiau nera ko prarasti";
    }
    this.legsCount--;
    return `Suo prarado koja...😭`;
  }

  hi() {
    return "Suo sako: au au!!";
  }

  think() {
    return "Suo galvoja: 🍖🍖🍖";
  }

  addNumbers(a, b) {
    if (a + b < 0) {
      return "Suo yra liudnas... negali suskaiciuoti negatyvaus kaulu skaiciaus";
    }
    return `Suo suskaiciavo: ${a} + ${b} = ${"🍖".repeat(a + b)}`;
  }

  manyBones(count) {
    return `Many bones: ${"🍖".repeat(count)}`;
  }
}
