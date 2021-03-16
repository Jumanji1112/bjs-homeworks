"use strict"
String.prototype.isPalindrome = function (str) {
    let str1 = [];

    for (let i = 0; i < this.length; i++) {
        if (this.split('')[i] !== " ") {
            str1.push(this.split('')[i])
        }
    }

    return str1.join('').toLowerCase() === str1.reverse().join('').toLowerCase()
}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    // return averageMark
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}