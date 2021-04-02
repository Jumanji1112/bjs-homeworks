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

//Задача №2. Ускорение долгих вычислений
function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  // Замедление на половину секунды.
  sleep(100); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function compareArrays( arr1, arr2 ){
return  (arr1.length == arr2.length) && arr1.every ((item, index) => item == arr2[index]);
}

function memorize(fn, limit){
	let memory = [];
	return function (...args){
		let memoryItem = memory.find(item => compareArrays(args, item.args));
		if (memoryItem) {
         return memoryItem.result;
      }
      let result = fn(...args);
      memory.push({
         args: args,
         result: result
      });
      if (memory.length > limit) {
         memory.shift();
      }
      return result;
	}
}

const mSum = memorize(sum, 5); 
sum(3, 4); 
mSum(3, 4);