export class Character {
  constructor(name, type) {
    const types = [
      "Bowman",
      "Swordsman",
      "Magician",
      "Daemon",
      "Undead",
      "Zombie",
    ];

    if (typeof name != "string" || name.length < 2 || name.length > 10) {
      throw new Error("Имя должно быть строкой от 2 до 10 символов");
    }

    if (!types.includes(type)) {
      throw new Error("Некорректный тип персонажа");
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error("Нельзя восстановить умершего персонажа");
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defense *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defense / 100);
    }
    if (this.health < 0) {
      this.health = 0;
    }
  }
}

export class Bowman extends Character {
  constructor(name) {
    super(name, "Bowman");
    this.attack = 25;
    this.defense = 25;
  }
}

export class Swordsman extends Character {
  constructor(name) {
    super(name, "Swordsman");
    this.attack = 40;
    this.defense = 10;
  }
}

export class Magician extends Character {
  constructor(name) {
    super(name, "Magician");
    this.attack = 10;
    this.defense = 40;
  }
}

export class Daemon extends Character {
  constructor(name) {
    super(name, "Daemon");
    this.attack = 10;
    this.defense = 40;
  }
}

export class Undead extends Character {
  constructor(name) {
    super(name, "Undead");
    this.attack = 25;
    this.defense = 25;
  }
}

export class Zombie extends Character {
  constructor(name) {
    super(name, "Zombie");
    this.attack = 40;
    this.defense = 10;
  }
}
