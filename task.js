 /*
	Кратко о работе с функциями:
	1) Значения в скобках - это аргументы, которые мы получаем в момент вызова функции. Их и надо присваивать требуемым в заданиях переменным.
	2) После ключевого слова return вместо комментария необходимо написать переменную либо выражение с ответом.
	3) console.log() прописывать не обязательно, т.к. команда return уже означает вывод результата работы функции.
 */

let algebra;
let geography;
let physics;
averageMark(algebra, geography, physics);

function averageMark(a, g, p) {
	let mean = (a + g + p) / 3;

	return mean 
}

let myName = ("Вася");
let message = ("Привет, мир! Меня зовут ");
sayHello (myName);

function sayHello(userName) {
	let consl = (message + userName + ".");
	    
	return consl 
}

function calculateFormula() {
    
	// реализуйте здесь задание №3
    
    return // ваш ответ;
}
