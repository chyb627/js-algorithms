/*
 * 11720번 숫자의 합
 * https://www.acmicpc.net/problem/11720
 * 문제
 **/

let data = '5\n54321';
// let fs = require('fs');
// let data = fs.readFileSync('/dev/stdin').toString().trim();

let newData = data.split('\n');
let index = newData[0];
let array = newData[1].split('').map(Number);
let sum = array.reduce((a, b) => a + b);
console.log(sum);

// let sum2 = 0;
// for (let i = 0; i < index; i++) {
//   sum2 += array[i];
// }
// console.log(sum2);
