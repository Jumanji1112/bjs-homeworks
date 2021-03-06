'use strict'

function getResult(a,b,c){
  let x = [];
  let d;
  d = Math.pow(b, 2) - 4 * a * c; //дискриминант
    if (d == 0){ // массив с 1 корнем
      x.push ((-b + Math.sqrt(d)) / (2 * a));
    } 
    else if (d > 0){ //массив с 2 корнями
      x.push((-b - Math.sqrt(d)) / (2 * a));
      x.push((-b + Math.sqrt(d)) / (2 * a));
    }
    console.log(d)
    return x;
}

function getAverageMark(marks){
  let sum = 0;
  let amt = (marks.slice (0, 5)); //берем из массива первые 5 
  for (let i = 0; i < amt.length; i++){
    sum += amt[i]; //суммируем оценки
  }
  let averageMark = sum / amt.length; // средняя оценка
  if (marks.length == 0){
    return 0;
  }
  return averageMark;
}

function askDrink(name,dateOfBirthday){
  let now = new Date().getFullYear();
    if (now - dateOfBirthday.getFullYear() >= 18){
    	return(`Не желаете ли олд-фэшн, ${name}?`);
    }
    else {
    	return(`Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`);
    }
}
