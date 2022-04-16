// 단어의 개수
// https://www.acmicpc.net/problem/1152

// OK - 그런데 빈칸만 쭈루루룩 있을떄는 틀릴듯. ex) '      '

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const Str = input[0]
if (Str == ' ') {
    console.log(0)
}else{
    let x = Str.trim().split(' ').length-1
    console.log(x+1)
}
// console.log(Str)




// 빈칸 하나만 입력되는 경우가 반례일 거 같습니다.
// 틀림
// trim 함수로 양쪽 공백지움
// const fs = require('fs');
// const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
// let input = fs.readFileSync(filePath).toString().split("\n");
// const Str = input[0].trim().split(' ').length-1

// console.log(Str+1)

// 예제 2,3 모두 틀리게 나옵니다. 
// 첫 글자/마지막 글자/첫 글자와 마지막 글자가 공백인 경우를 고려해 주셔야 합니다.
// 틀림
// split 함수를 이용해서 특정문자의 개수를 세는 방법.
// https://gent.tistory.com/467
// const fs = require('fs');
// const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
// let input = fs.readFileSync(filePath).toString().split("\n");
// const Str = input[0].split(' ').length-1

// console.log(Str+1)
// console.log(count)