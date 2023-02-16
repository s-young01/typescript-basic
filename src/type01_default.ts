// 기본 타입 : string, number, boolean, null, undefiend
// 객체 타입 : Array, Object

// 기본 타입
let booleanType:boolean = true;
let numberType:number = 30;
let stringType:string = "green";
let undefiendType:undefined = undefined;
let nullType:null = null;

numberType = 222;
stringType = "aaa";

// 객체는 기본타입과 선언문이 같음
let ObjectType:object = {};
// 배열 선언 구문 => 변수명:타입[] = [] / 변수명:Array<타입> = []
let arr1:number[] = [0,1,2,3,4];
let arr2:Array<number> = [0,1,2,3,4];
let str1:string[] = ["사과","딸기","포도","레몬"];
let str2:Array<string> = ["사과","딸기","포도","레몬"];

// any 타입 (아무 타입이나 지정 가능) : 항목의 값을 지정할 수 없을 때 사용
let anyType:any = "aa";
anyType = 123;
anyType = false;
// 배열 any타입 선언
let anyArr: any[] = [30, "aa", true];

// 유니언 타입 (다중 타입) : 여러개의 타입을 동시에 주고 싶을 때 사용 
// 구문 => let 변수명: 타입1 | 타입2 ;
let numStr: number | string
numStr = 30;
numStr = "aaa";

// 배열 유니언 타입 선언
let numStrArr: (number | string)[] = [12, "a", "b"];

// 객체 유니언 타입 선언
// 객체의 속성에 대한 타입을 지정
// 옵셔널 프로퍼티 : key이름 뒤에 ?키워드 붙임 => 필수 속성이 아니게 됨(있어도 되고, 없어도 됨) 
// 읽기 전용 프로퍼티 : key이름 앞에 readonly 키워드 붙임 => 접근은 가능, 수정은 불가능
let obj: { readonly name: string, age: number, isJob?: boolean } = {
    name: "hello",
    age: 20
}
// console.log(obj.name); => 가능 
// obj.name = "goodbye" => 불가능

// interface 키워드 : 여러개의 타입을 일일이 지정하기 번거로울 때 사용
// 사용할 때에는 반드시 지정된 key값과 타입을 사용해야 함
// 구문 => interface interface명 { key1: 타입, key2: 타입 }
interface IUser {
    readonly name: string,
    age: number,
    isJob?: boolean
}
let user1: IUser = {
    name: "green",
    age: 30
}

let user2: IUser = {
    name: "blue",
    age: 30,
    isJob: true
}