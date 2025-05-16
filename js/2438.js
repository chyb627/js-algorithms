/*
 * 2438번 별찍기 - 1
 * https://www.acmicpc.net/problem/2438
 * 문제
 **/

let data = '5';
// let fs = require('fs');
// let data = fs.readFileSync('/dev/stdin').toString();

let n = Number(data);
let res = '';

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    res += '*';
  }
  res += '\n';
}
console.log(res);
