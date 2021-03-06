
Algorithm Problem with Python — 14day

***


### **문제 설명 📖**

대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를 들어 s가 pPoooyY면 true를 return하고 Pyy라면 false를 return합니다.

**제한사항**
- 문자열 s의 길이 : 50 이하의 자연수
- 문자열 s는 알파벳으로만 이루어져 있습니다.

**입출력 예**

![](https://images.velog.io/images/qmasem/post/c1a3197e-3b2d-4bf4-9c89-075d4f322329/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-02-25%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%209.52.23.png)


입출력 예 설명

입출력 예 #1
'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.

입출력 예 #2
'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.

***
### **문제 이해 🔑**

문제 제목 그대로 인풋 문자열 내 p와 y개수를 카운팅하는 문제입니다.
문자열을 순회하며 카운팅을 할 줄 아는지, 조건문을 통해 비교할 수 있는지 체크하는 문제입니다.
카운트 변수를 만들어 둔 후 반복문을 통해 순회하며 카운팅을 하면 됩니다.

***

### **수도 코드 ✍️**

1. 인풋을 소문자화(또는 대문자화) 하고 카운팅할 변수를 만듭니다.
2. 반복문을 통해 주어진 인풋을 순회합니다.
3. 'p' or 'y' 가 있는 경우 카운트를 합니다.
4. 둘의 카운트를 비교하여 같으면 True, 다르면 False를 리턴합니다.

***

### 정리 😄

문제를 푼 후 다른 사람의 풀이를 참고하니 count()함수를 사용하여 for문을 사용하지 않고서도 해결한 것을 발견했습니다. 
카운팅을 할 때는 반복문을 사용하는 것보다 count()함수를 사용하는 것이 가독성에서 유리해 보입니다.
리팩토링을 통해 count()함수를 익히고 유사 문제에서 사용하여 익히도록 해야겠습니다.
```python
    return s.lower().count('p') == s.lower().count('y')
```



