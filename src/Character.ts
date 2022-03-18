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
import Fighter, { SimpleFighter } from './Fighter';
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

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get energy(): Energy {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  get dexterity(): number {
    return this._dexterity;
  }

  receiveDamage(attackPoints: number): number {
    const damage: number = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    }
    if (this._lifePoints < 1) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: Fighter | SimpleFighter): void {
    return enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._energy.amount = 10;
    this._defense += getRandomInt(1, 10);
    this._maxLifePoints += getRandomInt(1, 10);
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this._strength * getRandomInt(1, 4));
  }
}

// Refatoração para corrigir o requisito 9, com a dica dada pelo aluno Fernando Serpa no Slack da turma.
// Fonte: https://code.tutsplus.com/pt/tutorials/solid-part-3-liskov-substitution-interface-segregation-principles--net-36710