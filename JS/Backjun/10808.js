// 알파벳 개수
// https://www.acmicpc.net/problem/10808

// 알파벳 소문자로만 이루어진 단어 S가 주어진다. 각 알파벳이 단어에 몇 개가 포함되어 있는지 구하는 프로그램을 작성하시오.
// 첫째 줄에 단어 S가 주어진다. 단어의 길이는 100을 넘지 않으며, 알파벳 소문자
// 단어에 포함되어 있는 a의 개수, b의 개수, …, z의 개수를 공백으로 구분해서 출력

// 알파벳 개수(26개)대로 딕셔너리 만들고 그에 해당하는 count를 셈.
// 그후 카운터 값만 출력하기.
// 딕셔너리 만들때 아스키 코드를 이용해서 오브젝트를 만들어야 하나?
// 알파벳 출력해주던 함수 있었던 것 같은데..

// 알파벳 출력 한줄 코드 : 여기도 똑같이 아스키 코드를 이용했다.
// let x = new Array(26).fill().map((_, i) => String.fromCharCode(i + 97)).join("");
// console.log(x)
// 풀이
// let str = '';	
// for (let i = 97; i <= 122; i++) {
//     console.log(String.fromCharCode(i));
//     str += String.fromCharCode(i);
// }
// // abcdefghijklmnopqrstuvwxyz
// console.log(str);

// 파이썬의 딕셔너리 개념을 생각해서 오브젝트로 만들어 놓고 카운트 할 생각했는데 오브젝트로 추가를 못하겠다.
// const fs = require('fs');
// const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
// let input = fs.readFileSync(filePath).toString().split(" ");
// const S = input[0]
// let alp = new Object();
// console.log(alp)
// for (let a = 97; a <= 122; a++) {
//     let str = String.fromCharCode(a) 
//     alp.str = 0;
// }

// console.log(alp)

// for (let i = 0; i < S.length; i++) {
//     const element = S[i];
// }

// 알파벳 배열 따로, 카운터 셀(답) 이 들어갈 배열 따로 만들고
// indexof로 해당하는 인덱스를 찾아서 answer에 하나씩 ++
const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");
const S = input[0]
let alp = [];
// console.log(alp)
for (let a = 97; a <= 122; a++) {
    alp.push(String.fromCharCode(a))
}
// console.log(alp)
let answer = new Array(26).fill(0)
for (let i = 0; i < S.length; i++) {
    answer[alp.indexOf(S[i])]++
}
console.log(answer.join(' '))