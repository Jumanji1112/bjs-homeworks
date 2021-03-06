'use strict'

function getResult(a,b,c){
  let x = [];
  let d;
    d = b** - 4 * a * c; //дискриминант
    if (d < 0){
      return x;
    } 
    else if (d == 0){ // массив с 1 корнем
      x.push ((-b + Math.sqrt(d)) / (2 * a));
          return x;
    } 
    else if (d > 0){ //массив с 2 корнями
      x.push((-b - Math.sqrt(d)) / (2 * a));
      x.push((-b + Math.sqrt(d)) / (2 * a));
          return x;
    }
}

function getAverageMark(marks){
  let sum = 0;
  let amt = (marks.slice (0, 5)); //берем из массива первые 5 

	    for (let i = 0; i < amt.length; i++){
    	sum += amt[i]; //суммируем оценки
      }
	let averageMark = sum / amt.length; // средняя оценка
    if (marks.length == 0){
        console.log ('Нет оценок');
      return  averageMark = 0;
  } else if (marks.length > 5){
    console.log ('Количсетво оценок больше 5');
  }
    return averageMark;
}

function askDrink(name,dateOfBirthday){
	let now = new Date; 
    let age = now.getFullYear() - dateOfBirthday.getFullYear(); //возраст пользователя
    if (age >= 18){
    	return(`Не желаете ли олд-фэшн, ${name}?`);
    } else if (age < 18){
    	return(`Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`);
    }
     return age;
}
