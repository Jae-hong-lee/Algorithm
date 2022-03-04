// 알람시계
// https://www.acmicpc.net/problem/2884
const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const input = fs.readFileSync('JS/Backjun/input.txt').toString().split(' ');

let a = parseInt(input[0]);
let b = parseInt(input[1]);
const answer =[]

if (a === 0) {
    a = 24    
    let time = (a*60 + b)-45;
    let h = Math.floor(time / 60) ;
    let m = time % 60
    if (h == 24) {
        h = 0
        answer.push(h)
    }else{
        answer.push(h)
    }
    answer.push(m)
    console.log(answer.join(' '))
} else {
    let time = (a*60 + b)-45;
    let h = Math.floor(time / 60) ;
    let m = time % 60
    answer.push(h)
    answer.push(m)
    console.log(answer.join(' '))
}
// 0시 45분 일떄 24시 0 분 으로 출력되는 부분을 조건문으로 0으로 바꿔버리고 출력

// 다른사람 풀이
// 입력값 {H : 시간, M : 분}

// 두 가지의 경우의 수를 생각해 주면 됩니다.
// 첫 번째 : M에서 45를 뺀 값이 음수일 경우
// 두 번째 : H값이 음수일 경우

// 먼저 M에서 45를 뺀 값을 구하고
// 그 값이 0보다 작을 경우 45분 뺀값 + 60이 M값이 되고 H값을 1 빼 줍니다.
// 이때 만약에 1을 뺀 H값이 -1일 경우 23이 된다. (0에서 1을 뺀 시간이므로)

let input = require('fs').readFileSync('dev/stdin').toString().split(' ');

let Hour = Number(input[0]);  // Hour
let Minute = Number(input[1]);  // Minute

Minute -= 45;

if (Minute < 0) {
    Minute += 60;
    Hour--;

    if (Hour === -1) {
        Hour = 23;
    }
}

console.log(Hour + ' ' + Minute);