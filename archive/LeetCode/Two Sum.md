Algorithm Problem with Python — 32day

---

### **문제 설명 📖**

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

**제한사항**

- 2 <= nums.length <= 103
- 109 <= nums[i] <= 109
- 109 <= target <= 109
- Only one valid answer exists.

**입출력 예**

Example 1:

> Input: nums = [2,7,11,15], target = 9
> Output: [0,1]
> Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

> Input: nums = [3,2,4], target = 6
> Output: [1,2]

Example 3:

> Input: nums = [3,3], target = 6
> Output: [0,1]

---

### **문제 이해 🔑**

리스트와 타겟이 주어지면 덧셈하여 타겟을 만들 수 있는 배열의 두 숫자 인덱스를 리턴하는 문제입니다.
문제 자체는 매우 쉬우나 최적화할 수 여러 가지 방법이 있으니 어떤 방식으로 최적화를 할 수 있는지 체크하는 문제입니다.

---

### **수도 코드 ✍️**

타겟에서 첫 번째 수를 빼면 두 번째 수를 바로 알 수 있기에 이러한 방식으로 접근합니다.

1. enumerate를 통해 index, value를 얻은 후 키와 값을 바꾸어 딕셔너리로 저장합니다.
2. 타겟에서 첫 번째 수를 뺀 결과로 키를 조회합니다.
3. 타겟에서 첫 번째 수를 뺸 값(편의상 a로 지칭)이 딕셔너리에 존재하고, 첫 번째 수의 인덱스가 딕셔너리 키a의 값이 아니라면 첫 번째 값의 인덱스와 딕셔너리의 키 a의 값을 리턴합니다.

---

### 정리 😄

문제 자체는 정말 쉬웠습니다.
이 문제의 최적화를 공부하기 이전에는 Brute-Force로 계산했었습니다.
이중 for문을 이용하여 모든 조합을 일일이 확인해 O(n²)의 시간복잡도를 가졌을 겁니다.
이 문제의 경우 타겟에서 첫 번째 수를 빼면 두 번째 수를 바로 알아낼 수 있다는 점을 활용하여 두 번째 수를 키로 하고 기존의 인덱스를 값으로 바꿔서 딕셔너리로 만드는 방식을 사용하여 O(n)의 시간복잡도로 줄일 수 있었습니다.
LeetCode에서는 52ms만에 실행된 것을 확인할 수 있었습니다.

> LeetCode 실행 결과
> ![](https://images.velog.io/images/qmasem/post/95735b55-b48a-4cbf-bb37-d006e526f2a2/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-05-07%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%204.55.13.png)

이전에는 문제를 풀 수 있는가 없는가에 대해서만 생각하고 급급했었는데 이처럼 문제 풀이 성공의 결과를 떠나 과정에 집중하니 알고리즘 풀이가 더 흥미롭게 느껴졌습니다.

앞으로는 마음을 내려놓고 한 문제 한 문제 깊이있게 다가가는 연습을 하면 좋겠다는 생각이 듭니다.

---

Reference

- 박상길, 『파이썬 알고리즘 인터뷰, 책만 (2020), p169-175.
