//힙은 완전 이진트리의 일종으로 우선순위 큐를 위해 만들어진 자료구조이다.
//느슨한 정렬상태를 유지한다.
//구현 시 내부적으로 최소 힙, 최대 힙을 이용한다.
//삽입과 삭제에 NlogN의 복잡도를 가진다.

//java -> priorityQueue, python -> heapq, js -> 그런거없음.

//힙에서 부모와 자식간의 관계
//왼쪽 자식의 index = (부모의 index * 2) + 1
//오른쪽 자식의 index = (부모의 index * 2) + 2
//부모의 index = Math.floor((자식의 index - 1) / 2)

class Heap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  //삽입
  //힙의 마지막 위치에 요소를 추가한다.
  //새로운 요소를 추가한 위치에서부터 부모노드와 추가된 노드의 위치를 비교한다.
  //비교후 swap()

  add(value) {
    this.heap.push(value); //힙의 끝 위치에 새로운 노드 추가
    this.bubbleUp(); //새로운 값이 추가된 위치에서 bubbleUp실행
  }

  bubbleUp() {
    let index = this.heap.length - 1; //새로 노드가 추가된 위치
    let parentIdx = Math.floor((index - 1) / 2); //부모 노드의 위치

    while (
      this.heap[parentIdx] && //부모노드가 존재하고
      this.heap[index][1] < this.heap[parentIdx][1] //새로운 노드가 부모노드보다 작을경우
    ) {
      this.swap(index, parentIdx);
      index = parentIdx;
      parentIdx = Math.floor((index - 1) / 2);
    }
  }

  //삭제연산
  //루트노드를 제거 (min -> 가장 작은 값, max -> 가장 큰 값)
  //가장 마지막에 있는 노드를 루트 노드로 이동
  //루트노드와 자식노드를 비교하며 swap한다.

  poll() {
    if (this.heap.length == 0) {
      return -1;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    let root = this.heap[0]; //루트값 저장후
    this.heap[0] = this.heap.pop(); //말단을 루트로 이동
    this.bubbleDown(); //루트로 이동된 말단 올바른 위치로 이동
    return root; //루트값 반환
  }

  bubbleDown() {
    let index = 0; //루트 노드의 인덱스
    let leftIdx = index * 2 + 1; //왼쪽 자식 index
    let rightIdx = index * 2 + 2; //오른쪽 자식 index

    while (
      //왼쪽 자식이 존재하면서 값이 루트 노드보다 작거나
      (this.heap[leftIdx] && this.heap[leftIdx][1] < this.heap[leftIdx][1]) ||
      //오른쪽 자식이 존재하면서 값이 루트 노드보다 작은 경우
      (this.heap[rightIdx] && this.heap[rightIdx][1] < this.heap[rightIdx][1])
    ) {
      let smallerIdx = leftIdx;
      if (
        this.heap[rightIdx] &&
        this.heap[rightIdx][1] < this.heap[smallerIdx][1]
      ) {
        smallerIdx = rightIdx;
      }

      this.swap(index, smallerIdx);
      index = smallerIdx;
      leftIdx = index * 2 + 1;
      rightIdx = index * 2 + 2;
    }
  }
}
