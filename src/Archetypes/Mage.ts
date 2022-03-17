import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  _energyType: EnergyType;
  static archetypeCount = 0;

  constructor(name: string) {
    super(name);
    
    this._energyType = 'mana';
    Mage.archetypeCount += 1;
  }

  static createdArchetypeInstances(): number {
    return this.archetypeCount;
  }

  override get energyType(): EnergyType {
    return this._energyType;
  }
}