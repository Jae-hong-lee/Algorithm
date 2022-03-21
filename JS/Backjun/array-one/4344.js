// 평균은 넘겠지
// https://www.acmicpc.net/problem/4344

// 각 케이스마다 한 줄씩 평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력한다.


// 그냥 score로 filter를 해버리면 앞에 있는 학생수도 포함되어서 오류가뜸
// 학생 수 빼고 점수만 있는 부분을 stack에 추가해주고
// stack으로 filter함수를 써서 result 길이 / 학생 수 로 답을 구해씀
// toFixed() 함수는 소수점 구할때 사용
const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const T = +input[0]

for (let i = 1; i <= T; i++) {
    let score = input[i].split(' ')
    const stu = score[0]
    let sum = 0
    let stack = []
    for (let j = 1; j < score.length; j++) {
        sum = +score[j] + sum   
        stack.push(score[j])   
    }
    // console.log(stack)
    
    let avarage= sum / stu
    const result = stack.filter(number => number > avarage);
    // console.log(result)
    console.log(((result.length/stu)*100).toFixed(3)+'%')
}


// 틀림
// const fs = require('fs');
// const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
// let input = fs.readFileSync(filePath).toString().split("\n");
// const T = +input[0]
// // console.log(T)
// for (let i = 1; i <= T; i++) {
//     let score = input[i].split(' ')
//     const stu = +score[0]
//     // console.log(score) // string
//     // console.log(stu)
//     let sum = 0
//     for (let j = 1; j < score.length; j++) {
//         sum = +score[j] + sum  
        
//     }
//     let avarage= sum / stu
//     const result = score.filter(number => number > avarage);
//     // console.log(result)
//     console.log(((result.length/stu)*100).toFixed(3)+'%')
// }

// toFixed : https://www.delftstack.com/ko/howto/javascript/javascript-round-to-2-decimal-places/

    // console.log(avarage) // 반평균을 구해놈
    // 반평균 보다 아래인 점수는 컷하고 (남는 점수 / 학생수 ) 로 % 구하기.?
    // const result = score.filter(number => number >= avarage);
    // console.log(result)
    // const result = words.filter(word => word.length > 6);

    // result.reduce((x,y) => x+y,0)
    // console.log(result.reduce((x,y) => x+y))
    // const sumWithInitial = array1.reduce(
    //     (previousValue, currentValue) => previousValue + currentValue,
    //     initialValue
    //   );