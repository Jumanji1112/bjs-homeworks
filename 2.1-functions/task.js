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
	let sum = 0;
  let sr = {};
for	(let lesson in data){
	 for (let i = 0; i < data[lesson].length; i++){
    sum += data[lesson][i]; //суммируем оценки
  }
  let averageMark = sum / data[lesson].length; // средняя оценка
  sr[lesson] = averageMark;
  sum = 0;
}
return sr;
}

let marks = getAverageScore({
 algebra: [2, 4, 5, 2, 3, 4],
 geometry: [2, 4, 5],
 russian: [3, 3, 4, 5],
 physics: [5, 5],
 music: [2, 2, 6]
});
console.log (marks);

// getAverageScore({
// 	algebra: [2, 4, 5, 2, 3, 4],
// 	geometry: [2, 4, 5],
// 	russian: [3, 3, 4, 5],
// 	physics: [5, 5],
// 	music: [2, 2, 6]
// 	//average: [],
// });

function getAverageMark(marks) { 
    let sum = 0;
    console.log (sum);
console.log (getAverageScore);

	// for(let lessons in marks){
 //   for (let i = 0; i < marks[lessons].length; i++){
 //    sum += marks[lesson][i];
 //    console.log (sum);
 //  }
}
getAverageMark();