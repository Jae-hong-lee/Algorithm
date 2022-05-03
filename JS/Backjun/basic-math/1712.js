// 손익분기점
// https://www.acmicpc.net/problem/1712 

// 고정비용 A 가변비용 B
// A+B = C* N?? nono
// A = C-B 일때 누적된 이익이 A를 넘어갈때 얼마나 만들었는지 출력(count)

//  손익분기점이 존재하지 않으면 -1을 출력
// B > C 일때 -1 출력 B=C 일때도 -1
// N을 구하자.

// A는 고정 비용, B는 가변 비용, C는 판매 가격입니다.
// 식을 만들어 보면 마진은 판매 가격에서 가변 비용을 빼주면 마진 값을 구할 수 있습니다.
// 고정 비용에서 이 값을 나눠주면 손익분기점이 나옵니다.

// 이때 손익분기점이 아닌 넘기는 수를 구해야 하므로 1을 더해줍니다.
// 이후 만약에 마진이 음수이거나 0이면 -1을 출력하고 아닐 시 구한 손익분기점을 출력해 줍니다. 
// https://gurtn.tistory.com/47
// 다른사람 풀이를 보니까 문제접근은 나와 완전 똑같았다.
//  다른점 : 이분은 count를 구할때 버림으로 소수점을 버리고 +1 해주셧다.
// 나도 올림이 아닌 버림으로 함수를 바꾸니까 통과됨 ㅠㅠ 수학식을 잘못세운것이였다...
const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");
const A = +input[0] // 고정
const B = +input[1] // 가변
const C = +input[2] // 가격
let count = 0 // 몇대팜>?
let cost = C-B // 이익?

// cost <=0 xxxx
if (B>=C) {
    count = -1
}
else{
    count = A / cost +1
}
// 마지막에 1을 더해주면 -1 이 나올경우가 0으로 나오게 됨
// 소수점으로 나오는 것도 생각하자.
console.log(Math.floor(count))


// 시간이 겁나 많이 걸린다.
// const fs = require('fs');
// const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
// let input = fs.readFileSync(filePath).toString().split(" ");
// const A = +input[0]
// const B = +input[1]
// const C = +input[2]
// let count = 0
// let cost = C-B

// while (true) {
//     if (B >= C) {
//         console.log(-1)
//         break;
//     }
//     else{
//         if (cost > A) {
//             console.log(count+1);
//             break;
//         }else{
//             count++
//         }
//     }  
//     cost += C-B 
// }