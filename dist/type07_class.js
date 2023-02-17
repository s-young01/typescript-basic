"use strict";
class ClassAnimal {
    constructor(name) {
        this.name = name;
    }
    static eat() {
        console.log('냐미');
    }
}
ClassAnimal.eye = 2;
class ClassCat extends ClassAnimal {
    getName() {
        return `Cat name is ${this.name}`;
    }
}
let cat = new ClassCat('레오');
console.log(ClassAnimal.eye);
console.log(ClassCat.eye);
ClassAnimal.eat();
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Teacher extends Person {
    work() {
        console.log('가르키는 직업입니다.');
    }
}
class Engineer extends Person {
    work() {
        console.log('자동차 정비하는 직업입니다.');
    }
}
