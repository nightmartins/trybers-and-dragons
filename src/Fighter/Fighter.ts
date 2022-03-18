/*
A interface Fighter existe;
A interface Fighter pode ser implementada corretamente;
A interface Fighter possui o atributo lifePoints;
A interface Fighter possui o atributo strength;
A interface Fighter possui o atributo defense;
A interface Fighter possui o método attack(), que recebe um enemy do tipo Fighter;
A interface Fighter possui o método special(), que recebe um enemy do tipo Fighter
A interface Fighter possui o método receiveDamage(), que recebe um attackPoints do tipo number;
O atributo energy deverá ser do tipo Energy, definido no arquivo src/Energy.ts;
A interface Fighter possui o método levelUp(), que não recebe parâmetros nem retorna nada;
*/

import Energy from '../Energy';

export default interface Fighter {
  lifePoints: number,
  strength: number,
  defense: number,
  energy?: Energy,
  attack(enemy: Fighter): void,
  special(enemy: Fighter): void,
  receiveDamage(attackPoints: number): void,
  levelUp(): void,
}

// Referência parâmetro opcional:
// https://stackoverflow.com/questions/48976984/optional-parameters-on-typescript-interfaces