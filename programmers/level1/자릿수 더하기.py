def solution(n):
    answer = 0
    n_str = str(n)
    for i in range(len(n_str)):
        answer += int(n_str[i])
    return answer


def sum_digit(number):
    if number < 10:
        return number
    return (number % 10) + sum_digit(number // 10)
