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
// import Archetype from './Archetypes';
// import Race from './Races';

// export interface Fighter {
//   race: Race;
//   archetype: Archetype;

// }

// export default abstract class Archetype {
//   private _special: number;
//   private _cost: number;

//   constructor(private _name: string) {
//     this._special = 0;
//     this._cost = 0;
//   }

//   get name(): string {
//     return this._name;
//   }

//   get special(): number {
//     return this._special;
//   }

//   get cost(): number {
//     return this._cost;
//   }

//   static createdArchetypeInstances(): number {
//     throw new Error('Not implemented');
//   }

//   abstract get energyType(): EnergyType;
// }