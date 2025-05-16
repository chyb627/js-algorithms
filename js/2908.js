/*
 * 2908번 상수
 * https://www.acmicpc.net/problem/2908
 * 문제
 **/

let data = '734 893';
// let fs = require('fs');
// let data = fs.readFileSync('/dev/stdin').toString().trim();

let arr = data.split('').reverse().join('').split(' ').map(Number);
let num = Math.max(...arr);
console.log(num);
