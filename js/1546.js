/*
 * 1546번 평균
 * https://www.acmicpc.net/problem/1546
 * 문제
 **/

let data = '9\n10 20 30 40 50 60 70 80 90';
// let fs = require('fs');
// let data = fs.readFileSync('/dev/stdin').toString().trim();

let newData = data.split('\n');
let scoreIndex = Number(newData[0]);
let scoreArray = newData[1].split(' ').map((n) => Number(n));
let maxScore = Math.max(...scoreArray);

let newScoreArray = scoreArray.map((n) => (n / maxScore) * 100);
let scoreSum = newScoreArray.reduce((a, b) => a + b);
console.log(scoreSum / scoreIndex);

// 1. 인덱스와 점수들의 배열을 분리
// 2. 점수중 최대값 구하기
// 3. 최대값을 가지고 새로운 점수의 배열을 만들기
// 4. 점수의 합을 구해서 과목수로 나누어 평균 구하기
