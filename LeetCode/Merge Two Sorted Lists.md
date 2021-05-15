Algorithm Problem with Python — 39day

---

### **문제 설명 📖**

Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

정렬된 링크된 두 목록을 병합하고 정렬된 목록으로 반환합니다. 목록은 처음 두 목록의 노드를 함께 분할하여 작성해야 합니다.

**입출력 예**

Example 1:
![](https://images.velog.io/images/qmasem/post/bca45199-6fbf-41bf-b3be-e701d87e2ed2/image.png)

Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: l1 = [], l2 = []
Output: []
Example 3:

Input: l1 = [], l2 = [0]
Output: [0]

**제한사항**

- The number of nodes in both lists is in the range [0, 50].
- -100 <= Node.val <= 100
- Both l1 and l2 are sorted in non-decreasing order.

---

### **문제 이해 🔑**

인풋으로 정렬되있는 두 연결 리스트 (ex [1,2,4], [1,3,4])를 받아 합치는 문제입니다.
이 문제에서는 정렬된 리스트라는 점이 중요합니다.

병합 정렬에서 마지막 조합 시 첫 번째 값부터 차례대로만 비교하면 한 번에 해결되듯이, 이 또한 병합 정렬의 마지막 조합과 동일한 방식으로 첫 번째부터 비교하면서 리턴하면 쉽게 풀 수 있는 문제입니다.

---

### **수도 코드 ✍️**

1. 인풋 l1, l2의 값을 비교해 작은 값이 왼쪽에 오도록 스왑(swap)합니다.
2. l1.next에는 그다음 값이 엮이도록 재귀 호출을 사용합니다.
3. l1이 None이 되면서 재귀가 끝나고 리턴을 합니다.

---

### 정리 😄

해당 문제에서 사용한 방식인 병합 정렬(merge sort)이란 하나의 리스트를 두 개의 균등한 크기로 분할하고 분할된 부분 리스트를 정렬한 다음, 두 개의 정렬된 부분 리스트를 합하여 전체가 정렬된 리스트가 되게 하는 방법입니다.

---

Reference

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만 (2020), p213-218.
- [HeeJeong Kwon , [알고리즘] 합병 정렬(merge sort)이란](https://gmlwjd9405.github.io/2018/05/08/algorithm-merge-sort.html)
