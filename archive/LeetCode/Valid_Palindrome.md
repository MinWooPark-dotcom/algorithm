
Algorithm Problem with Python — 26day

***


### **문제 설명 📖**

Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.


**제한사항**

- 1 <= s.length <= 2 * 105
- s consists only of printable ASCII characters.

**입출력 예**

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

***
### **문제 이해 🔑**

palindrome(펠린드롬)은 우리말로 회문이라 부르며 앞뒤가 똑같은 단어나 문장을 말합니다.

주어진 문자열이 펠린드롬인지 확인하기 위해서는 문자열의 맨 앞과 맨 뒤에 각각 접근할 수 있어야 합니다.
그리고 비교할 수만 있다면 해결할 수 있는 문제입니다.

앞 뒤로 값을 접근할 때 유용한 자료형에 Deque(데크)가 있습니다.
리스트의 pop(0)이 O(n)인 데 반해, 데크의 popleft()는 O(1)이기 때문에 각각 n번씩 반복하면 리스트 구현은 O(n²), 데크 구현은 O(n)으로 성능 차이가 큽니다.

데크 자료형을 사용할 수 있는지도 체크하는 문제가 되겠습니다.

***

### **수도 코드 ✍️**

1. 데크 자료형을 만듭니다.
2. 주어진 문자열을 for in문을 통해 순회합니다.
3. 문자열의 각 문자가 영숫자 문자라면 데크 자료형에 소문자화 하여 값을 넣습니다.
4. 인풋 문자열을 소문자화 하여 영숫자만 선별하였다면 펠린드롬 여부를 검사해야 합니다.
이 때 while문을 통해 데크의 길이가 1보다 큰 경우의 반복문을 만듭니다.
5. 3번에서 만든 데크를 popleft()와 pop()을 통해 앞, 뒤 문자를 비교합니다.
6. 모두 같다면 True, 도중에 다르다면 False를 리턴합니다.

***

### 정리 😄

펠린드롬 특징을 이용하면 재밌는 문제들을 많이 만들 수 있어 자주 출제되는 문제 중 하나입니다.

이전에는 펠린드롬 유형의 문제를 리스트로 해결하였는데 데크 자료형을 알게 되어 다시 같은 유형을 풀어보게 되었습니다.

![](https://images.velog.io/images/qmasem/post/a48575b7-5505-4800-bfbf-302cdf9ae056/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-04-03%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2012.55.13.png)

리스트로 푼 런타임은 284ms이고, 데크로 푼 런타임이 52ms로 약 5배가 차이났음을 알 수 있습니다.

앞으로는 한 문제에서도 다양한 풀이를 통해 런타임을 비교하여 효율성도 비교하고 다양한 사고를 해 보아야 겠습니다.

데크 자료형에 대해서는 처음 알게 되어 따로 정리하는 시간을 갖도록 하겠습니다.


***

Reference

- 박상길, 『파이썬 알고리즘 인터뷰, 책만 (2020), p138-140.

- [데크(deque) 언제, 왜 사용해야 하는가?]
(https://chaewonkong.github.io/posts/python-deque.html)


