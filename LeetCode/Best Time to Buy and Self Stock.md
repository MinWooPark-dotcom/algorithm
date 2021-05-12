Algorithm Problem with Python — 37day

---

### **문제 설명 📖**

You are given an array prices where prices[i] is the price of a given stock on the iᵗʰ day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

당일에 주어진 주식의 가격이 매겨지는 가격이 주어집니다.

당신은 하나의 주식을 사기 위해 단 하루를 선택하고 그 주식을 팔기 위해 미래에 다른 날을 선택함으로써 당신의 이익을 극대화하고자 합니다.

이 거래에서 얻을 수 있는 최대 이익을 반환합니다. 만약 당신이 어떠한 이익도 얻을 수 없다면, 0을 반환하세요.

**제한사항**

- 1 <= prices.length <= 10⁵
- 0 <= prices[i] <= 10⁴

**입출력 예**

Example 1:

> Input: prices = [7,1,5,3,6,4]
> Output: 5
> Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
> Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:

> Input: prices = [7,6,4,3,1]
> Output: 0
> Explanation: In this case, no transactions are done and the max profit = 0.

---

### **문제 이해 🔑**

인풋으로 날 마다의 주식의 가격이 주어집니다.
가격 중 저점에 사서 고점에 팔아 최대 이익을 찾는 문제입니다.

브루트 포스로 계산하면 이중 for문 사용하여 O(n²)으로 모든 경우의 수를 반복하여 마지막에 최대 이익을 산출할 수 있습니다.
하지만 타임아웃으로 풀리지 않습니다.

더 효율적인 풀이법으로는 저점과 현재 값과의 차이를 계산하는 것입니다.

인풋을 그래프로 x축에 인덱스, y축에 값을 적어 그려보면 직관적으로 답이 보입니다.

매일 값이 달라지기 때문에 현재 값을 가리키는 포인터가 우측으로 이동하면서 이전 상태의 저점을 기준으로 가격 차이를 계산하고, 만약 클 경우 최댓값을 계속 교체해나가는 형태로 O(n) 풀이가 가능합니다.

---

### **수도 코드 ✍️**

1. 인풋이 []인 경우를 대비해서 최대 이익 변수에는 0을 넣어 놓습니다.

2. 저점 가격 변수에는 가장 높은 값을 초깃값으로 두어 어떤 값이든 교체될 수 있게 합니다.

3. 반복문을 통해 인풋을 순회합니다.
   이 때, 현재 최저 가격과 순회하는 인풋의 값과 비교하여 계속해서 저점을 찾아냅니다.
   그리고 현재 최대 이익과 현재 값에서 저점을 뺀 값과 비교하여 최고 이익을 찾아냅니다.

4. 반복문이 종료되면 최대 이익을 리턴합니다.

---

### 정리 😄

이 문제는 컴퓨터과학 분야에서 유명한 유서 깊은 문제였습니다.
카데인 알고리즘(Kadane's Algorithm) 방법으로 O(n)에 풀이할 수 있었습니다.

카데인 알고리즘을 설명하기 이전에 다이내믹 프로그래밍(Dynamic Programming)을 알아야 하는데,
다이나믹 프로그래밍이란 기본적으로 복잡하게 반복해야 하는 문제를 여러개의 문제로 나눈 후, 그 문제들을 매 번 반복하지 않고, 그 값을 저장해 두었다가 재 사용하는 기법이다. 기법 중 하나입니다.
앞의 값을 이용해 뒤의 값을 구할 수 있습니다.

카데인 알고리즘은 이러한 DP 기법 중 하나입니다.
최대 부분 합을 구할 때 사용합니다. 1차원 배열에서 부분 배열 중 최대 합을 구하면 됩니다.

이에 대한 좋은 레퍼런스가 있어 밑에 링크를 걸어두겠습니다.

---

Reference

- 박상길, 『파이썬 알고리즘 인터뷰』, 책만 (2020), p195-198.
- [Junimo, 지속가능한 개발 블로그 - 『Dynamic Programming - Kadane’s Algorithm (카데인 알고리즘)』](https://sustainable-dev.tistory.com/23)
