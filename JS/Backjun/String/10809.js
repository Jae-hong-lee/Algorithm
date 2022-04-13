// 알파벳 찾기
// https://www.acmicpc.net/problem/10809

// 각각의 알파벳에 대해서, a가 처음 등장하는 위치, b가 처음 등장하는 위치,
//  ... z가 처음 등장하는 위치를 공백으로 구분해서 출력한다.
// 만약, 어떤 알파벳이 단어에 포함되어 있지 않다면 -1을 출력한다.
//  단어의 첫 번째 글자는 0번째 위치이고, 두 번째 글자는 1번째 위치이다.


//fromCharCode 메서드를 사용하여 97 (a)부터 122 (z)까지의 UTF-16를 이용하여 생성하는 코드입니다.
const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const N = input[0]
// const arr = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65));
// console.log(arr)

let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
for (let j = 0; j < N.length; j++) {
    for (let i = 0; i < 26; i++) {
        if (alphabet[i] == N[j]) {
            alphabet[i] = N.indexOf(N[j])
            break;
        }
    }
}
let answer= alphabet;
for (let a = 0; a < 26; a++) {
    // console.log(typeof(alphabet[alp]));
    if (typeof(answer[a]) == "string") {
        answer[a] = -1;
    }
    
}
console.log(answer.join(' '))
// a b c d e f g h i j k 
//1 0 -1 -1 2 -1 -1 -1 -1 4 3
// l m n o p q r s t u v w x y z
//-1 -1 7 5 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
// 알파벳의 처음 순서를 출력한다.