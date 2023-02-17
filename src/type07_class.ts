// 접근 제한자 사용하기 : public, protected, private
// class ClassAnimal {
//     private name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
// }
// class ClassCat extends ClassAnimal {
//     public getName(): string {
//         return `Cat name is ${this.name}`;
//     }
//     private sound(): void {
//         console.log('야옹');
//     }
// }
// let cat = new ClassCat('레오');
// console.log(cat.getName());
// cat.sound();
// cat.name = '까미';

// 정적 멤버 & 인스턴스 멤버 사용하기
class ClassAnimal {
    name: string;
    // 정적 멤버 변수 선언 (클래스명.변수명)
    // 이 친구는 this나 인스턴스로 접근할 수 없음 ! 
    static eye = 2;
    constructor(name: string) {
        this.name = name;
    }
    // 정적 멤버 메소드 정의 (클래스명.메소드명)
    // 인스턴스로 접근할 수 없음! 
    static eat(): void {
        console.log('냐미');
    }
}
class ClassCat extends ClassAnimal {
    getName(): string {
        return `Cat name is ${this.name}`;
    }
}
let cat = new ClassCat('레오');
// console.log(cat.eye); => 에러
// console.log(cat.eat()); => 에러 
console.log(ClassAnimal.eye); // good
console.log(ClassCat.eye); // 자식 클래스에도 접근 가능 ! 

// cat.eat(); => 에러
ClassAnimal.eat(); // good

// 추상 클래스 선언
abstract class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    // 추상 메소드 정의
    // 이 친구는 선언하면 반드시 자식 클래스에 구현을 해야 한다
    abstract work(): void; 
}
class Teacher extends Person {
    work(): void {
        console.log('가르키는 직업입니다.');
        
    }
}
class Engineer extends Person {
    work(): void {
        console.log('자동차 정비하는 직업입니다.');
        
    }
}
// let person1 = new Person('anna'); => 에러 (추상 클래스는 인스턴스를 만들 수 없다)