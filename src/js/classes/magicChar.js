import Character from './character';

export default class MagicChar extends Character {
  constructor(name, type) {
    super(name, type);

    this.defence = 40;
    this.attack = 10;
  }

  set stonedStatus(boolean) {
    this.stoned = boolean;
  }

  set attackChange(value) {
    this.attack = value;
  }

  set distanceValue(value) {
    this.distance = value;
  }

  get stonedStatus() {
    return this.stoned;
  }

  get attackChange() {
    let reduceDist = (100 - ((this.distance - 1) * 10)) / 100;
    if (reduceDist < 0) reduceDist = 0;

    let reduceStoned = 0;
    if (this.stonedStatus) reduceStoned = Math.log2(this.distance) * 5;

    return Math.round(this.attack * reduceDist - reduceStoned);
  }

  get distanceValue() {
    return this.distance;
  }
}
