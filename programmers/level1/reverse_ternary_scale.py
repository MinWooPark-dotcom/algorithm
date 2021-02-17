def solution(n):
    answer = ''

    while n > 0:
        n, re = divmod(n, 3)  # n을 3으로 나눈 몫과 나머지
        answer += str(re)
    return int(answer, 3)

# divmod() : 몫과 나머지를 리턴합니다. 리턴 값이 2개이므로 튜플을 사용합니다.
# int(x, base) : base 진법으로 구성된 str 형식의 수를 10진법으로 변환해 줌
