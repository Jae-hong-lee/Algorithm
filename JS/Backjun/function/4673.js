// 셀프 넘버
// https://www.acmicpc.net/problem/4673

// 10,000보다 작거나 같은 셀프 넘버를 한 줄에 하나씩 증가하는 순서로 출력한다.
// 힌트 : 브루트포스 알고리즘
// https://hcr3066.tistory.com/26

// 재귀함수: https://velog.io/@jeongin/Javascript-%EC%9E%AC%EA%B7%80%ED%95%A8%EC%88%98

// n을 d(n)의 생성자라고 한다. 위의 수열에서 33은 39의 생성자이고,
//  39는 51의 생성자, 51은 57의 생성자이다. 
// 생성자가 한 개보다 많은 경우도 있다. 
// 예를 들어, 101은 생성자가 2개(91과 100) 있다. 

// 생성자가 없는 숫자를 셀프 넘버라고 한다. 100보다 작은 셀프 넘버는 총 13개가 있다. 
// 1, 3, 5, 7, 9, 20, 31, 42, 53, 64, 75, 86, 97

// 1~10000 까지 수를 구한ㄴ다음 아닌 수를 걸러내고 출력하는 방식으로 해볼까? 브루트포스??s
let arr = [];
let answer = [];
for (let i = 1; i < 10000; i++) {
    let N = 0;
    let indexnumber = String(i);
    // 33+3+3 = 39, 39 +3 +9 = 51
    // 자릿수 숫자를 더해주기 위해서 문자형으로 바꾸고 아래
    // for문을 통해서 N에 더해줌
    for (let j = 0; j < indexnumber.length; j++) {
        N += Number(indexnumber[j])
    }
    let newN = N + i;
    arr.push(newN)
}
for (let x = 1; x < 10000; x++) {
    if (arr.indexOf(x) === -1) {
        answer += x + '\n';
    }
    
}
// console.log(arr);
console.log(answer);
// arr배열을 만들고 1~10000까지 순서대로 넣고 정답용으로 쓸꺼는 answer에 넣어준다.
// arr 에서 생성자를 가지는 수열을 만들고 answer에 있는 숫자들과 순서대로 대조해서
// arr배열에 없는 숫자를 차례대로 answer배열에 줄바꿈하면서 삽입한 후 한번만 answer 배열을 출력



// 효율좋은 다른사람풀이⭐️⭐️
// 0~10000 의 배열을 생성하여 전부 true를 넣어주고 셀프넘버가 아닌 수만 false로 바꿔 준 다음
// true 인 인덱스만 출력하는 방식으로 바꾸니 메모리 소비를 현저히 줄일 수 있었다.
function d(n) {
    let number = n;
    let result = 0;

    for (let i = 0; i < String(n).length; i++) {
        // number를 10으로 나눠가면서 각 자리수를 result에 합한다.
        result += number % 10;
        number = Math.floor(number / 10);
    }
    // 입력받은 수 와 result를 더하여 return
    return n + result;
}

const range = 10000;
// 0~10000 범위까지 셀프넘버 배열을 생성하고 true로 초기화.
let selfNumbers = Array(range + 1).fill(true);

for (let i = 0; i <= range; i++) {
    // 셀프넘버가 아니면 false로 변환.
    selfNumbers[d(i)] = false;
}

// true index만 출력
for (let i = 0; i < range; i++) {
    if (selfNumbers[i]) {
        console.log(i);
    }
}