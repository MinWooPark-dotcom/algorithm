Algorithm Problem with Python — 35day

---

### **문제 설명 📖**

Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

n개의 페어를 이용한 min(a, b)의 합으로 만들 수 있는 가장 큰 수를 출력합니다.

**제한사항**

- 1 <= n <= 10⁴
- nums.length == 2 \* n
- -10⁴ <= nums[i] <= 10⁴

**입출력 예**

Example 1:

> Input: nums = [1,4,3,2]
> Output: 4
> Explanation: All possible pairings (ignoring the ordering of elements) are:

1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
   So the maximum possible sum is 4.

Example 2:

> Input: nums = [6,2,6,5,1,2]
> Output: 9
> Explanation: The optimal pairing is (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9.

---

### **문제 이해 🔑**

2n개의 정수 배열 번호가 주어지면, 이러한 정수를 n쌍(a1, b1), (a2, b2), ..., (an, bn)으로 그룹화하여 alli에 대한 min(ai, bi)의 합이 최대화되도록 한다. 최대 합계를 반환합니다.

2n개의 정수 배열이 주어집니다.
이러한 정수를 n쌍으로 그룹화하여 min(a, b)의 합으로 만들 수 있는 가장 큰 수를 출력하는 문제입니다.

예를 들면 예시 1에처럼 [1, 4, 3, 2]가 주어지면 2쌍으로 그룹화하여 각 그룹마다 min()함수를 적용한 합 중에서 가장 큰 수를 구하는 것입니다.

여기서는 min(1,2) + min(3,4) = 4가 가장 큰 수가 됩니다.

그럼 이 문제는 n개의 페어로 그룹화하는 방식으로 접근하면서 효율적인 방식을 찾으면 됩니다.

그룹화하여 min()함수 인자로 2개 씩 넣으니 정렬된 배열에서 짝수 번째에 접근하는 것을 알 수 있습니다.

그렇다면 굳이 min()를 사용하지 않고 정렬된 배열에서 짝수 번째 값만 추출할 수 있으면 됩니다.

---

### **수도 코드 ✍️**

1. 인풋 배열을 정렬합니다.
2. 슬라이싱을 통해 2칸씩 건너뜁니다.
   짝수 번째에만 접근할 수 있습니다.
3. 2에서 접근한 값들을 모두 더해서 리턴합니다.

---

### 정리 😄

sorted() 함수를 통해 정렬된 값을 반환받고 슬라이싱의 step에 2를 넣어 2칸씩 건너뜁니다.
그럼 0,2,4,6.. 번째에 접근할 수 있습니다
그리고 이 값을 sum()을 통해 모두 더하면 조건에 맞는 값을 얻어낼 수 있습니다.

이 문제는 인풋을 정렬하고 빈 배열에 차곡차곡 넣고 n개의 페어로 나누고 min()를 적용시키고 합하는 번거로운 과정을 파이썬답게 풀이하면 단 한 줄의 코드로 풀 수 있었습니다.

풀이에서 규칙을 발견한다면 다음과 같이 간결한 코드가 완성될 수 있음을 느꼈습니다.

---

Reference

- 박상길, 『파이썬 알고리즘 인터뷰, 책만 (2020), p190-192 .
