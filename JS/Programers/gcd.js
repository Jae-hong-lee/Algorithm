// 최대공약수와 최소공배수
//https://programmers.co.kr/learn/courses/30/lessons/12940?language=javascript
function solution(n, m) {
    var answer = [];
    return answer;
}
// console.log(solution(3,12)); //result [3,12]
// console.log(solution(2,5));  //result [1,10]

// 최대공약수 GCD(Greatest Common Divisor)
// 최대공약수는 두 자연수의 공통된 약수 중 가장 큰 수를 의미한다. ******
// ex) 72 와 30의 최대공약수는 6이다.
 
// 최소공배수 LCM(Least Common Multiple)
// 최소공배수는 두 자연수의 공통된 배수 중 가장 작은 수를 의미한다.
// 최소공배수 = 두 자연수의 곱 / 최대공약수 **********
// ex) 72 와 30의 최소공배수는 360이다.

// 유클리드 호제법(Euclidean Algorithm)
// 2개의 자연수를 받아 최대공약수를 받기 위해 2부터 *****
// 두 자연수 중 작은 자연수까지 모두 나누어보면서 가장 큰 공약수를 구할 수 있다.*****
// 위와 같은 방법으로 문제를 풀면 시간복잡도는 O(N)이 된다.
//  나쁜 방법은 아니지만 효율을 높이기 위해 유클리드 호제법이란 알고리즘을 사용하면 
//  시간복잡도를 O(logN)으로 줄일 수 있다.

//최대공약수 : 유클리드 호제법
// 최소공배수 : a * b / 최대공약수

// 유클리드호제법 : 유클리드 호제법의 규칙을 살펴보자면, 나머지가 0이 되기 전까진 
// 나누는 수 / 나머지가 재귀적으로 실행된다. 
// (처음에 b의 위치에 있던 값이 a로 이동됨.)
// a > b 일 때,
// a % b = r (나머지)
// b % r = r2
// r % r2 = r3
// ..
// ..
// 나머지가 0이 될 때 까지 반복한다.
// 이 때, 나머지를 0으로 만든 나눈 수가 최대공약수가 된다.

//수도코드
function solution(n, m) {
    var answer = [];
    let gcd = GCD(n,m);

    function GCD(n,m){
        if (m == 0){
            return n;
        }else{
            return GCD(n,n%m);
        }
    }
    // console.log(gcd);
    let lcm = n*m/gcd
    answer = [gcd,lcm]
    return answer;
}
// console.log(solution(3,12)); //result [3,12]


// GCD 함수 수정, 입력값 만들어주기.
function solution(n, m) {
    var answer = [];

    const gcd = function GCD(n,m){
        if (m === 0){
            return n;
        }
        return GCD(m, n%m);
        
    }
    // console.log(gcd);
   
    answer = [gcd(n,m), n*m/gcd(n,m)];
    
    return answer;
}


// 파이썬에서 배운 유클리드 호제법
// def gcd(n1, n2):
//     if n1 < n2:
//         (n1, n2) = (n2, n1)
//     while n2 != 0:
//         (n1, n2) = (n2, n1 % n2)
//     return n1
// def solution(n, m):
//     return [gcd(n, m), (n * m) / gcd(n,m)]


// 다른사람 풀이 
function solution(n, m) {
    var answer = [];
    // 최대공약수 함수
    const gcf = (a,b) => {
        if ( b === 0) { // 나머지가 0이 되면 나눈 수를 반환.
            return a
        }
        return gcf(b, a % b) // 나머지가 0이 아니면 재귀로 함수를 실행한다.
    }
    // 최소공배수 함수
    const lcm = (a,b) => (a*b) / gcf(a,b)
    
    return [gcf(n,m), lcm(n,m)];
}