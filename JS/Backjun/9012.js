// 괄호 
// https://www.acmicpc.net/problem/9012

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const T = +input[0];

for (let i = 1; i <= T; i++) {
    let PS = input[i]
    let stack = []
    for (let i = 0; i <= PS.length; i++) {
        if (PS[i]=='(') {
            stack.push(PS[i])
        }else if (PS[i] == ')' && stack[stack.length-1] != '(') {
            stack.push(PS[i])
        }else if(PS[i]==')'){
            stack.pop()
        }
        
    }
    // console.log(stack)
    // console.log(PS) 
    // else if 로 pop 하지않고 else로 팝해서 스택이 꼬엿음.
    // 괄호를 push 해서 두번째 조건문에서 값이 잘못들어가서 꼬엿음.
    if (stack.length >0) {
        console.log("NO")
    }else{
        console.log("YES")
    }   
}




// 다른사람 풀이
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const caseCount = Number(input[0]);

for (let i = 1; i <= caseCount; i += 1) {
  const cases = input[i];
  const stack =  [];
  let result = 'YES';

  for (let j = 0; j < cases.length; j += 1) {
    if (cases[j] === '(') {
      stack.push(1);
    } else {
      if (!stack.pop()) {
        result = 'NO';
        break;
      } 
    }
  }

  if (stack.length !== 0) {
    result = 'NO';
  }

  console.log(result);
}


// 다른사람풀이222
// 카운트 개념으로 푼거 같은데 이게 통과가 된다.
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const len = input.shift();
const result = [];

for (let i = 0; i < len; i++) {
    let cnt = 0;
    
    for (let s of input[i]) {
        cnt += s === "(" ? 1 : -1;
        
        if (cnt < 0) break;
    }
    
    result.push(cnt === 0 ? 'YES' : "NO");
}

console.log(result.join('\n'));

// 다른사람풀이 3333 
// 내풀이를 더 줄일 수 있다.
for (let i = 1; i <=T; i++) {
    const s = input[i];
    let msg = "YES"
    let stack = []
    for (let j = 0; j < s.length; j++) {
        if (s[j]==='(') {
            stack.push(1);
        }else{
            if (!staack.pop()) {
                msg = "NO";
                break;
            }
        }
        
    }
    if (stack.length !== 0 ) {
        msg = "NO";
    }
    
}console.log(msg)