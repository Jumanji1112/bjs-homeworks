'use strict'
// Задача №1. Корни квадратного уравнения
function getSolutions(a, b, c) {
  let x1;
  let x2;
 	let D = Math.pow(b, 2) - 4 * a * c;  
 	if (D < 0){
 		return {
      D: D,
     	roots: []
     		}
 	}
 	else if (D == 0){
 		x1 = -b / (2 * a); 
 		return {
 			D: D,
 			roots: [x1]
 		}
 	}
 	else if(D > 0){
 		x1 = (-b + Math.sqrt(D)) / (2 * a);
 		x2 = (-b - Math.sqrt(D)) / (2 * a);
 		return {
 			D: D,
 			roots: [x1, x2]
 		}
 	}
 } 
function showSolutionsMessage (a, b, c){
	let result = getSolutions(a, b, c);
	console.log (`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log (`Значение дискриминанта: ${result.D}`);
   if (result.D < 0){
  	console.log ('Уравнение не имеет вещественных корней');
  }
  else if (result.D == 0){
  	console.log (`Уравнение имеет один корень X₁ = ${result.roots}`);
  }
  else if (result.D > 0){
  	console.log (`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  }
}

//Задача №2. Журнал успеваемости

function getAverageScore(data){ 
  let averageMark = {};
for (let lesson in data){
  averageMark[lesson] = getAverageMark(data[lesson]); 
 };
 averageMark.average = getAverageMark(Object.values(averageMark));
return averageMark;
}

let marks = getAverageScore({
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2, 4, 5],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 6],
    english: [4, 4, 3],
    poerty: [5, 3, 4],
    chemistry: [2],
    french: [4, 4]
});

function getAverageMark(marks) {
  let sum = 0;
  if (marks.length == 0) return 0; // если массив = 0
    for (let i = 0; i < marks.length; i++){
    sum += marks[i]; //суммируем оценки
  }
 return  sum / marks.length; // средняя оценка

}