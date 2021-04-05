
Algorithm Problem with Python — 28day

***

### **문제 설명 📖**

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


**제한사항**

- 1 <= strs.length <= 104
- 0 <= strs[i].length <= 100
- strs[i] consists of lower-case English letters.

**입출력 예**

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]



***
### **문제 이해 🔑**

![](https://images.velog.io/images/qmasem/post/df601156-a364-49fb-a74b-ea6550a2233c/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-04-05%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%209.43.01.png)

anagram이란 일종의 언어유희로 문자를 재배열하여 다른 뜻을 가진 단어로 바꾸는 것을 말합니다.
예로 들면, 다음과 같은 문장이 있습니다.

> "듣기(Listen) 위해선 우선 조용히(Silent) 해야 한다."

인풋으로 문자열 배열이 주어졌으니 해당 문자열들 중 애너그램 단위로 정렬하는 문제입니다.

애너그램 관계는 단어들을 정렬하면 서로 같은 값을 갖게 되니 정렬하여 비교하는 방식으로 접근하면 되겠습니다.

***

### **수도 코드 ✍️**

1. 인풋 문자열을 정렬한 값을 키로 하여 넣을 딕셔너리를 만듭니다.
딕셔너리는 defaultdict()로 선언하여 키 존재 여부를 체크하지 않을 수 있게 합니다.

2. 인풋 문자열을 반복문을 통해 순회합니다.

3. 반복문을 통해 접근한 각 문자열을 sorted 정렬 후 얻은 배열을 join을 통해 다시 문자열로 만듭니다.

4. 3에서 얻은 값을 키, 정렬 전의 문자열을 값으로 하여 1에서 만든 디폴트 딕셔너리에 넣습니다.

5. 반복문이 끝나면 디폴트 딕셔너리의 값들을 추출하여 리스트로 만든 후 리턴합니다.


***


### 정리 😄

애너그램 관계는 단어들을 정렬하면 서로 같은 값을 갖게 되니 정렬하여 비교하는 방식으로 접근하면 되었습니다.

그리고 defaultdict는 매번 키 존재 여부를 체크하지 않고 비교 구문을 생략해 간결하게구성해 주는 장점이 있었습니다.

파이썬에는 여러 가지 정렬 방법이 존재하는데 여기서는 sorted()를 사용했습니다.
sort()와 sorted()의 차이가 있습니다.

<list>.sort()는 리턴 값이 None이며, mutable합니다.

sorted(<list>)는 정렬된 새로운 리스트가 반환되며, immutable합니다.
그리고 모든 iterable에 사용이 가능합니다.
  
***

Reference

- 박상길, 『파이썬 알고리즘 인터뷰, 책만 (2020), p153-158.




