---
title: "[프로그래머스] 직사각형 별찍기 - JavaScript"
# author: Chas
daata: 2022-05-10
category: algorithm
layout: post
---
[프로그래머스] 직사각형 별찍기 - Algorithm Problem with JavaScript

***

### **문제 설명 📖**

이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

**제한사항**

- n과 m은 각각 1000 이하인 자연수입니다.

**입출력 예**

입력
![](https://velog.velcdn.com/images/qmasem/post/76c29903-085c-4fa5-8615-a36947a72ad3/image.png)

출력
![](https://velog.velcdn.com/images/qmasem/post/28e7ee54-08ac-45db-b13a-4482e0dc5add/image.png)

***

### **문제 이해 🔑**

반복문을 사용하여 행렬을 만드는 문제로 이해했습니다.
행렬을 2차원 배열로 표현할 수 있기 때문에 이중 for문으로 해결할 수 있다고 생각했습니다.


***

### **수도 코드 ✍️**

1. 각 행의 값을 담을 변수를 선언한다.
2. 반복문을 통해 행만큼 반복한다.
3. 2차원 반복문을 만들어 각 행에서 열만큼 반복하여 별(*) 문자를 만든다.
4. 2차원 반복문이 끝나면 각 행의 값을 출력한다.
5. 1차원 반복문에서 다음 행으로 넘어오면 이전 행의 값을 담았던 변수를 빈 문자열로 초기화하고 행이 끝날 때 까지 2 ~ 4 과정을 반복하고 종료한다.

***


### ** 내가 작성한 코드 작성 ⌨️**


``` javascript
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let result = ""
    for (let i = 0; i < b; i++) {
        result = ""
        for (let j = 0; j < a; j++) {
            result = result + "*"
        }
        console.log(result)
    }
});
```

***

### ** 다른 사람이 작성한 코드 작성 ⌨️**

```javascript
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    console.log((('*').repeat(a)+`\n`).repeat(b))
});
```

***

### 정리 😄 

행렬을 만드는 문제이기에 2차원 배열을 만들기 위해 이중 for문을 생각했습니다.  
그러나 다른 사람이 작성한 코드를 보면서 해당 문제는 행렬의 각 요소에 특정 값을 입력하지 않고 별(*) 문자만을 입력하는 문제이기 때문에 이중 for문을 사용하여 시간 복잡도를 O(n²)으로 만들 필요가 없다는 것을 깨달았습니다.  
이번 문제 풀이를 보고 인자로 반복할 값을 넣어주면 문자열을 반복한 값을 리턴해 주는 repeat 메서드를 알게 되었습니다.  
해당 메서드로 체이닝을 하면 더욱 직관적이고 간결한 코드를 작성할 수 있으며 시간 복잡도 또한 O(n)으로 줄일 수 있음을 알게 되었습니다.