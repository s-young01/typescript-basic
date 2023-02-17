interface Dog {
    name: string,
    age: number,
    color?: string
}
let dog1: Dog = {
    name: "구름",
    age: 3
}
let dog2: Dog = {
    name: "뭉치",
    age: 2
}

// 리터럴(값) 타입 : 지정된 타입의 값들을 제한해 사용할 수 있음
// 문자열 리터럴 타입 지정
type Score = 'A' | 'B' | 'C' | 'D' | 'F' ;

interface Student {
    name: string,
    age: number,
    gender: string,
    // 1?: string,
    // 2?: string,
    // 3?: string,
    // 4?: string
    // [key이름: key값의 타입]: value값의 타입
    [grade:number]: Score
}
let stu1: Student = {
    name: "창민",
    age: 30,
    gender: "남자",
    1: "A"
}
let stu2: Student = {
    name: "김별",
    age: 29,
    gender: "여자",
    1: "B"
}

// 모든 파라미터 readonly
// 방법1
interface ReadUser {
    readonly name: string,
    readonly age: number,
    readonly phone: string
}
// 방법2
let readuser1: Readonly<ReadUser> = {
    name: "green",
    age: 20,
    phone: '01012345678'
}

//
interface TV {
    turnOn(): boolean; // 함수의 리턴문 타입
    turnOff(): void;
}
const myTv: TV = {
    turnOn() {
        return true;
    },
    turnOff() {
        console.log("off");
        
    },
}

interface SingUp {
    email: string,
    id: string,
    password: string
}

// 클래스 타입 선언 interface사용 
// implements키워드 
interface IStudent {
    name: string,
    getName(): string
}
class Student2 implements IStudent{
    name: string; // TS에선 필드가 무슨 타입인지 생성자 함수 위에 정의 해줘야 한다.
    constructor(name: string) {
        this.name = name; // 필드
    }
    getName(): string {
        return this.name;
    }
}
const green = new Student2('green');
console.log(green.getName());

// 같은 이름의 interface를 여러 개 만들 수 있음
// 기존에 만들어진 interface에 내용을 추가하는 경우에 유용
interface Name {
    name1: string,
    age: number
}
interface Name {
    hobby: string
}
const namename: Name = {
    name1: 'green',
    age: 22,
    hobby: '드라마 보기'
}

// interface 확장
interface IAnimal {
    name: string
}
interface ICat extends IAnimal {
    sound(): string
}
class Cat implements ICat {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    sound(): string {
        return '야옹';
    }
}