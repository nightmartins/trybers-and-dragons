/*
A classe Dwarf existe;
A classe Dwarf herda de Race;
O atributo name da classe Dwarf pode ser lido;
O atributo dexterity da classe Dwarf pode ser lido;
O método createdRacesInstances deve retornar o número correto de instâncias criadas da classe Dwarf;
O atributo maxLifePoints da classe Dwarf existe e é igual a 80;
*/

import Race from './Race';

export default class Dwarf extends Race {
  maxLifePoints: number;
  static raceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    
    this.maxLifePoints = 80;
    Dwarf.raceCount += 1;
  }

  static createdRacesInstances(): number {
    return this.raceCount;
  }
}