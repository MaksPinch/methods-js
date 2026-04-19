import {
  Character,
  Bowman,
  Swordsman,
  Undead,
  Zombie,
  Magician,
  Daemon,
} from "../../index.js";

test("должен создавать персонажа Bowman с правильными статами", () => {
  const result = new Bowman("Legolas");
  expect(result).toEqual({
    name: "Legolas",
    type: "Bowman",
    health: 100,
    level: 1,
    attack: 25,
    defense: 25,
  });
});

test("должен создавать персонажа Swordsman с правильными статами", () => {
  const result = new Swordsman("Arthur");
  expect(result).toEqual({
    name: "Arthur",
    type: "Swordsman",
    health: 100,
    level: 1,
    attack: 40,
    defense: 10,
  });
});

test("должен создавать персонажа Magician с правильными статами", () => {
  const result = new Magician("Gandalf");
  expect(result).toEqual({
    name: "Gandalf",
    type: "Magician",
    health: 100,
    level: 1,
    attack: 10,
    defense: 40,
  });
});

test("должен создавать персонажа Daemon с правильными статами", () => {
  const result = new Daemon("Diablo");
  expect(result).toEqual({
    name: "Diablo",
    type: "Daemon",
    health: 100,
    level: 1,
    attack: 10,
    defense: 40,
  });
});

test("должен создавать персонажа Undead с правильными статами", () => {
  const result = new Undead("Skeletor");
  expect(result).toEqual({
    name: "Skeletor",
    type: "Undead",
    health: 100,
    level: 1,
    attack: 25,
    defense: 25,
  });
});

test("должен создавать персонажа Zombie с правильными статами", () => {
  const result = new Zombie("Shaun");
  expect(result).toEqual({
    name: "Shaun",
    type: "Zombie",
    health: 100,
    level: 1,
    attack: 40,
    defense: 10,
  });
});

test("ошибка при коротком имени", () => {
  expect(() => new Bowman("L")).toThrow(
    "Имя должно быть строкой от 2 до 10 символов",
  );
});

test("ошибка при длинном имени", () => {
  expect(() => new Bowman("LongNameCharacter")).toThrow(
    "Имя должно быть строкой от 2 до 10 символов",
  );
});

test("ошибка при неверном типе", () => {
  expect(() => new Character("Hero", "Orc")).toThrow(
    "Некорректный тип персонажа",
  );
});

test("ошибка если имя не строка", () => {
  expect(() => new Bowman(123)).toThrow(
    "Имя должно быть строкой от 2 до 10 символов",
  );
});

///  levelUp tests

describe("Character methods", () => {
  test("levelUp должен корректно повышать уровень и статы", () => {
    const bowman = new Bowman("Legolas");
    bowman.health = 50;
    bowman.levelUp();

    expect(bowman.level).toBe(2);
    expect(bowman.health).toBe(100);
    expect(bowman.attack).toBeCloseTo(30);
    expect(bowman.defense).toBeCloseTo(30);
  });

  test("levelUp должен выбрасывать ошибку, если персонаж мертв", () => {
    const bowman = new Bowman("Legolas");
    bowman.health = 0;
    expect(() => bowman.levelUp()).toThrow(
      "Нельзя восстановить умершего персонажа",
    );
  });

  test("damage должен корректно рассчитывать урон", () => {
    const bowman = new Bowman("Legolas");
    bowman.damage(40);
    expect(bowman.health).toBe(70);
  });

  test("damage не должен делать здоровье отрицательным", () => {
    const bowman = new Bowman("Legolas");
    bowman.damage(200);
    expect(bowman.health).toBe(0);
  });
});


