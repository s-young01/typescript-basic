"use strict";
function getSize(arr) {
    return arr.length;
}
const numArr = [1, 2, 3];
getSize(numArr);
const numArr2 = ['a', 'b', 'c'];
getSize(numArr2);
const numArr3 = [true, false, true];
getSize(numArr3);
const numArr4 = [{ name: 'a' }, {}, { age: 5 }];
getSize(numArr4);
const animal = {
    name: '강아지',
    color: '흰색',
    option: {
        age: 2,
        hobby: '공놀이'
    }
};
const animal2 = {
    name: '고양이',
    color: '검은색',
    option: '얌전함'
};
const stu5 = {
    name: '세영',
    age: 23
};
const car1 = {
    name: '제네시스'
};
const fruit1 = {
    color: '빨간색'
};
function printobjName(data) {
    return data.name;
}
printobjName(stu5);
printobjName(car1);
const dataA = {
    name: 'hi',
    value: '제네릭'
};
const dataB = {
    name: 'bye',
    value: 123
};
const dataC = {
    name: 'what',
    value: true
};
const color1 = {
    color: '흰색',
    name: '창민'
};
const color2 = {
    color: '파랑',
    age: 30
};
const color3 = {
    color: '검정',
    option: {
        talk: '모르겠다..',
        eat: 'slow'
    }
};
function printColor(data) {
    console.log(data.color);
    return data.color;
}
printColor(color1);
printColor(color2);
printColor(color3);
