"use strict";
let myFunction;
myFunction = function (x, y) {
    return x + y;
};
let num = myFunction(10, 20);
console.log(num);
function myFunction2(x, y) {
    return x + y;
}
myFunction2(5, 6);
let myFunction3;
myFunction3 = function () {
    console.log("hi");
};
function myFunction4() {
    console.log("bye");
}
let myFunction5 = function (num1, num2) {
    return num1 + num2;
};
function showName1(name) {
    return `Hello ${name} || 'aaa'`;
}
function showName2(name = "aaa") {
    return `Hello ${name}`;
}
showName1("green");
showName1();
showName2("green");
showName2();
function addArr(...nums) {
    console.log(nums);
}
addArr(1, 2, 3);
addArr(1, 2, 3, 4, 5, 6, 7);
function join(name, age) {
    if (typeof age === "number") {
        return {
            name: name,
            age: age
        };
    }
    else {
        return "나이는 숫자로 입력하세요.";
    }
}
const green2 = join("green", 30);
const blue = join("blue", "hi");
