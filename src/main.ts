type Race = "Human" | "Elf" | "Orc" | "Dwarf" | "Half-elf" | "Tiefling";
type Sex = "Male" | "Female";
type Specialization = "Warrior" | "Rogue" | "Mage" | "Barbarian";
type Background = "Entertainer" | "Criminal" | "Soldier" | "Sage";
type Appearance = {
	hair: "Dark" | "Light" | "Ginger" | "Bald";
	eyeColor: "Green" | "Blue" | "Brown";
	skinColor: "White" | "Dark" | "Yellow" | "Red" | "Green";
	height: number;
};
type Money = number;

class Character {
	name: string;
	race: Race;
	sex: Sex;
	specialization: Specialization;
	background: Background;
	appearance?: Appearance;
	money: Money;
	constructor(builder: CharacterBuilder) {
		this.name = builder.name;
		this.race = builder.race;
		this.sex = builder.sex;
		this.specialization = builder.specialization;
		this.background = builder.background;
		this.appearance = builder.appearance;
		this.money = builder.money;
	}
}

class CharacterBuilder {
	name: string;
	race: Race;
	sex: Sex;
	specialization: Specialization;
	background: Background;
	appearance?: Appearance;
	money: Money;
	constructor(name: string) {
		this.name = name;
		this.race = "Human";
		this.sex = "Male";
		this.specialization = "Warrior";
		this.background = "Soldier";
		this.money = 0;
	}
	withRace(race: Race) {
		this.race = race;
		return this;
	}
	withSex(sex: Sex) {
		this.sex = sex;
		return this;
	}
	withSpecialization(specialization: Specialization) {
		this.specialization = specialization;
		return this;
	}
	withBackground(background: Background) {
		this.background = background;
		return this;
	}
	withAppearence(appearance: Appearance) {
		this.appearance = appearance;
		return this;
	}
	withMoney(money: Money) {
		this.money = money;
		return this;
	}
}

let builder = new CharacterBuilder("Karlakh")
	.withSex("Female")
	.withRace("Tiefling")
	.withSpecialization("Barbarian")
	.withAppearence({
		eyeColor: "Brown",
		hair: "Dark",
		height: 200,
		skinColor: "Red",
	})
	.withBackground("Soldier")
	.withMoney(1000);

let newCharacter = new Character(builder);

console.log(newCharacter);
