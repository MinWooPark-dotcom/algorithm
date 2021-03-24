def solution(n):
    answer = 0
    for i in range(1, n+1):
        if n % i == 0:
            answer += i
    return answer

#  좀 더 파이썬답게 작성된 모범 코드


def solution(n):
    return num + sum([i for i in range(1, (num // 2) + 1) if num % i == 0])
