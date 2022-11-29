// Variables

var a; // Declarar
var b = 'b'; // Declarar y asignar
b = 'bb'; // Reasignar
var a = 'aa'; // Redeclarar

// Global scope

var fruit = 'Apple'; // global
console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    country = 'Colombia'; // global
    console.log(country)
}

countries();
console.log(country);