// 다이얼
// https://www.acmicpc.net/problem/5622

// 숫자 1을 걸때까지 2초니까 단어별로 가지고 있는 숫자 +1 을 해주고 더해준다.
// 한번 다이얼을 걸때마다 값은 초기화.
// 오브젝트를 만들고 숫자한테 알파벳 할당?? -> 리스트로 만들어도 될듯?

// const fs = require('fs');
// const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
// let input = fs.readFileSync(filePath).toString().split(" ");
// const S = input[0].split('')
// const alpabet_list = {
// 	2: "ABC",
// 	3: "DEF",
// 	4: "GHI",
// 	5: "JKL",
// 	6: "MNO",
// 	7: "PQRS",
// 	8: "TUV",
// 	9: "WXYZ",
// }
// // console.log(Object.keys(alpabet_list).length)
// // 오브젝트의 길이를 구하는 법
// // obj의 경우에는 length 를 지정하게 되면 undefined 가 나타납니다.
// // obj 의 경우 length 의 길이를 구하기 위해서는
// // Object.keys를 이용해야 합니다.

// // includes 사용법
// // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
// let count = 0
// for (let i = 0; i < S.length; i++) {
//     // S를 도는 for 문
//     for (let j = 2; j <= Object.keys(alpabet_list).length; j++) {
//         // 알파벳리스트 도는 for문
//         // for.. in 쎃으면 쉬웠을텐데 
//         if (alpabet_list[j].includes(S[i])) {
//         // 알파벳리스트 안에 있는 오브젝트 다 돌면서 includes를 통해 True 값이 나오면
//         // count 에 j를 더해주고 , 1번까지 2초니까 +1을 더해줌. 값을 찾았으니까 break로 S에 다른문자판별.
//             count = j+1 +count;
//             break;
            
//         }
//     }
// }
// console.log(count)


// 제출용
const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");
const S = input[0].split('')
const alpabet_list = {
	2: "ABC",
	3: "DEF",
	4: "GHI",
	5: "JKL",
	6: "MNO",
	7: "PQRS",
	8: "TUV",
	9: "WXYZ",
}
let count = 0
for (let i = 0; i < S.length; i++) {
    for (let j = 2; j <= Object.keys(alpabet_list).length+1; j++) {
        // 오브젝트 key 수정 : +1 해줌 -> 2부터 시작이라...
        if (alpabet_list[j].includes(S[i])) {
            count += j+1;
            break;
            
        }
    }
}
console.log(count)