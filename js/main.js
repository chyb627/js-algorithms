/**************************
/**************************
 * 최소값, 최대값, 합계 구해보기
 **************************
 **************************/
let data = [5, 2, 9, 8, 4];

let minValue = data.reduce((a, b) => Math.min(a, b));
let maxValue = data.reduce((a, b) => Math.max(a, b));
let summary = data.reduce((a, b) => a + b);

console.log('최소값:', minValue); // 최소값: 2
console.log('최대값:', maxValue); // 최대값: 9
console.log('합계:', summary); // 합계: 28

/**************************
 **************************
 * 사칙연산
 **************************
 **************************/
let data1 = '7 3';
let input1 = data1.toString().split('\n');
let a1 = input1[0].split(' ')[0];
let a2 = input1[0].split(' ')[1];
console.log('a1+a2=', a1 + a2); // a1+a2= 73
console.log('a1-a2=', a1 - a2); // a1-a2= 4
console.log('a1*a2=', a1 * a2); // a1*a2= 21
console.log('a1/a2=', parseInt(a1 / a2)); // a1/a2= 2
console.log('a1%a2=', a1 % a2); //a1%a2= 1

/**************************
 * 출력
 * 2360 (472*5)
 * 3776 (472*8)
 * 1416 (472*3)
 * 181720 (472*385)
 **************************/
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

/**************************
 **************************
 * this
 * 일반 함수(function)의 this는 호출 위치에서 정의
 * 화살표 함수(Arrow)의 this는 자신이 선언된 함수(렉시컬) 범위에서 정의
 **************************
 **************************/

