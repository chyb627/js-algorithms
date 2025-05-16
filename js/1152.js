/*
 * 1152번 그룹 단어 체커
 * https://www.acmicpc.net/problem/1152
 * 문제
 **/

let data = 'The last character is a blank ';
// let fs = require('fs');
// let data = fs.readFileSync('/dev/stdin').toString().trim();

let arr = data.trim().split(' ');

if (data === '') {
  console.log(0);
} else {
  console.log(arr.length);
}

// 빈문자열일경우 예외처리가 필요함.
