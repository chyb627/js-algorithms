/*
 * 2525번 오븐시간
 * https://www.acmicpc.net/problem/2525
 * 문제
 **/

// let data = '14 30\n20';
let data = '17 40\n80';
// let fs = require('fs');
// let data = fs.readFileSync('/dev/stdin').toString();
let currentTime = data.split('\n')[0];
// let currentHour = Number(currentTime.split(' ')[0]);
// let currentMinute = Number(currentTime.split(' ')[1]);
let [currentHour, currentMinute] = currentTime.split(' ').map(Number);
let plusMiunute = Number(data.split('\n')[1]);
let addMinute = plusMiunute + currentMinute;

// 분이 60이상 시가24이상
// 분이 60이상 시가24미만
// 분이 60이하
if (addMinute < 60) {
  currentMinute = addMinute;
} else {
  currentMinute = addMinute % 60;
  let hour = parseInt(addMinute / 60);
  let totalHour = currentHour + hour;

  if (totalHour >= 24) {
    currentHour = totalHour % 24;
  } else {
    currentHour = totalHour;
  }
}

console.log(`${currentHour} ${currentMinute}`);
