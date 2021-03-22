def solution(strings, n):
    answer = []
    for i in range(len(strings)):
        strings[i] = strings[i][n] + strings[i]
    strings.sort()
    print(strings)

    for k in range(len(strings)):
        answer.append(strings[k][1:])

    return answer
