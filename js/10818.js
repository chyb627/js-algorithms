/*
 * 10818번 최소, 최대
 * https://www.acmicpc.net/problem/10818
 * 문제
 **/

let data = '5\n20 10 35 30 7';
// let fs = require('fs');
// let data = fs.readFileSync('/dev/stdin').toString();

let dataIndex = data.split('\n')[0];
let dataArray = data
  .split('\n')[1]
  .split(' ')
  .map((x) => Number(x));

let maxNumber = dataArray.reduce((a, b) => Math.max(a, b));
let minNumber = dataArray.reduce((a, b) => Math.min(a, b));

let result = `${minNumber} ${maxNumber}`;
console.log(result);
