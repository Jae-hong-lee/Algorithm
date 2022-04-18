// 크로아티아 알파벳
// https://www.acmicpc.net/problem/2941
// const alpabet = {
//     č : "c=",
//     ć : "c-",
//     dž : "dz=",
//     đ : "d-",
//     lj : "lj",
//     nj : "nj",
//     š : "s=",
//     ž : "z="
// }

// 크로아티아의 알파벳으로 변형된 글자 수를 구하는 문제.
// 알파벳 소문자와 '-', '='로만 이루어져 있다.
// - , = 이 나오거나 j 가 나왔을떄는 뒤에 문자를 판별해서 d,l,n일경우 한글자로 취급?

// 그냥 크로아티아 문자를 배열로 만들고 for of로 배열을돌면서 S안에 있는 알파벳을 *로 바꿈
const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let S = input[0];

let croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

for (let alpabet of croatia) {
    S = S.split(alpabet).join('*');
}
console.log(S.length)



// 틀림. 런타임 에러
// const fs = require('fs');
// const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
// let input = fs.readFileSync(filePath).toString().split(" ").trim();
// const S = input[0].split('');
// let Str = S.concat();
// // 객체 복사개념.
// // https://velog.io/@jun094/JS-%EA%B0%9D%EC%B2%B4-%EB%B0%B0%EC%97%B4-%EB%B3%B5%EC%82%AC-%EC%83%81
// for (let i = 1; i < S.length; i++) {

//     if (S[i] == '=') {
//         if (S[i-1] == 'z' && S[i-2]=='d') {
//             Str.pop()
//             Str.pop()
//         }
//         else if (S[i-1] == 'c' || S[i-1]== 's' || S[i-1] =='z' ) {
//             Str.pop()
//         }
//     }

//     else if(S[i]== '-') {
//         if (S[i]== 'c' || S[i]=='d') {
//             Str.pop()
//         }
//     }
//     else if (S[i] == 'j') {
//         if (S[i-1]=='l' || S[i-1]=='n') {
//             Str.pop()
//         }
//     }

    
// }
// console.log(Str)




// 틀림 : answer에 값을 추가하는게 아닌 문자열을 배열로 만든 S에 값을 지우고 바꿔야지 
// 예제3번 통과 가능할듯(중복)
// const fs = require('fs');
// const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
// let input = fs.readFileSync(filePath).toString().split(" ");
// const S = input[0].split('');

// let answer = [];
// for (let i = 0; i < S.length; i++) {

//     if (S[i] == '=') {
//         if (S[i-1] == 'z' && S[i-2]=='d') {
//             answer.pop()
//             answer.pop()
//             answer.push('1')
//         }
//         else if (S[i-1] == 'c' || S[i-1]== 's' || S[i-1] =='z' ) {
//             answer.pop()
//             answer.push('1')
//         }
//     }

//     else if(S[i]== '-') {
//         if (S[i]== 'c' || S[i]=='d') {
//             answer.pop()
//             answer.push('1')
//         }
//     }
//     // 예제 3번 nljj 에서 nl , lj 가 겹쳐버려서 2가 출력됨. 중복값 문제.
//     else if (S[i] == 'j') {
//         if (S[i-1]=='l' || S[i-1]=='n') {
//             answer.pop()
//             answer.push('1')
//         }
//     }
//     else{
//         answer.push(S[i])
//     }
    
// }
// console.log(answer.length)