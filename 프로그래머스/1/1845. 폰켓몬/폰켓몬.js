function solution(nums) {
    const kinds = new Set(nums).size;
    const limit = nums.length / 2;
    
    return Math.min(kinds, limit);
}