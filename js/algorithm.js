/**************************
 * JavaScript 큐(Queue)
 **************************/

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek() {
    return this.items[this.headIndex];
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

let queue = new Queue();
queue.enqueue(5);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(7);
queue.dequeue();
queue.enqueue(1);
queue.enqueue(4);
queue.dequeue();
// console.log(queue.items);

while (queue.getLength() != 0) {
  console.log(queue.dequeue());
}

/**************************
 * JavaScript
 * 선택정렬 (Selection Sort)
 * 매 단계에서 가장 작은 원소를 선택해서 앞으로 보내는 정렬 방법.
 * 앞으로 보내진 원소는 더 이상 위치가 변경되지 않는다.
 * 선택정렬이란 가장 작은 것을 선택해서 앞으로 보내는 정렬 기법이다.
 * 매 단계에서 가장 작은 것을 선택하는 데에 약 N번의 연산잉 필요하다. (선형탐색)
 * 결과적으로 약 N개의 단계를 거친다는 점에서 최악의 경우 O(N^2)의 시간 복잡도를 가진다.
 **************************/

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i; // 가장 작은 원소의 인덱스

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    // 스와프 (swap)
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

console.log(selectionSort([0, 6, 2, 7]));

/**************************
 * JavaScript
 * 버블 정렬 (Bubble Sort)
 * 단순히 인접한 두 원소를 확인하여, 정렬이 안 되어 있다면 위치를 서로 변경한다.
 * 서로 인접한 두 원소를 비교하는 형태가 거품과 같다고 하여 붙여진 이름이다.
 * 시간 복잡도 O(N^2)로 비효율적인 정렬 알고리즘 중 하나이다.
 * 각 단계에서 인접한 두 개의 원소를 비교하여, 필요시 위치를 변경
 * 첫째와 둘째 비교, 둘째와 셋째 비교, 셋째와 넷째를 비교하는 방식
 * 한 번의 단계가 수행되면, 가장 큰 원소가 맨 뒤로 이동한다.
 * 따라서, 그 다음 단계에서는 맨 뒤로 이동한 데이터는 정렬에서 제외된다.
 * 최악의 경우 시간 복잡도 O(N^2)을 보장한다.
 * 이미 정렬된 배열에 대해서 모든 비교가 필요하므로, 굉장히 비효율적인 정렬 알고리즘 중 하나에 속한다.
 **************************/

function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(selectionSort([0, 6, 2, 7]));

/**************************
 * JavaScript
 * 삽입 정렬 (Insertion Sort)
 * 각 단계에서 현재 원소가 삽입될 위치를 찾는다.
 * 적절한 위치에 도달할때까지 반복적으로 왼쪽으로 이동한다.
 **************************/

function insertionSort(arr) {
  for (let i = 1; j > 0; j--) {
    // 인덱스 j부터 1까지 1씩 감소하며 반복
    if (arr[j] < arr[j - 1]) {
      // 한 칸씩 왼쪽으로 이동
      // 스와프(swap)
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
    } else {
      // 자기보다 작은 데이터를 만나면 그 위치에서 멈춤
      break;
    }
  }
}

/**************************
 * JavaScript
 * 병합 정렬
 **************************/

// 병합(merge) 수행 함수
function merge(arr, left, mid, right) {
  let i = left;
  let j = mid + 1;
  let k = left; // 결과 배열의 인덱스

  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) sorted[k++] = arr[i++];
    else sorted[k++] = arr[j++];
  }

  // 왼쪽 배열에 대한 처리가 다 끝난 경우
  if (i > mid) {
    for (; j <= right; j++) sorted[k++] = arr[j];
  }

  // 오른쪽 배열에 대한 처리가 다 끝난 경우
  else {
    for (; i <= mid; i++) sorted[k++] = arr[i];
  }

  // 정렬된 배열 결과를 원본 배열에 반영하기
  for (let x = left; x <= right; x++) {
    arr[x] = sorted[x];
  }
}

// 병합 정렬 (merge sort) 함수
function mergeSort(arr, left, right) {
  // 원소가 1개인 경우, 해당 배열은 정렬이 된 상태로 이해 가능
  if (left < right) {
    // 원소가 2개 이상이라면
    let mid = parseInt((left + right) / 2); // 2개의 부분 배열로 분할(divide)
    mergeSort(arr, left, mid); // 왼쪽 부분 배열 정렬 수행(conquer)
    mergeSort(arr, mid + 1, right); // 오른쪽 부분 배열 정렬 수행(conquer)
    merge(arr, left, mid, right); // 정렬된 2개의 배열을 하나로 병합(combine)
  }
}
