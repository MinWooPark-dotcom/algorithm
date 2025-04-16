Algorithm Problem with Python — 36day

---

### **문제 설명 📖**

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

정수 배열 번호가 주어지면 숫자[i]를 제외한 모든 숫자 요소의 곱과 같은 배열 응답을 반환합니다.

숫자의 접두사 또는 접미사의 곱은 32비트 정수에 적합하도록 보장된다.

**제한사항**

- 2 <= nums.length <= 10⁵
- -30 <= nums[i] <= 30
- The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

Follow up:

Could you solve it in O(n) time complexity and without using division?
Could you solve it with O(1) constant space complexity? (The output array does not count as extra space for space complexity analysis.)

**입출력 예**

Example 1:

> Input: nums = [1,2,3,4]
> Output: [24,12,8,6]

Example 2:

> Input: nums = [-1,1,0,-3,3]
> Output: [0,0,9,0,0]

---

### **문제 이해 🔑**

리스틀를 입력받아 ouput[i]가 자신을 제외한 나머지 모든 요소의 곱셈 결과가 되도록 출력하는 문제입니다.

Follow up을 보시면 나눗셈을 하지 않고 O(n)에 풀이하라고 나옵니다.

간단한 풀이로 떠오르는 모두 곱하여 자기 자신을 나누는 것은 안되니 자기 자신을 제외하고 왼쪽과 오른쪽의 곱셈 결과를 곱하는 풀이로 접근해야 합니다.

---

### **수도 코드 ✍️**

1. 자기 자신을 제외한 왼쪽의 곱셈 결과를 리스트로 만들어야 합니다.
   미리 리스트를 만들어 둔 후 nums[i]를 제외한 왼쪽 편의 곱들을 리스트에 넣습니다.

2. 1에서 구한 결과에 오른쪽 값을 차례대로 곱합니다.
   오른쪽은 우에서 좌측으로 진행하니 range() 함수를 사용할 때 3번 째 인자로 -1을 줍니다.
   오른쪽 값은 i가 감소하니 nums에 접근할 때 사용 가능합니다.
   그래서 한 칸씩 좌측으로 이동할 때 마다 오른쪽 값에 nums[i]를 곱하면 됩니다.

---

### 정리 😄

follow up을 충족시키는 풀이는 일반 수학 식으로는 쉬우나 컴퓨팅적 사고로 만들어진 알고리즘을 이해하기에 꽤나 까다로웠습니다.

평소 range() 함수의 세 번째 인자로 음수를 넣었을 때 감소하는 방식으로 사용할 수 있다는 점도 알게 되었습니다.

코드를 입력하기 전에 먼저 완벽한 풀이가 정리된 후 비로소 코드를 작성할 수 있었습니다.

자기 자신을 제외하고 왼쪽의 곱셈 결과와 오른쪽의 곱셈 결과를 곱해야 한다는 점을 이해하고 손으로 직접 풀어보는 과정이 필요했습니다.

---

Reference

- 박상길, 『파이썬 알고리즘 인터뷰, 책만 (2020), p193-194.
