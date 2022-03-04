// 오븐 시계
// https://www.acmicpc.net/problem/2525

const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
// const input = fs.readFileSync('JS/Backjun/input.txt').toString().split('\n');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let h = parseInt(input[0].split(' ')[0]);
let m = parseInt(input[0].split(' ')[1]);
let time = parseInt(input[1]);
// console.log(h,m,time)
let sum = (m + time) %60
let hour = h + (Math.floor((m+time) / 60))
if (hour > 23) {
    hour = hour -24
    console.log(hour,sum)
} else{
    console.log(hour,sum)
}

// 최적화 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
 
let curHour = input[0].split(" ")[0];
let curMin = input[0].split(" ")[1];
let cookTime = input[1];
 
solution(+curHour, +curMin, +cookTime);
 
function solution(doneHour, doneMin, cookTime) {
    doneMin += cookTime;
 
    while (doneMin >= 60){
        doneMin -= 60;
        doneHour += 1;
    }
 
    doneHour %= 24;
    console.log(doneHour, doneMin);
}