/*
 * 2739번 구구단
 * https://www.acmicpc.net/problem/2739
 * 문제
 **/

let data = '2';
// let fs = require('fs');
// let data = fs.readFileSync('/dev/stdin').toString();

let number = Number(data);

for (let i = 1; i <= 9; i++) {
  console.log(`${number} * ${i} = ${number * i}`);
}
