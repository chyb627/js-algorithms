/*
 * 3052번 나머지
 * https://www.acmicpc.net/problem/3052
 * 문제
 **/

let data = '39\n40\n41\n42\n43\n44\n82\n83\n84\n85';
// let fs = require('fs');
// let data = fs.readFileSync('/dev/stdin').toString().trim();

let dataArray = data.split('\n').map((v) => Number(v) % 42);
let uniqueArr = [...new Set(dataArray)];
console.log(uniqueArr.length);
