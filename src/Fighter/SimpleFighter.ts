/*
A interface SimpleFighter existe;
A interface SimpleFighter possui o atributo lifePoints;
A interface SimpleFighter possui o atributo strength;
A interface SimpleFighter possui o método attack, que recebe um enemy do tipo SimpleFighter;
A interface SimpleFighter possui o método receiveDamage, que recebe um attackPoints do tipo number;
*/

export default interface SimpleFighter {
  lifePoints: number,
  strength: number,
  attack(enemy: SimpleFighter): void,
  receiveDamage(attackPoints: number): void,
}
