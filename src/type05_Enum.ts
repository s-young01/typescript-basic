enum Week {
    Sun,
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat
}
console.log(Week[0]);
console.log(Week[1]);

// 자동으로 맵핑이됨 (역방향 맵핑은 X)
// 아무 값도 지정 하지 않으면 0번부터 순차적으로 맵핑,
// 중간에 값을 지정해주면 지정된 값 부터 순차적으로 맵핑됨 

enum Color {
    Red = 'red',
    Green = 'green',
    Blue = 'blue'
}
console.log(Color.Red);
console.log(Color.Green);
console.log(Color['Green']);

let aaa: Color = Color.Red;

enum StarbucksGrade {
    WELCOME,
    GREEN,
    GOLD
}
function getDicound(v: StarbucksGrade) {
    switch(v) {
        case StarbucksGrade.WELCOME:
            return 0;
        case StarbucksGrade.GREEN:
            return 5;
        case StarbucksGrade.GOLD:
            return 10;
    }
}
console.log(getDicound(StarbucksGrade.WELCOME));
