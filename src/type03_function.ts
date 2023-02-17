// 함수 타입 선언

// 1. 인수와 반환 값이 있을 때
// let 함수명: (변수1: 타입, 변수2: 타입) => 리턴문타입;
let myFunction: (arg1: number, arg2: number) => number;
myFunction = function(x, y){
    return x + y
}
let num:number = myFunction(10,20);
console.log(num);


// function 함수명(매개변수1: 타입, 매개변수2: 타입): 리턴문타입 { return문 작성 }
function myFunction2(x: number, y:number):number {
    return x + y;
}
myFunction2(5, 6);

// 2. 인수와 반환 값이 없을 때
// 함수 선언문
let myFunction3: () => void;
myFunction3 = function() {
    console.log("hi");
    
}
// 함수 표현식
function myFunction4():void {
    console.log("bye");
    
}

///////////////////////////////////////////////////////////////////

// 함수 타입 선언에 interface키워드 사용하기 
interface Add {
    (num1: number, num2: number):number;
}

let myFunction5: Add = function(num1, num2) {
    return num1 + num2;
}


// 매개변수가 여러 개일 때 선택적 매개변수가 뒤로 가야 함
// 앞에 있으면 에러 발생
// 함수 옵셔널 매개변수 
function showName1(name?: string) {
    return `Hello ${name} || 'aaa'`;
}
// default매개변수: 매개변수의 값을 마음대로 지정할 수 있는데, 이때 지정한 값의 타입도 같이 지정됨
function showName2(name="aaa") {
    return `Hello ${name}`;
}
showName1("green");
showName1();
showName2("green");
showName2();

// 함수 나머지 매개변수
function addArr(...nums: number[]) {
    console.log(nums);
    
}
addArr(1,2,3);
addArr(1,2,3,4,5,6,7);

// 함수 오버로드
// 리턴 되는 타입이 여러 개일 때 선언부까지 작성해야 함
interface Person {
    name: string,
    age: number
}
function join(name: string, age: string): string;
function join(name: string, age: number): Person;
function join(name: string, age: number | string): Person | string {
    if(typeof age === "number") {
        return {
            name: name,
            age: age
        }
    }else {
        return "나이는 숫자로 입력하세요.";
    }
}
const green2: Person = join("green", 30);
const blue: string = join("blue", "hi");