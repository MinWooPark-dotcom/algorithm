class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        out = []
        p = 1
        # 왼쪽 곱셈
        for i in range(0, len(nums)):
            out.append(p)
            p = p * nums[i]
        print('out', out) # [1, 1, 2, 6]
        p = 1
        # 왼쪽 곱셈 결과(out)에 오른쪽 값(p)을 차례대로 곱셈
        for i in range(len(nums) - 1, 0 - 1, -1):
            out[i] = out[i] * p # p는 1, 4, 12, 24이 됨
            p = p * nums[i] 
        return out # [1, 1, 2, 6]과 [24, 12, 4, 1]이 만나 각 인덱스 별로 곱하여 [24, 12, 8, 6]이 답이 됨.
