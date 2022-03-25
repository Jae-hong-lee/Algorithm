// 스택 수열
// https://www.acmicpc.net/problem/1874

// 이것도 시간초과 많은 사람들이 시간초과로 불통한듯
// answer 를 배열로 만들어서 출력해봐도 시간초과.
// 다른사람들 보니까 문자열에서 추가할때 \n를 같이 넣어서 줄바꿈해줌.
// 불통 -> F 지정하지 않고 밑에서 break; 그만두게 하고 answer출력

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const T = parseInt(input[0])

let stack = []
let cnt = 1
let answer = ''
for (let i = 1; i <= T; i++) {
    let x = +input[i]
    while (x >= cnt) {
        stack.push(cnt)
        cnt++
        answer = answer + '+\n'
    }
    if (stack[stack.length-1] == x) {
        stack.pop()
        answer = answer + '-\n'
    } else { 
        answer = "NO";
        break;
    }
}
console.log(answer)





// const fs = require('fs');
// const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
// let input = fs.readFileSync(filePath).toString().split("\n");
// const T = parseInt(input[0])

// let stack = []
// let cnt = 1
// let answer = ''
// for (let i = 1; i <= T; i++) {
//     let x = +input[i]
//     const F = "NO"
//     // console.log(x)
//     while (x >= cnt) {
//         stack.push(cnt)
//         cnt++
//         answer = answer + '+'
//     }
//     if (stack[stack.length-1] == x) {
//         stack.pop()
//         answer = answer + '-'
//     } else { 
//         return F
//     }
// }
// const a = [...answer]
// a.forEach((an) => console.log(an));
// 갠히 answer 문자열로 만듬. 시간초과