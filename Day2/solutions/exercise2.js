//
// TODO 1
// Declarar en ES6 la clase Persona
//

console.log('=== 1 ===');

class Person {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, my name is ${this.name} and I\'m ${this.age} years old.`);
  }

  haveABirthday() {
    this.age++;
  }
}

const p = new Person('Posti', 34);

p.haveABirthday();
p.greet();

//
// TODO 2
// Crear un modulo que contenga una clase coche con dos atributos: make y km.
// El constructor sólo aceptaría como parámetro make, porque km se inicia a 0.
// También dispondría de dos métoodos: move(km) que incrementa los km según
// la cantidad y getInfo(), que devuelve un string con el make y el número de km
//

console.log('=== 2 ===');

const Car = require('./car');

const car = new Car('VW');

car.move(100);
car.move(50);

console.log(car.getInfo());

//
// TODO 3
// Use funciones flecha en vez de las que se indican
//

console.log('=== 3 ===');

let array = [1, 2, 3];

array = array.map(x => x * 2);

console.log(array);

//
// TODO 4
// Declare las variables convenientemente
//

console.log('=== 4 ===');

const PI = 3.14;

const getCircleArea = r => PI * r * r;

for(let i = 1; i <= 3; i++) {
  console.log(`r = ${i}, area = ${getCircleArea(i)}`);
}

//
// TODO 5
// Simplifique este objeto usando sintaxis ES6
//

console.log('=== 5 ===');

const prop2 = 'value2';

const object1 = {

  prop1: 'value1',

  prop2,

  function1(param = 1) {
    console.log(param);
  }
};

console.log(object1.prop1);
console.log(object1.prop2);

object1.function1();

//
// TODO 6
// Simplifique estas asignaciones a variables usando sintaxis ES6
//

console.log('=== 6 ===');

const object2 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6
};

const {a, b, c, d, e, f} = object2;

console.log(a, b, c, d, e, f);

//
// TODO 7
// Simplifique las siguientes asignaciones usando el spread operator
//

console.log('=== 7 ===');

const a1 = [4, 5, 6, 7, 8, 9, 10];

const a2 = [0, 1, 2, 3];

a2.push(...a1);

// También podría ser:
// a2 = [...a2, ...a1];

console.log(a2); 

//
// TODO 8
// Convierta los siguientes bucles usando for of y for in
//

console.log('=== 8 ===');

const a3 = [0, 1, 2, 3, 4, 5];

for(const x1 of a3) {
  console.log(x1);
}

const object3 = {
  a: 1,
  b: 2,
  c: 3
};

for(const k1 in object3) {
  if(object3.hasOwnProperty(k1)) {
    console.log(`${k1}: ${object3[k1]}`);
  }
}
