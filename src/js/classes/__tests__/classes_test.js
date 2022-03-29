import Character from '../character';
import MagicChar from '../magicChar';
import Magician from '../magician';
import Daemon from '../daemon';

test('class Character created throw name', () => {
  const received = () => new Character('1', 'Bowerman');
  const expected = 'Имя должно быть длиной от 2 до 10 символов';
  expect(received).toThrow(expected);
});

test('class Character created throw type', () => {
  const received = () => new Character('heroesName', 'unknown_type');
  const expected = 'Неизвестный тип персонажа';
  expect(received).toThrow(expected);
});

test('class Character method "levelUp" - level++', () => {
  const unit1 = new Magician('герой1');
  unit1.levelUp();

  const received = unit1.level;
  const expected = 2;
  expect(received).toEqual(expected);
});

test('class Character method "levelUp" - throw', () => {
  const unit1 = new Magician('герой1');
  unit1.health = 0;
  const received = () => unit1.levelUp();
  const expected = 'Нельзя повысить левел умершего';
  expect(received).toThrow(expected);
});

test('class Character method "damage 20" - health change', () => {
  const unit1 = new Magician('герой1');
  unit1.damage(20);
  const received = unit1.health;
  const expected = 88;
  expect(received).toEqual(expected);
});

test('class Character method "damage 2000" - health change', () => {
  const unit1 = new Magician('герой1');
  unit1.damage(2000);
  const received = unit1.health;
  const expected = 0;
  expect(received).toEqual(expected);
});

test('class Magician - instance of Caracter', () => {
  const received = new Magician('герой1');
  expect(received).toBeInstanceOf(Character);
});

test('class Daemon - instance of Caracter', () => {
  const received = new Daemon('герой1');
  expect(received).toBeInstanceOf(Character);
});

test('class MagicChar - set/get stoned method', () => {
  const unit1 = new MagicChar('герой1', 'Magician');
  unit1.stonedStatus = true;
  const received = unit1.stonedStatus;
  const expected = true;
  expect(received).toEqual(expected);
});

test('class MagicChar - set/get distanceValue method', () => {
  const unit1 = new MagicChar('герой1', 'Magician');
  unit1.distanceValue = 5;
  const received = unit1.distanceValue;
  const expected = 5;
  expect(received).toEqual(expected);
});

test('class MagicChar - set/get attackChange method first', () => {
  const unit1 = new MagicChar('герой1', 'Magician');
  unit1.stonedStatus = true;
  unit1.distanceValue = 5;
  unit1.attackChange = 100;
  const received = unit1.attackChange;
  const expected = 48;
  expect(received).toEqual(expected);
});

test('class MagicChar - set/get attackChange method second', () => {
  const unit1 = new MagicChar('герой1', 'Magician');
  unit1.stonedStatus = false;
  unit1.distanceValue = 1000;
  unit1.attackChange = 100;
  const received = unit1.attackChange;
  const expected = 0;
  expect(received).toEqual(expected);
});
