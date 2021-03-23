'use strict'

// Задача №1. Печатное издание
class PrintEditionItem {
	constructor (name, releaseDate, pageCount){
		this.name = name;
		this.releaseDate = releaseDate;
		this.pageCount = pageCount;
		this.state = 100;
		this.type = null;
	}
	fix (){
		this.state = this.state * 1.5; 
		return this.state;
	}
	set state(state){
		if (state < 0){
			this._state = 0;
		} else if (state > 100){
			this._state = 100;
		} else {
			this._state = state;
		}
	}
	get state(){
	return this._state;
	}
}

class Magazine extends PrintEditionItem{
	constructor (name, releaseDate, pageCount){
		super (name, releaseDate, pageCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem{
	constructor (author, name, releaseDate,pageCount){
		super (name, releaseDate, pageCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book{
	constructor (name, releaseDate,pageCount){
		super (name, releaseDate, pageCount);
		this.type = "novel";
	}
}
class FantasticBook extends Book{
	constructor (name, releaseDate,pageCount, author){
		super (name, releaseDate, pageCount, author);
		this.type = "fantastic";
	}
}
class DetectiveBook extends Book{
	constructor (name, releaseDate,pageCount, author){
		super (name, releaseDate, pageCount, author);
		this.type = "detective"
	}
}
const sherlock = new PrintEditionItem ("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);
const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

//Задача №2. Библиотека
class Library {
	constructor (name, books){
		this.name = name;
		this.books = [];
	}
	addBook(book){
		if (book.state > 30){
			this.books.push (book);
		}
		return this.books;
	}
	findBookBy(type, value){ 
			if (this.books.find (item => item[type] === value) == undefined) {
			return null;
		} else {
			return this.books.find (item => item[type] === value);
		}
	}

	giveBookByName(bookName){
		let result = this.books.find (item => item.name === bookName);
		if (result == undefined){
			return null;
		} else {
			return this.books.splice(this.books.indexOf(result),1)[0];
		}
	}
}
const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));