Algorithm Problem with JavaScript — 6day

***


### **문제 설명 📖**

길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.

이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)

**제한사항**

- a, b의 길이는 1 이상 1,000 이하입니다.
- a, b의 모든 수는 -1,000 이상 1,000 이하입니다.

**입출력 예**

![](https://images.velog.io/images/qmasem/post/47b53378-521a-49f7-a62b-c7af590eddb4/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-02-15%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%209.39.05.png)

**입출력 예 설명**

입출력 예 #1
- a와 b의 내적은 1*(-3) + 2*(-1) + 3*0 + 4*2 = 3 입니다.

입출력 예 #2
- a와 b의 내적은 (-1)*1 + 0*0 + 1*(-1) = -2 입니다.

***

### **문제 이해 🔑**

인풋으로 주어진 두 배열을 순회하며 각 n번 쨰의 값을 곱한 값들을 모두 더하는 문제입니다.
두 배열의 값을 비교하는 것처럼 반복문을 통해 각 값에 접근한 후 대소비교가 아닌 곱하기 연산자를 이용하여 얻은 값을 누적한 값을 구하면 됩니다.



***

### **수도 코드 ✍️**

1. 반복문을 이용하여 두 배열을 모두 순회합니다.
2. 각 배열의 0번 째부터 마지막번 째까지 a배열의 값과 b배열의 값을 곱한 후 더합니다.
3. 반복문이 마치면 2번 과정을 거친 값을 리턴합니다.

***

### 정리 😄

'쌓는다'라는 뜻의 한자인 '적'은 수학에서 곱한다는 의미를 가집니다.
그래서 각 값들을 곱하여 더하는 것이 차곡차곡 쌓는 것처럼 느껴졌습니다.
낯선 단어가 나와 문제가 어렵게 보였지만 수학 용어를 찾아보고 이해하니 정말 간단한 문제였습니다.
앞으로도 낯선 언어를 만나게 되면 어려운 것이 아니라 익숙하지 않아서 그런 것일 뿐임을 깨닫고 도전해야겠다고 생각했습니다.


