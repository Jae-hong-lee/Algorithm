// 주사위 세개
// https://www.acmicpc.net/problem/2480

// 같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다. 
// 같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다. 
// 모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.  

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");
const a = parseInt(input[0])
const b = parseInt(input[1])
const c = parseInt(input[2])




// 두번쨰 풀이
let arr = [a,b,c]
// console.log(arr.sort())
let setArr = new Set(arr.sort());
const uniArr = [...setArr]

if (uniArr.length == 1) {
    console.log(10000+(uniArr[0]*1000));
}else if(uniArr.length == 3) {
    console.log(Math.max(...arr)*100);
}else{
    console.log(1000+arr[1]*100);
}
// 69%




// 첫번째 풀이
// let arr = [a,b,c]
// // console.log(Math.max(...arr))
// let Acount = arr.filter(i => i ===a);
// let Bcount = arr.filter(i => i ===b);
// let Ccount = arr.filter(i => i ===c);

// // console.log(countArr)
// // console.log(Acount.length,Bcount.length,Ccount.length)
// let newArr = [Acount.length,Bcount.length,Ccount.length];
// let m = +Math.max(...newArr);

// // console.log(m)
// if (m ==3) {
//     const x = Math.max(...arr);
//     console.log(10000+(x * 1000));
// } else if (m == 1){
//     const x = Math.max(...arr);
//     console.log(x * 100);
//     // console.log(1000+(x * 100));
// } else{
//     const x = Math.max(...arr);
//     console.log(1000+(x * 100));
// }