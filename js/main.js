// 최소값, 최대값, 합계 구해보기
let data = [5, 2, 9, 8, 4];

let minValue = data.reduce((a, b) => Math.min(a, b));
let maxValue = data.reduce((a, b) => Math.max(a, b));
let summary = data.reduce((a, b) => a + b);

console.log('최소값:', minValue);
console.log('최대값:', maxValue);
console.log('합계:', summary);

// 사칙연산
let data1 = '7 3';
let input1 = data1.toString().split('\n');
let a1 = input1[0].split(' ')[0];
let a2 = input1[0].split(' ')[1];
console.log('a1+a2=', a1 + a2);
console.log('a1-a2=', a1 - a2);
console.log('a1*a2=', a1 * a2);
console.log('a1/a2=', parseInt(a1 / a2));
console.log('a1%a2=', a1 % a2);

/**
 * 출력
 * 2360 (472*5)
 * 3776 (472*8)
 * 1416 (472*3)
 * 181720 (472*385)
 */
let data2 = '472\n385';
let arr2 = data2.split('\n');
let x2 = Number(arr2[0]);
let y2 = Number(arr2[1]);
let y2_1 = Number(arr2[1][2]); // 1의자리
let y2_2 = Number(arr2[1][1]); // 10의자리
let y2_3 = Number(arr2[1][0]); // 100의자리

console.log(x2 * y2_1 + '\n' + x2 * y2_2 + '\n' + x2 * y2_3 + '\n' + x2 * y2 + '\n');

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n'); // 100
// let x = Number(input[0]);
// // let x = 89;

// function check(num) {
//   if (num >= 90 && num <= 100) {
//     return 'A';
//   } else if (num >= 80) {
//     return 'B';
//   } else if (num >= 70) {
//     return 'C';
//   } else if (num >= 60) {
//     return 'D';
//   } else {
//     return 'F';
//   }
// }

// const result = check(x);
// console.log(result);
