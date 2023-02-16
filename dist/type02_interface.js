"use strict";
let dog1 = {
    name: "구름",
    age: 3
};
let dog2 = {
    name: "뭉치",
    age: 2
};
let stu1 = {
    name: "창민",
    age: 30,
    gender: "남자",
    1: "A"
};
let stu2 = {
    name: "김별",
    age: 29,
    gender: "여자",
    1: "B"
};
let readuser1 = {
    name: "green",
    age: 20,
    phone: '01012345678'
};
const myTv = {
    turnOn() {
        return true;
    },
    turnOff() {
        console.log("off");
    },
};
class Student2 {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const green = new Student2('green');
console.log(green.getName());