const user = {
  firstName: 'Yb',
  lastName: 'Cha',
  age: 34,
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  getFullNameArrow: () => {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.getFullName()); // Yb Cha
console.log(user.getFullNameArrow()); // undefined undefined

function userFuc() {
  this.firstName = 'Yb2';
  this.lastName = 'CHA2';

  return {
    firstName: 'Yb', // 객체데이터의 속성(property)이라고 한다.
    lastName: 'Cha',
    age: 34,
    getFullName() {
      // 객체데이터의 속성이 함수로 되어있으면 메소드 라고한다.
      return `${this.firstName} ${this.lastName}`;
    },
    getFullNameArrow: () => {
      return `${this.firstName} ${this.lastName}`;
    },
  };
}

const u = userFuc();

console.log(u.getFullName()); // Yb Cha
console.log(u.getFullNameArrow()); // Yb2 CHA2

const meetYou = {
  firstName: 'Dh',
  lastName: 'Yang',
};

// meetYou라는 객체 데이터는 u라는 객체가 가지고있는 getFullName라는 메소드를 빌려서 콜(호출)할 수 있다.
console.log(u.getFullName.call(meetYou)); // Dh Yang

////////////////////////////////////
////////////////////////////////////

const timer = {
  title: 'TIMER!',
  timeout() {
    console.log(this.title);
    setTimeout(function () {
      console.log(this.title); // undefined
    }, 1000);

    setTimeout(() => {
      console.log(this.title); // TIMER!
    }, 1000);
  },
};
timer.timeout(); // TIMER!

/**************************
/**************************
 * prototype
 **************************
 **************************/

// const fruits = ['Apple', 'Banana', 'Cherry']; // 기호로 배열을 만드는 리터럴 방식
const fruits = new Array('Apple', 'Banana', 'Cherry'); // 생성자 함수에서 반환된 결과, 인스턴스(fruits)(instance)

console.log(fruits); // ['Apple', 'Banana', 'Cherry']
console.log(fruits.length); // 3
console.log(fruits.includes('Banana')); // true
console.log(fruits.includes('Orange')); // false

Array.prototype.cha = function () {
  console.log(this);
};

fruits.cha();

// 객체 데이터를 만들어내는 함수 UUser를 만들고(생성자함수),
// 생성자 함수인 이유는 this를 사용해서 생성되는 객체의 속성을 정의하고 new 키워드로 호출할 수 있는 함수이기 때문.
function UUser(first, last) {
  this.firstName = first;
  this.lastName = last;
}

// prototype으로 메소드를 등록함 -> 내부에 내장됨
UUser.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const youngbin = new UUser('Youngbin', 'Cha'); // 생성자 함수 호출 (생성자 함수는 매개변수로 전달된 값을 이용해 객체를 생성하고 초기화하는 함수이다.)
console.log(youngbin); // UUser {firstName: 'Youngbin', lastName: 'Cha'}
console.log(youngbin.getFullName()); // Youngbin Cha

// TIP
// Array(배열)데이터에서 쓸 수 있는 length속성, concat속성, include라는 속성 등이 prototype이라는 속성에 등록되어있음.

/**************************
/**************************
 * ES6 Class 문법
 **************************
 **************************/

class User {
  // constructor는 생성자 역할을 하는 메서드
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Setter
  set fullName(v) {
    console.log(v);
    [this.firstName, this.lastName] = v.split(' ');
  }

  // 정적 메소드 (Static methods)
  static isUser(user) {
    if (user.firstName && user.lastName) {
      return true;
    }
    return false;
  }
}

const youngcha = new User('Young', 'Cha'); // 생성자 함수 호출 (생성자 함수는 매개변수로 전달된 값을 이용해 객체를 생성하고 초기화하는 함수이다.)
console.log(youngcha); // UUser {firstName: 'Young', lastName: 'Cha'}
console.log(youngcha.getFullName()); // Young Cha
youngcha.firstName = 'Bin';
console.log(youngcha.getFullName()); // Bin Cha
console.log(youngcha.fullName); // Bin Cha
youngcha.fullName = 'Youngbin Cha:)';

// console.log(User.isUser());
console.log(User.isUser(youngcha)); // true
console.log(User.isUser({ name: 'cha' })); // false
// console.log(youngcha.isUser()); // Error, isUser가 함수가 아니라고 나옴

// 정적 메소드는 인스턴스에서 사용할 수 없음. 클래스 자체에서 사용해야함.

/**************************
/**************************
 * 상속
 **************************
 **************************/

// 운송수단
class Vehicle {
  constructor(acceleration = 1) {
    this.speed = 0;
    this.acceleration = acceleration;
  }

  accelerate() {
    this.speed += this.acceleration;
  }

  decelerate() {
    if (this.speed <= 0) {
      console.log('정지!');
      return;
    }
    this.speed -= this.acceleration;
  }
}

// 자전거
class Bicycle extends Vehicle {
  constructor(price = 100, acceleration) {
    super(acceleration); // 상속시 super함수를 당연시 호출해야함
    this.price = price;
    this.wheel = 2;
  }
}

const bicycle = new Bicycle(300, 2);
console.log(bicycle); // Bicycle {speed: 0, acceleration: 2, price: 300, wheel: 2}
bicycle.accelerate();
bicycle.accelerate();
console.log(bicycle); // Bicycle {speed: 4, acceleration: 2, price: 300, wheel: 2}
console.log(bicycle instanceof Bicycle); // true, bicycle가 Bicycle로 인스턴스로 만들어져 있는지
console.log(bicycle instanceof Vehicle); // true, Bicycle 자체가 Vehicle 클래스에서 상속되서 만들어진 클래스이기 때문에

// 자동차
class Car extends Bicycle {
  constructor(license, price, acceleration) {
    super(price, acceleration);
    this.license = license;
    this.wheel = 4;
  }

  // 메소드 재정의 -> 오버라이딩(Overriding)
  accelerate() {
    if (!this.license) {
      console.error('무면허임둥');
      return;
    }
    this.speed += this.acceleration;
    console.log('자동차 가속임둥!', this.speed);
  }
}

const carA = new Car(true, 7000, 10);
const carB = new Car(false, 4000, 6);
console.log(carA); // Car {speed: 0, acceleration: 10, price: 7000, wheel: 4, license: true}
console.log(carB); // Car {speed: 0, acceleration: 6, price: 4000, wheel: 4, license: false}
carA.accelerate();
carA.accelerate();
console.log(carA); // Car {speed: 20, acceleration: 10, price: 7000, wheel: 4, license: true}
carB.accelerate();
console.log(carB); // 무면허임둥!!

console.log(carA instanceof Car); // true
console.log(carB instanceof Car); // true

// 보트
class Boat extends Vehicle {
  constructor(price, acceleration) {
    super(acceleration);
    this.price = price;
    this.motor = 1;
  }
}

const boat = new Boat(10000, 5);
console.log('boat::', boat); // Boat {speed: 0, acceleration: 5, price: 10000, motor: 1}
console.log(boat instanceof Boat); // true
console.log(boat instanceof Bicycle); // false
console.log(boat instanceof Car); // false

/**************************
 * indexOf()
 * 대상 문자에서 주어진 문자와 일치하는 첫 번째 인덱스(숫자)를 반환합니다.
 * 일치하는 문자가 없으면 `-1`을 반환합니다.
 **************************/

const str = 'Hello world!';

console.log(str.indexOf('!')); // 11
console.log(str.indexOf('Hi')); // -1

if (str.indexOf('hi') === -1) {
  console.log('hi가 없슴동!');
}

if (!str.includes('hi')) {
  console.log('hi가 없슴동!');
}

/**************************
 * flat()
 * 대상 배열의 모든 하위 배열을 지정한 깊이(Depth)까지 이어붙인 새로운 배열을 생성합니다.
 * 깊이의 기본값은 `1`입니다.
 **************************/

const arr = [1, 2, [3, 4, [5, 6]]];
console.log(arr.flat()); // [1, 2, 3, 4, [5, 6]]
console.log(arr.flat(2)); // [1, 2, 3, 4, 5, 6]

const arr22 = [1, 2, [3, 4], [5, 6]];
console.log(arr22.flat()); // [1, 2, 3, 4, 5, 6]

/**************************
 * join()
 * 대상 배열의 모든 요소를 구분자로 연결한 문자를 반환합니다.
 **************************/

const joinArr = ['Apple', 'Banana', 'Cherry'];
console.log(joinArr.join()); // Apple,Banana,Cherry
console.log(joinArr.join(', ')); // Apple, Banana, Cherry
console.log(joinArr.join('/')); // Apple/Banana/Cherry

/**************************
 * reduce()
 * 대상 배열의 길이만큼 주어진 콜백을 실행하고, 마지막에 호출되는 콜백의 반환값을 반환합니다.
 * 각 콜백의 반환값은 다음 콜백으로 전달됩니다.
 **************************/

const people = [
  { name: 'Cha', age: 36 },
  { name: 'Young', age: 22 },
  { name: 'Bin', age: 11 },
];

// 총 나이 계산
const totalAge = people.reduce((acc, cur) => {
  return acc + cur.age;
}, 0);

console.log(totalAge); // 69
console.log(`평균나이: ${(totalAge / people.length).toFixed(1)}세`); // 23.0세

// 모든 이름 추출
const namesArray = people.reduce((acc, cur) => {
  acc.push(cur.name);
  return acc;
}, []);
const names = namesArray.join(', ');
console.log(names); // Cha, Young, Bin

/**************************
 * sort()
 * 대상 배열을 콜백의 반환 값(음수, 양수, 0)에 따라 정렬합니다.
 * 콜백을 제공하지 않으면, 요소를 문자열로 변환하고 유니코드 코드 포인트 순서로 정렬합니다.
 * 대상 배열 원본이 변경됩니다.
 **************************/

const numbers = [4, 17, 2, 103, 3, 1, 0];

numbers.sort();
console.log(numbers); // [0, 1, 103, 17, 2, 3, 4]

numbers.sort((a, b) => a - b);
console.log(numbers); // [0, 1, 2, 3, 4, 17, 103]

numbers.sort((a, b) => b - a);
console.log(numbers); // [103, 17, 4, 3, 2, 1, 0]

const mans = [
  { name: 'Cha', age: 36 },
  { name: 'Young', age: 22 },
  { name: 'Bin', age: 11 },
];

// 오름차순
const asc = [...mans].sort((a, b) => a.age - b.age);
console.log('오름차순:', asc);

// 내림차순
const desc = [...mans].sort((a, b) => b.age - a.age);
console.log('내림차순:', desc);

/**************************
 * Object.assign()
 * 하나 이상의 출처(Source) 객체로부터 대상(Traget) 객체로 속성을 복사하고 객체를 반환한다.
 **************************/

const target = { a: 1, b: 2 };
const source1 = { b: 3, c: 4 };
const source2 = { c: 5, d: 6 };
const newAssignResult = Object.assign({}, target, source1, source2);
// const assignResult = Object.assign(target, source1, source2); 이방식으로하면 target도 변경됨

console.log(target); // {a: 1, b: 2} assignResult방식으로 하면 {a: 1, b: 3, c: 5, d: 6}
console.log(newAssignResult); // {a: 1, b: 3, c: 5, d: 6}
// console.log(assignResult); // {a: 1, b: 3, c: 5, d: 6}

/**************************
 * Object.entries()
 * 주어진 객체의 각 속성과 값으로 하나의 배열 만들어 요소로 추가한 2차원 배열을 반환한다.
 **************************/

const someone = {
  name: 'Cha',
  age: 30,
  isValid: true,
  email: 'test1@test.com',
};

console.log(Object.entries(someone)); //  [['name', 'Cha'], ['age', 30], ['isValid', true], ['email', 'test1@test.com']]

for (const [key, value] of Object.entries(someone)) {
  console.log(key); // name, age, isValid, email
  console.log(value); // Cha, 30, true, test1@test.com
}

console.log(Object.keys(someone)); // ['name', 'age', 'isValid', 'email']
console.log(Object.values(someone)); // ['Cha', 30, true, 'test1@test.com']

/**************************
 * JSON(JavaScript Object Notation)
 * 데이터 전달을 위한 표준 포맷
 * 문자, 숫자, 불린, Null, 객체, 배열만 사용
 * 문자는 큰 따옴표만 사용
 * 후행 쉼표 사용 불가
 * .json 확장자 사용
 *
 * JSON.stringify() - 데이터를 JSON 문자로 변환합니다.
 * JSON.parse() - JSON 문자를 분석해 데이터로 변환합니다.
 **************************/

console.log(JSON.stringify('Hello world!')); // "Hello world!"
console.log(JSON.stringify(123));
console.log(JSON.stringify(false));
console.log(JSON.stringify(null));
console.log(JSON.stringify({ name: 'Cha', age: 85 }));
console.log(JSON.stringify([1, 2, 3]));

console.log('// ----------------------------------- //');

console.log(JSON.parse('"Hello world!"'));
console.log(JSON.parse('123'));
console.log(JSON.parse('false'));
console.log(JSON.parse('null'));
console.log(JSON.parse('{ "name": "Cha", "age": 85 }'));
console.log(JSON.parse('[1, 2, 3]'));

/**************************
 * Promise
 * Resolve, Reject 그리고 에 핸들링
 **************************/

const delayAdd = (index) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (index > 10) {
        reject(`${index}는 10보다 클 수 없슴둥`);
        return;
      }
      console.log(index);
      resolve(index + 1);
    }, 1000);
  });
};

