def solution(n):

    sieve = [True]*(n+1)

    m = int(n ** 0.5)
    for i in range(2, m+1):
        if sieve[i] == True:  # i가 소수라면
            for j in range(i*i, n+1, i):  # i의 배수는 소수 아님
                sieve[j] = False

    x = [i for i in range(2, n+1) if sieve[i] == True]
    answer = len(x)
    return answer
