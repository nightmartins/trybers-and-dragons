/*
A classe Race existe;
A classe Race é abstrata;
O método maxLifePoints da classe Race é abstrato;
O método maxLifePoints ao ser implementado retorna um valor numérico;
O atributo name da classe Race pode ser lido;
O atributo name da classe Race NÃO pode ser alterado;
O atributo dexterity da classe Race pode ser lido;
O atributo dexterity da classe Race NÃO pode ser setado;
O método createdRacesInstances deve existir e ser estático;
O método createdRacesInstances deve levantar um erro "Not implemented";
*/
export default abstract class Race {
  private _name: string;
  private _dexterity: number;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}
