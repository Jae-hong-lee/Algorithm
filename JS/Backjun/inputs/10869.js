// 사칙연산
// https://www.acmicpc.net/problem/10869
// 두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오. 
// 첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.
// js/backjun/input.txt
// const fs = require('fs');
// // const input = fs.readFileSync('/dev/stdin').toString().split(' ');
// const input = fs.readFileSync('JS/Backjun/input.txt').toString().split(' ');
// const a = parseInt(input[0]);
// const b = parseInt(input[1]);
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(Math.ceil(a/b));
// console.log(a&b);

// 질문하기를 보니 readline 으로 입력받아 사용하라고 해서 구글링해봤음.
const readline = require('readline');
    
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  input = line.split(' ');
    
  const num1 = Number(input[0]);
  const num2 = Number(input[1]);

  console.log(num1 + num2);
  console.log(num1 - num2);
  console.log(num1 * num2);
  console.log(Math.floor(num1 / num2));
  console.log(num1 % num2);

  rl.close();
}).on("close", function() {
  process.exit();
});