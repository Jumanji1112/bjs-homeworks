"use strict"

//Задача №1. Практика функций высшего порядка
console.clear();
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];
console.log(weapons);

function getNames() {
	return weapons.map (item => item.name);
}

function getCountReliableWeapons (reliable){
return weapons.filter (item => item.durability > reliable).length;
}

function hasReliableWeapons (reliable){
	return weapons.some (item => item.durability > reliable);
}

function getReliableWeaponsNames (reliable){
	let weaponsName = weapons.filter (item => item.durability > reliable);
	return weaponsName.map (item => item.name);
}

function getTotalDamage () {
	let sumAttack = weapons.map (item => item.attack);
return	sumAttack.reduce (function(previousValue, item, index, array){
	return previousValue + item;
});
}