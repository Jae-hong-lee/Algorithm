// 직사각형 별찍기
// process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => {
//     const n = data.split(" ");
//     const a = Number(n[0]), b = Number(n[1]);

//     star = '';
//     for(i=0;i<b;i++){
//         for(j=0;j<a;j++){
//             star +='*';
//         }
//     }
//     console.log(star);
  
// });

// 띄어 쓰기 =  '\n'
// star 담을 곳.
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);

    star = '';
    for(i=0;i<b;i++){
        for(j=0;j<a;j++){
            star +='*';
        }
    }
    console.log(star);
  
});

// ----------------------
// 다른사람풀이
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const row = '*'.repeat(a)
    for(let i =0; i < b; i++){
        console.log(row)
    }
  
  // 또 다른 방법
    const star = `${'*'.repeat(a)}\n`;
    console.log(star.repeat(b));

});
// String.repeat() : 문자열을 반복한 값을 반환하는 함수