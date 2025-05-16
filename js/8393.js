/*
 * 8393번 합
 * https://www.acmicpc.net/problem/8393
 * 문제
 **/

let data = '3';
// let fs = require('fs');
// let data = fs.readFileSync('/dev/stdin').toString();

let endNumber = Number(data);
let total = 0;

for (let i = 1; i <= endNumber; i++) {
  total += i;
}

console.log(total);

// TIP
// 문자열을 수로 변환할 때 parseInt에 비하여 Number의 속도가 더 빠르게 동작
