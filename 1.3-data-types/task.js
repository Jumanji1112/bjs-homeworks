'use strict'

function calculateTotalMortgage(percent, contribution, amount, date) {
	percent = +percent;
	if ( percent == 0 || percent == "" || percent == undefined || typeof percent !== 'number' || percent != percent )		return "Введите корректные данные в поле  \"Процентная ставка\"" ;
	contribution = +contribution;
	if (contribution < 0 || contribution == "" || contribution == undefined || typeof contribution !== 'number' || contribution != contribution) return "Введите корректные данные в поле  \"Начальный взнос\"" ;
	amount = +amount;
	if (amount <= 0 || amount == "" || amount == undefined || typeof amount !== 'number' || amount != amount) return "Введите корректные данные в поле  \"Общая стоимость\"" ;


	let debet = amount - contribution; //тело кредита
	let months = (date.getFullYear() - new Date().getFullYear()) * 12 + (date.getMonth() - new Date().getMonth()); //количество месяцев
	if (!date.getDate()) return 'Укажите дату погашения кредита';
	if (months <= 0) return "Срок ипотеки не может быть менее 1 месеца";
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
	};
		return (`Привет, мир! Меня зовут ${name}.`);
};