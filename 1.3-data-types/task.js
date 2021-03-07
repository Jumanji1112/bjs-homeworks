'use strict'

function calculateTotalMortgage(percent, contribution, amount, date) {
	let debet = amount - contribution; //тело кредита
	let months = (date.getFullYear() - new Date().getFullYear()) * 12 + (date.getMonth() - new Date().getMonth()); //количество месяцев
	let p = percent / 100 / 12; // процентаная ставка за месяц
	let monthlyPay =  debet * (p + p / (Math.pow((1+p), months) - 1)); // ежемесячный платеж по кредиту
	let totalPay = monthlyPay * months; // общая сумма выплат
		totalPay = totalPay.toFixed(2); // округление  суммы выплат
	let num = Number(totalPay)
	  console.log (typeof num);
    return num;
}

function getGreeting(name) {
	if (name == "" || name == undefined){
		return ('Привет, мир! Меня зовут Аноним.');
	} else {
		return (`Привет, мир! Меня зовут ${name}.`);
	}
}