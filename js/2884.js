/*
 * 2884번 알람시계
 * https://www.acmicpc.net/problem/2884
 * 문제
 **/

let data = '10 10';
// let fs = require('fs');
// let data = fs.readFileSync('/dev/stdin').toString();
let dataArray = data.split(' ');
let hour = Number(dataArray[0]);
let minute = Number(dataArray[1]);
let newTime;

// 1. 분이 45보다 작으면서 시가 0인경우
// 2. 분이 45보다 작으면서 시가 0이 아닌경우
// 3. 분이 45보다 큰 경우

function check(h, m) {
  if (m < 45 && h === 0) {
    hour = 23;
    minute = m - 45 + 60;
  } else if (m < 45 && h !== 0) {
    hour = h - 1;
    minute = m - 45 + 60;
  } else {
    minute = m - 45;
  }

  return (newTime = `${hour} ${minute}`);
}

check(hour, minute);

console.log(newTime);
