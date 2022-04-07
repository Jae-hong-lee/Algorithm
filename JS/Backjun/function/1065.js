// 한수
// https://www.acmicpc.net/problem/1065

// 등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다
// N이 주어졌을 때, 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력하는 프로그램

// 문제 이해 https://www.acmicpc.net/board/view/25689 ,
// https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=occidere&logNo=220790000403

// 우선 한수의 뜻은 "각 자리수들이 등차수열을 이루는 수"이다. 
// 등차수열이란 각 항들이 일정한 차이를 보이는 수열이다.
// 예를 들면 한수는 123(공차 1), 753(공차 -2), 111(공차 0)등이 가능하다.
// 110의 경우 3자리수일때 나올 수 있는 한수가 없기 때문에 2자리수까지 나온 한수가 전부이다
// 110일때 한수의 개수는 99였으므로 1자리, 2자리의 한수의 개수는 99개가 된다.

// 첫째 줄에 1,000보다 작거나 같은 자연수 N이 주어진다.
const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");
const a = parseInt(input[0])
// console.log(a)
let count = 0

for (let i = 1; i <= a; i++) {
    let NewA = String(i);
    if (NewA.length < 3) {
        count++
        continue 
    }
    if (Number(NewA[0]) - Number(NewA[1]) == Number(NewA[1]) - Number(NewA[2]) ) 
    {
        count++
    }
}
console.log(count)
// for (let i = 0; i < String(a).length; i++) {
    
// }

// https://velog.io/@dragoocho/%EB%B0%B1%EC%A4%80-1065-%EB%B2%88-Node.js-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4
// 이번 문제는 지문의 올바른 해석이 아주 중요했다.
// 1~ 110의 결과에서 1~99는 한수로 인정되는가를 찾는 
// 발상이 없으면 풀기가 너무나 어렵게된다.