/*
 * 1316번 그룹 단어 체커
 * https://www.acmicpc.net/problem/1316
 * 문제
 **/

let data = '3\nhappy\nnew\nyear';
// let fs = require('fs');
// let data = fs.readFileSync('/dev/stdin').toString().trim();

let arr = data.split('\n');
let index = arr[0];

function check(data) {
  let setData = new Set(data[0]);
  for (let i = 0; i < data.length - 1; i++) {
    // 오른쪽 단어와 다르다면
    if (data[i] != data[i + 1]) {
      // 이미 등장한 적 있는 알파벳이라면
      if (setData.has(data[i + 1])) {
        return false;
      } else {
        setData.add(data[i + 1]);
      }
    }
  }
  return true;
}

let summary = 0;
for (let i = 1; i <= index; i++) {
  let data = arr[i];
  if (check(data)) summary += 1;
}
console.log(summary);
