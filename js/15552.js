/*
 * 15552번 빠른 A+B
 * https://www.acmicpc.net/problem/15552
 * 문제
 **/

let data = '5\n1 1\n12 34\n5 500\n40 60\n1000 1000';
// let fs = require('fs');
// let data = fs.readFileSync('/dev/stdin').toString();

let dataArray = data.split('\n');
let index = Number(dataArray[0]);

let result = '';

for (let i = 1; i <= index; i++) {
  let newData = dataArray[i];
  let a = newData.split(' ')[0];
  let b = newData.split(' ')[1];
  result += Number(a) + Number(b) + '\n';
}

console.log(result);

// TIP
// • 한 줄(line)을 출력할 때마다 console.log()를 수행하면 많은 시간이 소요된다.
// • 모든 “줄(line)”에 대한 정보를 하나의 문자열에 담았다가 한꺼번에 출력한다.
