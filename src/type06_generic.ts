
// Generic 
function getSize<T>(arr: T[]): number {
    return arr.length;
}
const numArr = [1,2,3];
getSize<number>(numArr);

const numArr2 = ['a','b','c'];
getSize<string>(numArr2);

const numArr3 = [true, false, true];
getSize<boolean>(numArr3);

const numArr4 = [{name: 'a'}, {}, {age: 5}];
getSize<object>(numArr4);


// interface에 제네릭 사용하기
interface Animal<T> {
    name: string,
    color: string,
    option: T
}

const animal: Animal<{age: number, hobby: string}> = {
    name: '강아지',
    color: '흰색',
    option: {
        age: 2,
        hobby: '공놀이'
    }
}
const animal2: Animal<string> = {
    name:'고양이',
    color: '검은색',
    option: '얌전함'
}

// 제네릭 extends(제약 조건) : 타입변수의 허용 범위를 지정해줌
// ex) 타입 변수는 string과 number만 허용하겠다
// <T extends string | number>
interface Student0 {
    name: string,
    age: number
}
interface Car {
    name: string,
}
interface Dog2 {
    name: string,
    color: string
}
interface Fruit {
    color: string
}

const stu5: Student0 = {
    name: '세영',
    age: 23
}
const car1: Car = {
    name: '제네시스'
}
const fruit1: Fruit = {
    color: '빨간색'
}

function printobjName<T extends {name: string}>(data: T): string {
    return data.name;
}
printobjName<Student0>(stu5);
printobjName(car1);
//printobjName(fruit1);

// type U = string | number | boolean
// 위 처럼 변수를 하나 지정해서 타입을 여러 개 설정 한 다음 할당해줄 수 있다 !
type U = number | string | boolean
interface MyType<T extends U> {
    name: string,
    value: T
}
const dataA: MyType<string> = {
    name: 'hi',
    value: '제네릭'
}
const dataB: MyType<number> = {
    name: 'bye',
    value: 123
}
const dataC: MyType<boolean> = {
    name: 'what',
    value: true
}

// 연습
interface Chang1 {
    color: string,
    name: string
}
interface Chang2 {
    color: string,
    age: number
}
interface Chang3 {
    color: string,
    option: object
}

const color1: Chang1 = {
    color: '흰색',
    name: '창민'
}
const color2: Chang2 = {
    color: '파랑',
    age: 30
}
const color3: Chang3 = {
    color: '검정',
    option: {
        talk: '모르겠다..',
        eat: 'slow'
    }
}

function printColor<T extends {color: string}>(data: T): string {
    console.log(data.color);
    return data.color
    
} 
printColor(color1);
printColor(color2);
printColor(color3);