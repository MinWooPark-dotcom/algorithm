function solution(numbers) {
    const max = 9;
    const fullSum = (max * (max + 1)) / 2;
    const givenSum = numbers.reduce((x, y) => x + y, 0);
    
    return fullSum - givenSum;
}