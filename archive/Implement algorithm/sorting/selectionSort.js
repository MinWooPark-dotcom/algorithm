/** 선택 정렬(selection sort)은 제자리 정렬 알고리즘의 하나로, 다음과 같은 순서로 이루어진다.
 1. 주어진 리스트 중에 최소값을 찾는다.
 2. 그 값을 맨 앞에 위치한 값과 교체한다.
 3. 맨 처음 위치를 뺀 나머지 리스트를 같은 방법으로 교체한다.
 비교하는 것이 상수 시간에 이루어진다는 가정 아래, n개의 주어진 리스트를 이와 같은 방법으로 정렬하는 데에는 Θ(n²) 만큼의 시간이 걸린다.
 외부 루프와 최솟값을 찾는 내부 루프로 총 두 개의 반복문이 실행

 선택 정렬은 알고리즘이 단순하며 사용할 수 있는 메모리가 제한적인 경우에 사용시 성능 상의 이점이 있다.
 cf. 제자리 정렬 알고리즘이란 정렬에 추가적인 메모리 공간이 들지 않는다. 아예 안 드는 것은 아니고 거의 무시할 정도의 메모리를 사용한다. **/

// 정렬 전: [9, 2, 5, 1, 3] 정렬 후: [1, 2, 3, 5, 9]

const arr = [9, 2, 5, 1, 3];

const selectionSort = (arr) => {
    let minIndex;
    let minValue;
    for (let i = 0; i < arr.length; i++) {
            minValue = arr[i];
            minIndex = null;
        for (let k = i+1; k < arr.length; k++) {
            if (minValue > arr[k]) {
                minValue = arr[k];
                minIndex = k;
            }
        }
        if (minIndex) {
            arr[minIndex] = arr[i];
            arr[i] = minValue;
        }
    }
    return arr;
}

console.log(selectionSort(arr)) // [1, 2, 3, 5, 9]
