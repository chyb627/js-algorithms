/*
 * 2675번 문자열 반복
 * https://www.acmicpc.net/problem/2675
 * 문제
 **/

let data = '2\n3 ABC\n5 /HTP';
// let fs = require('fs');
// let data = fs.readFileSync('/dev/stdin').toString().trim();

let newData = data.split('\n');
let index = newData[0];

let result = '';
for (let i = 1; i <= index; i++) {
  let idx = newData[i].split(' ')[0];
  let arr = newData[i].split(' ')[1].split('');
  let newArr = arr.map((v) => v.repeat(idx));
  let str = newArr.join('');
  result += str + '\n';
}

console.log(result);
