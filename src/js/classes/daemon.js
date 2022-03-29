import MagicChar from './character';

export default class Daemon extends MagicChar {
  constructor(name) {
    super(name, 'Daemon');

    this.attack = 10;
    this.defence = 40;
  }
}
