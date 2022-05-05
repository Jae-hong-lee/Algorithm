// 단어 길이 재기
// https://www.acmicpc.net/problem/2743


// 그냥 length 을 써서 문자열 길이를 출력했지만. -> X

// 문제에서 알파벳 대문자 소문자로만 이루어진 단어를 입력받아 길이 출력하라고 
// 해서 아스키코드로 받아서 count를 세어줬더니 통과했다.

// 알파벳으로만 이루어진 단어를 입력받아, 그 길이를 출력하라고 해서 입력이 무조건 알파벳인줄 알았는데;;
// 문제를 풀다보니 그게 아닌거 같네;

// 아스키 대문자 65~90, 소문자 97~122
const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");
const S = input[0];
let count = 0;
for (let i = 0; i < S.length; i++) {
    let char = S[i].charCodeAt()
    if (char>=65 && char<=90) {
        count++
    }
    else if (char>=97 && char <= 122) {
        count++
    }
    
}

console.log(count)