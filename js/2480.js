/*
 * 2480번 주사위 세개
 * https://www.acmicpc.net/problem/2480
 * 문제
 **/

// let data = '3 3 6';
let data = '2 2 2';
// let fs = require('fs');
// let data = fs.readFileSync('/dev/stdin').toString();
let [a, b, c] = data.split(' ').map(Number);
let money;

if (a === b && a === c) {
  money = 10000 + a * 1000;
} else if (a === b || a === c) {
  money = 1000 + a * 100;
} else if (b === c) {
  money = 1000 + b * 100;
} else {
  money = Math.max(a, b, c) * 100;
}

console.log(money);