delayAdd(2)
  .then((res) => console.log(res))
  .catch((err) => console.log.error(err));

const wrap = async () => {
  try {
    const res = await delayAdd(2);
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};

const getMovies = (movieName) => {
  return new Promise((resolve, reject) => {
    fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.Response === 'False') {
          reject(json.Error);
        }
        resolve(json);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

let loading = true;

// .then()
getMovies('avengers')
  .then((movies) => console.log('영화 목록:', movies))
  .catch((error) => console.log('에러 발생:', error))
  .finally(() => (loading = false));

// async/await
const wrapMovie = async () => {
  try {
    const movies = await getMovies('avengers');
    console.log('영화 목록:', movies);
  } catch (error) {
    console.log('에러 발생:', error);
  } finally {
    loading = false;
  }
};

wrapMovie();

/**************************
 * fetch(주소, 옵션)
 * 네트워크를 통해 리소스 요청(Request) 및 응답(Response)을 처리할 수 있습니다.
 * Promise 인스턴스를 반환합니다.
 **************************/

fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=avengers`, {
  method: 'GET', // default가 GET
  Headers: {
    'Content-Type': 'application/json',
  },
  // body: JSON.stringify({
  //   name: 'cha',
  //   age: 34,
  // }),
})
  .then((res) => res.json())
  .then((json) => console.log('fetch', json));

const wrapFetch = async () => {
  const res = await fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=avengers`);
  const json = await res.json();
  console.log('wrapFetch', json);
};
wrapFetch();

/**************************
 * DOM(Document Object Model)
 * DOM이란 HTML 문서를 객체로 표현한 것으로,
 * JS에서 HTML을 제어할 수 있게 해준다.
 *
 * Node vs Element
 * Node: HTML 요소, 텍스트, 주석 등 모든 것을 의미
 * Element: HTML 요소를 의미
 **************************/

const parent = document.querySelector('.parent');

// 부모 요소의 모든 자식 노드 확인!
console.log(parent.childNodes);

// 부모 요소의 모든 자식 요소 확인!
console.log(parent.children);

class N {}
class E extends N {}

console.dir(E);
console.dir(N);
console.dir(E.__proto__);

console.dir(Element);
console.dir(Node);
console.dir(Element.__proto__);

/**************************
 * document.getElementId()
 * HTML `id` 속성(Attributes) 값으로 검색한 요소를 반환합니다.
 * 여러 요소가 검색되면, 가장 먼저 찾은 요소만 반환합니다.
 * 검색 결과가 없으면, `null`을 반환합니다.
 **************************/

const el = document.getElementById('child');
console.log('el::', el);

/**************************
 * document.querySelector()
 * 'CSS 선택자'로 검색한 요소를 하나 반환합니다.
 * 여러 요소가 검색되면, 가장 먼저 찾은 요소만 반환합니다.
 * 검색 결과가 없으면, `null`을 반환합니다.
 **************************/

const el2 = document.querySelector('.child:first-child');
console.log('el2::', el2);

/**************************
 * document.querySelectorAll()
 * 'CSS 선택자'로 검색한 모든 요소를 `NodeList`로 반환합니다.
 * `NodeList` 객체는 `.forEach()`를 사용할 수 있습니다.
 **************************/

const nodeList = document.querySelectorAll('.child');
console.log('nodeList::', nodeList);
nodeList.forEach((el) => console.log(el.textContent));
nodeList.forEach((el) => console.log(el.parentElement));

/**************************
 * document.createElement()
 * 메모리에만 존재하는 새로운 HTML 요소를 생성해 반환합니다.
 **************************/

const divEl = document.createElement('div');
console.log('divEl::', divEl);

const inputEl = document.createElement('input');
console.log('inputEl::', inputEl);

divEl.textContent = 'HELLO~~';

const parentEl = document.querySelector('.parent');
const childEl = document.querySelector('.child');
parentEl.prepend(new Comment(' 주 석 '));
parentEl.append(divEl);
parentEl.append('Text!!');
childEl.remove();

/**************************
 * window.innerWidth
 * window.innerHeight
 * 현재 화면(Viewport)의 크기를 얻습니다.
 **************************/

console.log(window.innerWidth); // 가로너비
console.log(window.innerHeight); // 세로너비

/**************************
 * window.scrollX
 * window.scrollY
 * 페이지의 좌상단 기준, 현재 화면(Viewport)의
 * 수평 혹은 수직 스크롤 위치를 얻습니다.
 **************************/

// console.log(window.scrollX, window.screenY);

/**************************
 * window.scrollTo()
 * E.scrollTo()
 * 지정된 좌표로 대상(화면, 스크롤 요소)을 스크롤합니다.
 * 대상.scrollTo(X좌표, Y좌표)
 * 대상.scrollTo({ top: Y, left: X, behavior: 'smooth'})
 **************************/

// setTimeout(() => {
//   window.scrollTo(0, 500);
// }, 1000);

/**************************
 * addEventListener()
 * 대상에 이벤트 청취(Listen)를 등록합니다.
 * 대상에 지정한 이벤트가 발생했을 때 지정한 함수(Handler)가 호출됩니다.
 **************************/

parentEl.addEventListener('click', () => {
  console.log('click parent!');
});

childEl.addEventListener('click', () => {
  console.log('click child!');
});

/**************************
 * removeEventListener()
 * 대상에 등록했던 이벤트 청취(Listen)를 제거합니다.
 * 메모리 관리를 위해 등록한 이벤트를 제거하는 과정이 필요할 수 있습니다.
 **************************/

const handler = () => {
  console.log('parent임둥!');
};

parentEl.addEventListener('click', handler);
childEl.addEventListener('click', () => {
  parentEl.removeEventListener('click', handler);
});
