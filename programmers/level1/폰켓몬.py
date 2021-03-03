# nums가 [3,1,2,3] 라면
def solution(nums):
    answer = 0
    arr = []
    dict = {}
    for i in range(len(nums)):
        if not(nums[i] in dict):
            dict[(nums[i])] = 1
        else:
            dict[(nums[i])] += 1
    # print(dict)  {3: 2, 1: 1, 2: 1}
    sorted_dict = sorted(dict.items(), key=lambda item: item[1])
    print(sorted_dict)  # [(1, 1), (2, 1), (3, 2)]
    for i in range(len(sorted_dict)):
        arr.append(sorted_dict[i][0])
        if i == len(sorted_dict)-1 or len(arr) == len(nums)/2:
            return len(arr)
