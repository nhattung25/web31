// Hàm khởi tạo weapon
function weaponType(type, damage, speed) {
  this.type = type;
  this.damage = damage;
  this.speed = speed;
}

const weapon1 = new weaponType("Magic wand", 60, 0.7);
const weapon2 = new weaponType("Sword", 50, 1);
const weapon3 = new weaponType("Dagger", 30, 1.2);
const weapon4 = new weaponType("Crossbow", 40, 0.8);
const weapon5 = new weaponType("Axe", 100, 0.5);

// Hàm khởi tạo character
function character(name, level, hp, mana, weapon) {
  this.name = name;
  this.level = level;
  this.hp = hp;
  this.mana = mana;
  this.weapon = weapon;
  this.changeWeapon = function (weaponType) {
    this.weapon = weaponType.type;
    return this;
  };
  this.attack = function () {
    alert("You re attacking ");
    return this;
  };
  this.getInfo = function () {
    alert(
      "Character information: " +
        "Class: " +
        this.name +
        ", Level: " +
        this.level +
        ", Health point: " +
        this.hp +
        ", Mana: " +
        this.mana +
        ", Equipped weapon: " +
        this.weapon
    );
    return this;
  };
}

const mage = new character("Mage", 21, 2100, 3000, (weapon = "hand"));
const knight = new character("Knight", 25, 3200, 1400, (weapon = "hand"));
const assassin = new character("Assassin", 30, 2500, 2000, (weapon = "hand"));
const archer = new character("Archer", 29, 2200, 2500, (weapon = "hand"));
const tanker = new character("Tanker", 32, 5000, 2200, (weapon = "hand"));

mage.changeWeapon(weapon2).attack().getInfo();
