// 단어공부
// https://www.acmicpc.net/problem/1157


// 대소문자 구분 X , 가장 많이 사용한 문자 대문자로 출력하기, 2개이상이라면 '?' 출력.
// 재귀 or while 활용해서 반복 시키기 (indexof), count 활용해서.


// 실패 -> 다른사람 풀이보고 수정.
// 수정한부분: counter 라는 배열에 중복제거된 문자열의 반복값을 집어넣고
//           Max값을 구해서 for문을 통해 Max값과 같을 경우 
// #str 에서 그에 맞는 부분을 answer에 추가 answer길이가 두개 이상이면 '?' 출력
// #str은 중복제거된 문자가 배열로 들어있고 counter에는 그 문자에 반복횟수가 들어있음
// 즉, str 과 counter 에 길이는 똑같음.
// Max과 동일한 부분을 가지고 있는 counter 부분을 str에서 가져온다는 뜻.
// 그 후 길이를 판단하고 올바른 return 값을 출력 // ? : answer
const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const S = input[0].toUpperCase();
let str = new Set(S.split(''));
str = [...str];
// Set 객체로 만들어서 중복제거
// console.log(str) //[ 'M', 'I', 'S', 'P' ]
let counter = []
for (let i = 0; i < str.length; i++) {
    let Char = str[i];
    let pos = S.indexOf(Char);
    let count = 0
    while (pos !== -1) {
        count++;
        pos = S.indexOf(Char, pos + 1);
    }
    counter.push(count);
}
// console.log(counter) //[ 1, 4, 4, 1 ]
let max = Math.max(...counter)
let answer = []
for (let j = 0; j < counter.length; j++) {
    if (counter[j] == max) {
        answer.push(str[j])
    }
}
// console.log(answer.join(''))
if (answer.length > 1) {
    console.log('?')
}else{
    console.log(answer.join(''))
}


// 특정문자 개수찾기------------------------------------------------
// var text = 'aaabbbaaabababaaaabaa';
// var count = 0;
// var searchChar = 'a'; // 찾으려는 문자
// var pos = text.indexOf(searchChar); //pos는 0의 값을 가집니다.

// while (pos !== -1) {
//   count++;
//   pos = text.indexOf(searchChar, pos + 1); // 첫 번째 a 이후의 인덱스부터 a를 찾습니다.
// }

// console.log(count); // 로그에 14를 출력합니다.

// Set 을 이용한 다른사람풀이--------------------------------------
// https://laycoder.tistory.com/193
    // // 입력받은 문자를 소문자로 치환
    // const word = line.toLowerCase();
    // // 문자를 알파벳으로 쪼개고 중복을 없애줌
    // let alphabets = [...new Set(word.split(''))];

    // // 제일많은 문자와 개수 초기화
    // let maxChar = '';
    // let maxCount = 0;

    // for (let i = 0; i < alphabets.length; i++) {
    //     // 알파벳 개수 : 문자를 알파벳으로 나눴을 때 생성되는 배열의 길이 - 1
    //     let count = word.split(alphabets[i]).length - 1;

    //     // 최대 개수보다 높으면 제일 많은 문자와 개수를 해당 알파벳과 개수로 바꿔줌
    //     if (count > maxCount) {
    //         maxChar = alphabets[i];
    //         maxCount = count;
    //         // 최대 개수와 같으면 제일 많은 문자를 ? 로 바꿔줌
    //     } else if (count === maxCount) {
    //         maxChar = '?';
    //     }
    // }

    // // 제일 많은 문자를 대문자로 출력
    // console.log(maxChar.toUpperCase());