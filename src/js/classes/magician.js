import MagicChar from './character';

export default class Magician extends MagicChar {
  constructor(name) {
    super(name, 'Magician');

    this.attack = 10;
    this.defence = 40;
  }
}
