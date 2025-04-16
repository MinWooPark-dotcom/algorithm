
Algorithm Problem with Python — 27day

***


### **문제 설명 📖**


You are given an array of logs. Each log is a space-delimited string of words, where the first word is the identifier.

There are two types of logs:

- Letter-logs: All words (except the identifier) consist of lowercase English letters.
- Digit-logs: All words (except the identifier) consist of digits.
Reorder these logs so that:

The letter-logs come before all digit-logs.
The letter-logs are sorted lexicographically by their contents. If their contents are the same, then sort them lexicographically by their identifiers.
The digit-logs maintain their relative ordering.
Return the final order of the logs.

**제한사항**

- 1 <= logs.length <= 100
- 3 <= logs[i].length <= 100
- All the tokens of logs[i] are separated by a single space.
- logs[i] is guaranteed to have an identifier and at least one word after the identifier.


**입출력 예**

Example 1:

> 
Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
Explanation:
The letter-log contents are all different, so their ordering is "art can", "art zero", "own kit dig".
The digit-logs have a relative order of "dig1 8 1 5 1", "dig2 3 6".


Example 2:

> 
Input: logs = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
Output: ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]


***
### **문제 이해 🔑**

로그 파일을 주어진 기준에 맞추어 재정렬하는 문제입니다.
일반화 시켜서 본다면 문자열을 원소로 갖는 리스트를 재정렬 하는 것입니다.

여기서 주의해야 할 점은 리스트의 원소 문자열의 가장 앞 부분은 식별자이며 순서에 영향을 끼치지 않는 점입니다.
식별자를 제외한 가장 앞 글자가 동일한 경우 그 때는 식별자 순으로 정렬합니다.
그렇다면 정렬 기준이 식별자 바로 뒤 문자가 되고, 후순위로 식별자가 기준이 됩니다.

그리고 숫자 원소는 따로 정렬할 필요 없이 입력 순서대로 합니다.

정리하자면, 리스트의 원소들을 정렬하는 것이며 문자 원소가 앞으로 오고 문자 원소끼리에서도 식별자를 뒤의 첫 글자들부터 기준으로 비교하여 정렬합니다.
문자가 동일한 경우 식별자를 활용하여 순서를 정렬합니다.
문자 원소가 모두 정렬되면 숫자 원소들은 순서대로 뒤에 붙입니다.

***

### **수도 코드 ✍️**

1. 주어진 인풋 로그에서 문자 로그, 숫자 로그를 구분하여 담을 리스트를 만듭니다.

2. 인풋 로그를 for in문을 적용하여 각 원소들이 문자 로그인지 숫자 로그인지 구별하여 1에서 만든 리스트에 담습니다.

3. 문자 로그들만 sort함수를 활용하여 정렬합니다. 
이 때, 비교 기준이 되는 key파라미터를 만듭니다.
key를 반환하는 함수는 lambda를 통해 sort 함수의 매개변수에 넣습니다.
식별자를 제외한 뒤의 문자들을 기준으로 만들고, 문자가 동일한 경우에 대비하기 위해 후순위로 식별자를 넣습니다.
![](https://images.velog.io/images/qmasem/post/6c2e654b-fc5f-4b93-8356-9841c24c9e02/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-04-04%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%202.27.48.png)

4. 문자 로그들이 정렬되었다면 숫자 로그와 더하여 리턴합니다.

***

### 정리 😄

Reference

- 박상길, 『파이썬 알고리즘 인터뷰, 책만 (2020), p138-140.
- [파이썬 공식 문서 - 정렬 방법] (https://docs.python.org/3/howto/sorting.html?highlight=sorting#key-functions)



