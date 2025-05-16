/*
 * 2562번 최댓값
 * https://www.acmicpc.net/problem/2562
 * 문제
 **/

let data = '3\n29\n38\n12\n57\n74\n40\n85\n61';
// let fs = require('fs');
// let data = fs.readFileSync('/dev/stdin').toString();

let dataArray = data.split('\n').map((v) => Number(v));
let maxNumer = Math.max(...dataArray);
let maxNumberIndex = dataArray.indexOf(maxNumer) + 1;

console.log(maxNumer + '\n' + maxNumberIndex);
