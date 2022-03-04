// 스택
// https://www.acmicpc.net/problem/10828

// const fs = require('fs');
// // const input = fs.readFileSync('/dev/stdin').toString().split(' ');
// const input = fs.readFileSync('JS/Backjun/input.txt').toString().split('\n');

// const a = +input[0];
// // console.log(a)
// const stack = []
// for (let i = 0; i <= a; i++) {
//     const arr = input[i].split(' ');
//     // console.log(arr);
    
//     if(arr[0]=='push') {
//         stack.push(arr[1]);
//     }

//     else if(arr[0]=='pop') {
//         if (stack.length === 0) {
//             console.log(-1);
//         } else{
//             popNum = stack.pop();
//             console.log(popNum);
//         }
//     }

//     else if(arr[0]=='size') {
//         console.log(stack.length)
//     }
//     else if(arr[0]=='empty') {
//         if (stack.length === 0) {
//             console.log(1);
//         } else{
//             console.log(0);
//         }
//     }
//     else if(arr[0]=='top') {
//         if (stack.length === 0) {
//             console.log(-1);
//         } else{
//             // console.log(stack.slice[-1]);
//             console.log(stack[stack.length-1])
//         }
//     }
// }
// console.log(stack)
// 시간초과
// console.log()는 시간이 오래 걸리기 때문에 답을 출력할 때 가능하면 한 번만 사용하는게 좋습니다.
// 정답을 모두 모아놓는 배열을 하나 만드시고, console.log() 대신 해당 배열에 정답을 모아서
// 나중에 한꺼번에 join("\n")해서 출력하시면 됩니다.
// 아래 코드로 통과하였습니다.
// https://velog.io/@jakeseo_me/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A1%9C-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EC%A0%95%EB%A6%AC%ED%95%98%EA%B8%B0-1-%EB%B0%B1%EC%A4%80-nodejs-%ED%91%9C%EC%A4%80-%EC%9E%85%EC%B6%9C%EB%A0%A5-%EC%8A%A4%ED%83%9D

const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const input = fs.readFileSync('JS/Backjun/input.txt').toString().split('\n');

const a = +input[0];
// console.log(a)
const stack = []
const answer = []
for (let i = 0; i <= a; i++) {
    const arr = input[i].split(' ');
    // console.log(arr);
    
    if(arr[0]=='push') {
        stack.push(arr[1]);
    }

    else if(arr[0]=='pop') {
        if (stack.length === 0) {
            answer.push(-1);
        } else{
            popNum = stack.pop();
            answer.push(popNum);
        }
    }

    else if(arr[0]=='size') {
        answer.push(stack.length)
    }
    else if(arr[0]=='empty') {
        if (stack.length === 0) {
            answer.push(1);
        } else{
            answer.push(0);
        }
    }
    else if(arr[0]=='top') {
        if (stack.length === 0) {
            answer.push(-1);
        } else{
            // console.log(stack.slice[-1]);
            answer.push(stack[stack.length-1])
        }
    }
}
console.log(answer.join('\n'))