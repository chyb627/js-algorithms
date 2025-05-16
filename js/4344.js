/*
 * 4344번 평균은넘겠지
 * https://www.acmicpc.net/problem/4344
 * 문제
 **/

let data = '5\n5 50 50 70 80 100\n7 100 95 90 80 70 60 50\n3 70 90 80\n3 70 90 81\n9 100 99 98 97 96 95 94 93 91';
// let fs = require('fs');
// let data = fs.readFileSync('/dev/stdin').toString().trim();

let newData = data.split('\n');
let testIndex = Number(newData[0]);

let result = '';

for (let i = 1; i <= testIndex; i++) {
  let perData = newData[i]
    .split(' ')
    .map((v) => Number(v))
    .slice(1);
  let perDataIndex = newData[i].split(' ').map((v) => Number(v))[0];
  let perDataSum = perData.reduce((a, b) => a + b);
  let perAverage = perDataSum / perDataIndex;

  // 조건을 만족하는 개수
  const count = perData.filter((num) => num > perAverage).length;

  // 확률 (소수로)
  const probability = count / perDataIndex;

  result += (probability * 100).toFixed(3) + '%\n';
}

console.log(result);

// 1. 전체 테스트 갯수와 나머지 데이터를 나누기
// 2. 테스트 데이터들을 반복문 돌리기
// 3. 테스트 데이터를 학생의수와 학생의 성적 배열로 나누기
// 4. 학생의 성적을 이용해 평균 점수 구하기
// 5. 평균점수를 이용하여 학생의 성적 배열과 비교하여 큰만큼의 length를 구해서 학생의수 length로 나누어 평균구하기
