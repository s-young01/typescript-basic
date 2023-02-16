// 문자열만 가지는 배열 
let strarr1: string[] = ["a","b","c","d","e"];
let strarr2: Array<string> = ["🍑","🍇","🍎","🍒"];

// 숫자만 가지는 배열
let numarr1: number[] = [1,2,3,4,5];
let numarr2: Array<number> = [1,2,3,4,5];

// 숫자와 문자열만 가지는 배열
let numstrArr1: (number | string)[] = [1,2,"a"];
let numstrArr2: Array<number | string> = [3,4,"b"];

// 객체타입을 가지는 배열
// interface
interface User {
    readonly name: string,
    age: number,
    isJob?: boolean
}
let objArr: User[] = [
    {
        name: "green",
        age: 20
    },
    {
        name: "blue",
        age: 30
    }
]
// readonly 설정되어있는 값을 수정하는 건 불가능,
//objArr[0].name = "aa";
// 새로운 변수에 담아서 출력하는건 가능 !
const newname = objArr[0].name

// 읽기 전용 배열 생성: 배열의 값을 수정 할 수 없고, 새로운 배열로도 만들 수 없다.
let readArr: readonly number[] = [1,2,3,4];
// readArr.push(5); => error
// readArr[0] = 10; => error