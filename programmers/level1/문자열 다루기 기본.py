def solution(s):
    try:
        if type(int(s)) == int and 4 == len(s) or 6 == len(s):
            return True
        else:
            return False
    except:
        return False
