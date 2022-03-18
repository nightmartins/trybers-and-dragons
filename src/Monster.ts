/*
A classe Monster existe;
A classe Monster implementa a interface SimpleFighter;
Monster possui um atributo lifePoints, que pode ser lido, mas não pode ser setado;
Monster possui um atributo strength, que pode ser lido, mas não pode ser setado;
Monster pode receber danos através do método receiveDamage, fazendo com que seus lifePoints diminuam;
Monster pode atacar um Character, e o Character receberá dano;
Character pode atacar um Monster, e o Monster receberá de dano;
*/

import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number) {
    const damaged: number = this._lifePoints - attackPoints;
    if (damaged > 0) {
      this._lifePoints = damaged;
    }
    if (damaged <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter) {
    enemy.receiveDamage(this._strength);
  }
}
