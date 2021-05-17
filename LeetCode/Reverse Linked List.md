Algorithm Problem with Python — 40day

---

### **문제 설명 📖**

Given the head of a singly linked list, reverse the list, and return the reversed list.

단일 연결 목록의 헤드가 지정되면 목록을 반대로 적용한 후 반전된 목록을 반환합니다.

**입출력 예**

Example 1:
![](https://images.velog.io/images/qmasem/post/449bb760-8d2e-43ad-892b-b8a3671c8cad/image.png)

> nput: head = [1,2,3,4,5]
> Output: [5,4,3,2,1]

Example 2:
![](https://images.velog.io/images/qmasem/post/34578d5e-f879-4756-b996-7821cc9fb00e/image.png)

> nput: head = [1,2]
> Output: [2,1]

Example 3:

> nput: head = []
> Output: []

**제한사항**

- The number of nodes in the list is the range [0, 5000].
- -5000 <= Node.val <= 5000

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

---

### **문제 이해 🔑**

인풋으로 주어진 연결리스트를 뒤집는 문제입니다.
풀이법으로는 재귀 구조로 뒤집기와 반복 구조로 뒤집기가 되겠습니다.

---

### **수도 코드 ✍️**

풀이 1. 재귀 구조로 뒤집기

1. 재귀 함수를 만듭니다. 매개변수로는 현재 노드와 이전 노드를 받습니다.
   맨 처음 실행할 때 이전 노드가 존재하지 않기에 이전 노드를 받는 매개변수는 기본 매개변수로 만들고 None을 넣습니다.

2. base case를 작성합니다. 현재 node가 None이라면 이전 노드를 리턴합니다.

3. recursive case를 작성합니다.
   현재 노드의 next 값을 변수에 담습니다.
   현재 노드의 next 값에 이전 노드를 재할당 합니다.

4. 다음 노드 next(현재 노드의 next 값)와 현재 노드를 인자로 넣어 재귀 호출을 합니다.

풀이 2. 반복 구조로 뒤집기

1. 현재 노드와 이전 노드를 담을 변수를 만듭니다. 맨 처음 이전 노드는 존재하지 않으니 None을 할당합니다.

2. 반복문을 통해 node가 존재할 때 까지 현재 노드의 next 값을 변수에 담고, 현재 노드의 next 값에는 이전 노드를 재할당 합니다.

3. 반복문이 종료되면 이전 노드를 리턴합니다.

---

### 정리 😄

> Runtime and Memory
> ![](https://images.velog.io/images/qmasem/post/16102e84-dce5-4493-9973-43dc3405220a/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-05-17%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.27.32.png)

풀이 1, 재귀 구조로 뒤집는 결과는 44밀리초가 걸리며 20.4MB 메모리를 차지했습니다.
풀이 2, 반복 구조로 뒤집는 결과는 32밀리초가 걸리며 15.4MB 메모리를 차지했습니다.

반복 구조가 공간 복잡도도 더 낮은 편이고 실행 속도가 약간 더 빠른 편이나 어떤 풀이를 선택해도 큰 문제는 없습니다.

---

Reference

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만 (2020), p219-220.
