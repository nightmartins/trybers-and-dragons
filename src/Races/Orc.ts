import Race from './Race';

export default class Orc extends Race {
  maxLifePoints: number;
  static raceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    
    this.maxLifePoints = 74;
    Orc.raceCount += 1;
  }

  static createdRacesInstances(): number {
    return this.raceCount;
  }
}