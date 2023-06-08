// given: a Date object and a integer representing the week day
var date = new Date()
var daytoset = 5
var currentDay = date.getDay();
var distance = (daytoset + 7 - currentDay) % 7;
date.setDate(date.getDate() + distance);
console.log(date.toLocaleString('es-MX'))