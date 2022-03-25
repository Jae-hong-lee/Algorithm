// 에디터
// https://www.acmicpc.net/problem/1406

// 스택과 큐를 만들어 커서 위치확인
// https://velog.io/@crookid/1406
// 링크드 리스트
// https://lhoiktiv.tistory.com/388
// 스택 두개쓰기. + 스택 큐?
// 커서 위치를 표기해야함.

// 연습
// const fs = require('fs');
// const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
// let input = fs.readFileSync(filePath).toString().split("\n");

//제출
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
let Lstack = input[0].split(""); //초기값
let Rstack = []; // 반대스택?? 반댓방향
let x = "";

for (let i = 2; i < input.length; i++) {
  if (input[i].length === 3) {
    x = input[i][2];
  }

  switch (input[i][0]) {
    case "L":
      if (Lstack.length !== 0) Rstack.push(Lstack.pop());
      break;
    case "D":
      if (Rstack.length !== 0) Lstack.push(Rstack.pop());
      break;
    case "B":
      if (Lstack.length !== 0) Lstack.pop();
      break;
    case "P":
      Lstack.push(x);
  }
}

const result = [...Lstack, ...Rstack.reverse()];
// reverse -> 커서위치 확인
console.log(result.join(""));


//   다른ㅅ사람 풀이 if??
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// let str = input[0].split("");
// let len = input[1];
// let cursor = str.length;
// for (let i = 2; i < 2 + len; i++) {
//   let [cmd, value] = input[i].split(" ");
//   if (cmd === "L") {
//     if (!cursor) continue;
//     cursor--;
//   } else if (cmd === "D") {
//     if (cursor === str.length) continue;
//     cursor++;
//   } else if (cmd === "B") {
//     if (!cursor) continue;
//     str.splice(cursor - 1, 1);
//     cursor--;
//   } else if (cmd === "P") {
//     str.splice(cursor, 0, value);
//     cursor++;
//   }
// }
// console.log(str.join(""));