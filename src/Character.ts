/*
A classe Character existe;
A classe Character implementa a interface Fighter;
Character possui uma Race;
Character possui um Archetype;
Character possui um atributo lifePoints, que pode ser lido, mas não pode ser setado;
Character possui um atributo strength, que pode ser lido, mas não pode ser setado;
Character possui um atributo defense, que pode ser lido, mas não pode ser setado;
Character possui um atributo energy, que pode ser lido, mas não pode ser setado nem ter um de seus valores internos alterados;
Character possui um atributo dexterity, que pode ser lido, mas não pode ser setado;
Character pode subir de nível através do método levelUp, e seus atributos (amount, maxLifePoints, strength, dexterity, defense) terão um incremento;
Character pode receber danos através do método receiveDamage;
Character1 pode atacar Character2;
*/
import Archetype, { Mage } from './Archetypes';
import Race, { Elf } from './Races';
import Fighter from './Fighter';
import Energy from './Energy';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race() {
    return this._race;
  }

  get archetype() {
    return this._archetype;
  }

  get lifePoints() {
    return this._lifePoints;
  }

  get strength() {
    return this._strength;
  }

  get defense() {
    return this._defense;
  }

  get energy() {
    return this._energy;
  }

  get dexteriry() {
    return this._dexterity;
  }

  receiveDamage(attackPoints: number) {
    if (attackPoints > 0) {
      const damage: number = this.defense - attackPoints;
      if (damage > 0) {
        this._lifePoints -= damage;
      }
      if (this._lifePoints < 0) {
        this._lifePoints = -1;
      }
    }
    return this._lifePoints;
  }

  attack(enemy: Fighter) {
    return enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._energy.amount = 10;
    const lifePointsImprove = getRandomInt(1, 10);
    if (this._maxLifePoints + lifePointsImprove > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    } else {
      this._maxLifePoints += lifePointsImprove;
    }
    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: Fighter) {
    const specialMultiplier = getRandomInt(1, 4);
    return enemy.receiveDamage(this._strength * specialMultiplier);
  }
}