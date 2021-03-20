import datetime


def solution(a, b):
    date = datetime.date(2016, a, b)
    day = date.weekday()
    print(day)
    if day == 0:
        return "MON"
    elif day == 1:
        return "TUE"
    elif day == 2:
        return "WED"
    elif day == 3:
        return "THU"
    elif day == 4:
        return "FRI"
    elif day == 5:
        return "SAT"
    else:
        return "SUN"
