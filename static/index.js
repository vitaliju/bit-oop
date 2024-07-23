/*
  Automobilis:
      - konvertavimas is km i mylias

  Finansai:
       - konvertavimas is EUR i USD

  Matematika:
       - suma
       - skirtumas
       - daugyba
       - dalyba
       
  Tekstas:
       -     
*/

export class Tekstas {
    static firstSymbol(str) {
        return str[0] ?? '';
    }
    static lastSymbol(str) {
        return str.at(-1) ?? '';
    }
}

console.log(Tekstas.firstSymbol('Labas'));
console.log(Tekstas.firstSymbol('Rytas'));
console.log(Tekstas.lastSymbol('Rytas'));
console.log(Tekstas.lastSymbol('Labas'));