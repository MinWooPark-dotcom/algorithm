# - 실패한 코드

import string


def slicing(s, n, str):
    # print(s,n,str)
    for i in range(len(str)):
        if s[0] == str[i] and i != len(str)-1:
            return str[i+n: len(s)+1]
        elif s[0] == str[i] and i == len(str)-1:
            return str[0+n-1: len(s)]


def solution(s, n):
    answer = ''
    lowercase = string.ascii_lowercase  # 소문자 abcdefghijklmnopqrstuvwxyz
    uppercase = string.ascii_uppercase  # 대문자 ABCDEFGHIJKLMNOPQRSTUVWXYZ

    if s.islower():
        # for i in len(lowercase):
        # if s[0] == lowercase[i]:
        # return lowercase[i + n : len(s)]
        return slicing(s, n, lowercase)
    else:
        # for i in len(uppercase):
        # if s[0] == uppercase[i]:
        # return uppercase[i + n : len(s)]
        return slicing(s, n, uppercase)


# - 모범 코드

def caesar(s, n):
    s = list(s)
    for i in range(len(s)):
        if s[i].isupper():
            s[i] = chr((ord(s[i]) - ord('A') + n) % 26 + ord('A'))
        elif s[i].islower():
            s[i] = chr((ord(s[i]) - ord('a') + n) % 26 + ord('a'))

    return "".join(s)
