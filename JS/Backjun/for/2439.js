// 별 찍기 - 2
// https://www.acmicpc.net/problem/2439

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const N = parseInt(input[0])

// let star = ''
for (let i = 1; i <= N; i++) {
    let y = N-i
    console.log(' '.repeat(+y)+'*'.repeat(+i))
}

// 다른사람 풀이
// 2438번 문제와 유사하지만 공백이란 문제가 있습니다.
// 공백은 ' '으로 처리가 가능합니다.
// 먼저 for 문을 두 번 돌려줍니다. 첫 번째 for 문은 줄 바꿈이라 생각하고
// 두 번째 for 문은 값을 누적시켜준다 생각하면 됩니다.
// 두 번째 for 문에서 i(해당 줄)과 j를 비교하여 *과 ' '을 더해줍니다.
let input = require('fs').readFileSync('/dev/stdin').toString();
let num = Number(input);

for (let i = 0; i < num; i++) {
  let star = '';
    
  for (let j = num - 1; j >= 0; j--) {
    star += j <= i ? '*' : ' ';
  }
  
  console.log(star);
}
// 다른사람 풀이 2
// join 메서드를 사용해봤습니다.
// new Array(num)으로 배열을 생성하고 fill 메서드로 공백을 채워줍니다.
// 그 후 배열 마지막 값 부터 시작하여 star 배열에 *을 넣어줍니다.
let input = require('fs').readFileSync('/dev/stdin').toString();
let num = Number(input);
let star = new Array(num).fill(' ');

for (let i = num - 1; i >= 0; i--) {
  star[i] = '*';
  
  console.log(star.join('')); 
}